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
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState(null);
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

  const openFeedbackModal = () => {
    setFeedbackName(user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : '');
    setFeedbackEmail(user?.email || '');
    setFeedbackMessage('');
    setFeedbackStatus(null);
    setFeedbackModal(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModal(false);
    setFeedbackName('');
    setFeedbackEmail('');
    setFeedbackMessage('');
    setFeedbackStatus(null);
  };

  const handleSubmitFeedback = async () => {
    if (!feedbackMessage.trim()) return;
    setFeedbackStatus('sending');
    try {
      const token = localStorage.getItem('auctionAcademyToken');
      const res = await fetch(`${API_BASE}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name: feedbackName, email: feedbackEmail, message: feedbackMessage }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit feedback.');
      setFeedbackStatus('sent');
      setTimeout(() => closeFeedbackModal(), 2000);
    } catch (err) {
      console.error('Feedback submit error:', err);
      setFeedbackStatus('error');
    }
  };

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
                    <button className="dropdown-item" onClick={() => { setMenuOpen(false); openFeedbackModal(); }}>
                      📧 Contact Us
                    </button>
                    <div className="dropdown-divider" />
                    <button className="dropdown-item dropdown-item-logout" onClick={() => { setMenuOpen(false); onLogout(); }}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <nav className="header-nav" />
              <div className="header-right">
                <button className="nav-cta" onClick={onLogin}>SIGN IN</button>
              </div>
            </>
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

      {/* ── Contact Us / Feedback Modal ── */}
      {feedbackModal && (
        <div className="report-modal-overlay" onClick={closeFeedbackModal}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            {feedbackStatus === 'sent' ? (
              <div className="report-success">
                ✅ Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            ) : (
              <>
                <h3>📧 Contact Us</h3>
                <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Have a question, suggestion, or issue? Let us know and we'll get back to you.
                </p>
                <label className="report-label">Your Name</label>
                <input type="text" className="feedback-input" placeholder="Your name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} />
                <label className="report-label" style={{ marginTop: '0.75rem' }}>How Should We Contact You?</label>
                <input type="text" className="feedback-input" placeholder="Email, phone number, etc." value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} />
                <label className="report-label" style={{ marginTop: '0.75rem' }}>Your Message</label>
                <textarea className="report-textarea" rows={4} placeholder="Describe your question, issue, or feedback..." value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} />
                {feedbackStatus === 'error' && (
                  <div className="report-error">Something went wrong. Please try again or email us at hello@auctionacademy.com</div>
                )}
                <div className="report-actions">
                  <button className="btn-report-submit" onClick={handleSubmitFeedback} disabled={!feedbackMessage.trim() || feedbackStatus === 'sending'}>
                    {feedbackStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <button className="btn-report-cancel" onClick={closeFeedbackModal}>Cancel</button>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center' }}>
                  Or email us directly at <a href="mailto:hello@auctionacademy.com" style={{ color: '#d60000' }}>hello@auctionacademy.com</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default StateSelector;
