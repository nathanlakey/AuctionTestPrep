import { useState, useEffect, useRef } from 'react';
import { states } from '../data/questionBank';
import CustomSelect from './CustomSelect';
import './StateSelector.css';

const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';

const stateOptions = states.map(s => ({ value: s, label: s }));

function StateSelector({ onSelectState, onLogin, onLogout, onProfile, onAdmin, onDashboard, isUserAdmin, user, initialState = '' }) {
  const [selectedState, setSelectedState] = useState(initialState);
  const [showStateDialog, setShowStateDialog] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Wake up the Render server as soon as the homepage loads
  useEffect(() => {
    fetch(`${API_BASE}/api/health`).catch(() => {});
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedState) {
      onSelectState(selectedState, selectedMode);
      setShowStateDialog(false);
      setSelectedMode(null);
    }
  };

  const handleFeatureClick = (mode) => {
    setSelectedMode(mode);
    setShowStateDialog(true);
  };

  const handleDialogClose = () => {
    setShowStateDialog(false);
    setSelectedMode(null);
    setSelectedState('');
  };

  return (
    <div className="state-selector-container">
      {/* ─── Top Nav Bar (Dashboard-style) ─── */}
      <header className="dashboard-header">
        <div className="header-content">
          <img src="/icon.png" alt="Auction Academy" className="dashboard-logo clickable-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          {user ? (
            <>
              <nav className="header-nav">
                <button className="nav-link nav-active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</button>
                {initialState && <span className="nav-link nav-state">{initialState.toUpperCase()}</span>}
                <button className="nav-link" onClick={onDashboard}>DASHBOARD</button>
                <button className="nav-link" onClick={onProfile}>PROFILE</button>
                {isUserAdmin && (
                  <button className="nav-link" onClick={onAdmin}>ADMIN</button>
                )}
              </nav>
              <div className="header-right" ref={menuRef}>
                <button className="nav-cta" onClick={() => setMenuOpen(!menuOpen)}>
                  {user?.username?.toUpperCase() || 'MENU'} {menuOpen ? '▴' : '▾'}
                </button>
                {menuOpen && (
                  <div className="user-dropdown-menu">
                    <button className="dropdown-item" onClick={() => { setMenuOpen(false); onDashboard(); }}>
                      📊 Dashboard
                    </button>
                    <button className="dropdown-item" onClick={() => { setMenuOpen(false); onProfile(); }}>
                      👤 Profile
                    </button>
                    {isUserAdmin && (
                      <button className="dropdown-item" onClick={() => { setMenuOpen(false); onAdmin(); }}>
                        🛡️ Admin
                      </button>
                    )}
                    <div className="dropdown-divider" />
                    <button className="dropdown-item dropdown-item-logout" onClick={() => { setMenuOpen(false); onLogout(); }}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="header-right">
              <button className="nav-cta" onClick={onLogin}>SIGN IN</button>
            </div>
          )}
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <div className="brand-header">
        <img src="/auction-academy-logo.png" alt="Auction Academy" className="brand-logo" />
        <h2>Auctioneer Exam Prep</h2>
        <p className="tagline">Master Your State Licensing Exam</p>
      </div>

      <div className="state-selector-card">
        <h3>Select Your State</h3>
        <p>Choose the state where you'll be taking your auctioneer licensing exam</p>
        
        <form onSubmit={handleSubmit}>
          <CustomSelect value={selectedState} onChange={setSelectedState} placeholder="-- Select a State --" options={stateOptions} />
          
          <button type="submit" className="btn-primary" disabled={!selectedState}>
            Start Learning
          </button>
        </form>
      </div>

      <div className="features-grid">
        <div className="feature-card" onClick={() => handleFeatureClick('test')} style={{ cursor: 'pointer' }}>
          <div className="feature-icon">📝</div>
          <h4>Practice Tests</h4>
          <p>Full 75-question exams simulating the real licensing test</p>
        </div>
        <div className="feature-card" onClick={() => handleFeatureClick('quiz')} style={{ cursor: 'pointer' }}>
          <div className="feature-icon">🎯</div>
          <h4>Topic Quizzes</h4>
          <p>Focus on specific sections and topics</p>
        </div>
        <div className="feature-card" onClick={() => handleFeatureClick('flashcards')} style={{ cursor: 'pointer' }}>
          <div className="feature-icon">🎴</div>
          <h4>Flashcards</h4>
          <p>Quick review with interactive flashcards</p>
        </div>
        <div className="feature-card" onClick={() => handleFeatureClick('game')} style={{ cursor: 'pointer' }}>
          <div className="feature-icon">🎮</div>
          <h4>Study Games</h4>
          <p>Learn through fun and engaging activities</p>
        </div>
      </div>

      {showStateDialog && (
        <div className="modal-overlay" onClick={handleDialogClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleDialogClose}>×</button>
            <h3>Select Your State</h3>
            <p>Choose your state to start this study mode</p>
            <form onSubmit={handleSubmit}>
              <CustomSelect value={selectedState} onChange={setSelectedState} placeholder="-- Select a State --" options={stateOptions} />
              <button type="submit" className="btn-primary" disabled={!selectedState}>
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default StateSelector;
