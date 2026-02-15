import { useState } from 'react';
import { states } from '../data/questionBank';
import './StateSelector.css';

function StateSelector({ onSelectState, onLogin, onLogout, user }) {
  const [selectedState, setSelectedState] = useState('');
  const [showStateDialog, setShowStateDialog] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);

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
      <div className="brand-header">
        <div className="brand-header-top">
          {user ? (
            <div className="user-menu">
              <span className="user-greeting">👋 {user.username}</span>
              <button className="logout-btn" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <button className="login-btn" onClick={onLogin}>Login</button>
          )}
        </div>
        <img src="/auction-academy-logo.png" alt="Auction Academy" className="brand-logo" />
        <h2>Auctioneer Exam Prep</h2>
        <p className="tagline">Master Your State Licensing Exam</p>
      </div>

      <div className="state-selector-card">
        <h3>Select Your State</h3>
        <p>Choose the state where you'll be taking your auctioneer licensing exam</p>
        
        <form onSubmit={handleSubmit}>
          <select 
            value={selectedState} 
            onChange={(e) => setSelectedState(e.target.value)}
            required
          >
            <option value="">-- Select a State --</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          
          <button type="submit" className="btn-primary">
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
              <select 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                required
                autoFocus
              >
                <option value="">-- Select a State --</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              <button type="submit" className="btn-primary">
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
