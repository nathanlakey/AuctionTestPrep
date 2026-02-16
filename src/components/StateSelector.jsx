import { useState, useEffect } from 'react';
import { states } from '../data/questionBank';
import CustomSelect from './CustomSelect';
import './StateSelector.css';

const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';

const stateOptions = states.map(s => ({ value: s, label: s }));

function StateSelector({ onSelectState, onLogin, onLogout, onProfile, onAdmin, onDashboard, isUserAdmin, user, initialState = '' }) {
  const [selectedState, setSelectedState] = useState(initialState);
  const [showStateDialog, setShowStateDialog] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);

  // Wake up the Render server as soon as the homepage loads
  useEffect(() => {
    fetch(`${API_BASE}/api/health`).catch(() => {});
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
      {/* ─── Top Nav Bar ─── */}
      <nav className="top-nav">
        <div className="top-nav-inner">
          <img src="/icon.png" alt="Auction Academy" className="top-nav-logo" />
          <div className="top-nav-links">
            {user ? (
              <>
                {initialState && <button className="top-nav-link top-nav-link-dashboard" onClick={onDashboard}>DASHBOARD</button>}
                {isUserAdmin && <button className="top-nav-link" onClick={onAdmin}>ADMIN</button>}
                <button className="top-nav-link" onClick={onProfile}>PROFILE</button>
                <button className="top-nav-link top-nav-link-logout" onClick={onLogout}>LOGOUT</button>
              </>
            ) : (
              <button className="top-nav-cta" onClick={onLogin}>SIGN IN</button>
            )}
          </div>
        </div>
      </nav>

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
