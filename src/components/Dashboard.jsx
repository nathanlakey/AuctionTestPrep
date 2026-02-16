import { useState, useMemo, useRef, useEffect } from 'react';
import { getAvailableTopics } from '../data/questionBank';
import { useAuth } from './AuthContext';
import CustomSelect from './CustomSelect';
import './Dashboard.css';

// ─── Mini Score Chart (pure CSS/SVG, no library) ──────────────────
function ScoreChart({ history }) {
  if (!history || history.length < 2) return null;
  const w = 100, h = 40;
  const maxPts = Math.min(history.length, 20);
  const pts = history.slice(-maxPts);
  const step = w / (pts.length - 1);
  const points = pts.map((p, i) => `${(i * step).toFixed(1)},${(h - (p.score / 100) * h).toFixed(1)}`).join(' ');
  const fillPoints = `0,${h} ${points} ${w},${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="score-chart-svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d60000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d60000" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <line x1="0" y1={h - (70 / 100) * h} x2={w} y2={h - (70 / 100) * h} stroke="#00a86b" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5" />
      <polygon points={fillPoints} fill="url(#chartGrad)" />
      <polyline points={points} fill="none" stroke="#d60000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={(i * step).toFixed(1)} cy={(h - (p.score / 100) * h).toFixed(1)} r="1.8" fill={p.score >= 70 ? '#00a86b' : '#d60000'} stroke="white" strokeWidth="0.6" />
      ))}
    </svg>
  );
}

// ─── Topic Performance Bar ────────────────────────────────────────
function TopicBar({ topic, avgScore, count }) {
  const color = avgScore >= 70 ? '#00a86b' : avgScore >= 50 ? '#f59e0b' : '#d60000';
  return (
    <div className="topic-perf-row">
      <div className="topic-perf-info">
        <span className="topic-perf-name">{topic}</span>
        <span className="topic-perf-meta">{count} attempt{count !== 1 ? 's' : ''} · {avgScore}%</span>
      </div>
      <div className="topic-perf-bar-bg">
        <div className="topic-perf-bar-fill" style={{ width: `${avgScore}%`, background: color }} />
      </div>
    </div>
  );
}

function Dashboard({ state, onChangeState, onStartTest, onStartQuiz, onStartFlashcards, onStartGame, onStartStudyGuide, onProfile, onAdmin, onLogout, isUserAdmin }) {
  const [flashcardTopic, setFlashcardTopic] = useState('');
  const [gameTopic, setGameTopic] = useState('');
  const [quizSize, setQuizSize] = useState(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { user, getResultsSummary, getExamDate, setExamDate: setExamDateApi } = useAuth();

  // Progress / chart data
  const [progressData, setProgressData] = useState(null);
  const [progressLoading, setProgressLoading] = useState(true);

  // Exam date countdown
  const [examDate, setExamDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateInput, setDateInput] = useState('');

  // Feedback / Contact Us modal
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState(null); // null, 'sending', 'sent', 'error'

  const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';
  
  // Get topics that actually have questions for the selected state
  const availableTopics = useMemo(() => getAvailableTopics(state), [state]);

  // Build options arrays for custom dropdowns
  const quizSizeOptions = [
    { value: 5, label: '5 Questions' },
    { value: 10, label: '10 Questions' },
    { value: 15, label: '15 Questions' },
    { value: 20, label: '20 Questions' },
  ];
  const topicOptions = useMemo(() => [
    { value: '', label: 'All Topics' },
    ...availableTopics.filter(t => t !== 'All Topics').map(t => ({ value: t, label: t })),
  ], [availableTopics]);

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

  // Load progress data and exam date
  useEffect(() => {
    async function loadData() {
      const [progressResult, examResult] = await Promise.all([
        getResultsSummary(),
        getExamDate(),
      ]);
      if (progressResult.success) {
        setProgressData(progressResult.summary);
      }
      if (examResult.success && examResult.examDate) {
        setExamDate(examResult.examDate);
      }
      setProgressLoading(false);
    }
    loadData();
  }, [getResultsSummary, getExamDate]);

  // Exam countdown helpers
  const examCountdown = useMemo(() => {
    if (!examDate) return null;
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const exam = new Date(examDate + 'T00:00:00');
    const diffMs = exam - now;
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    if (days < 0) return { days: 0, passed: true };
    return { days, passed: false };
  }, [examDate]);

  const handleSaveExamDate = async () => {
    if (!dateInput) return;
    await setExamDateApi(dateInput);
    setExamDate(dateInput);
    setShowDatePicker(false);
  };

  const handleClearExamDate = async () => {
    await setExamDateApi(null);
    setExamDate(null);
    setDateInput('');
    setShowDatePicker(false);
  };

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
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: feedbackName,
          email: feedbackEmail,
          message: feedbackMessage,
        }),
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

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <img src="/icon.png" alt="Auction Academy" className="dashboard-logo clickable-logo" onClick={onChangeState} />
          <nav className="header-nav">
            <button className="nav-link" onClick={onChangeState}>HOME</button>
            {state && <span className="nav-link nav-state">{state.toUpperCase()}</span>}
            <button className="nav-link nav-active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>DASHBOARD</button>
            <button className="nav-link" onClick={onChangeState}>CHANGE STATE</button>
            <button className="nav-link" onClick={() => { onProfile(); }}>PROFILE</button>
            {isUserAdmin && (
              <button className="nav-link" onClick={() => { onAdmin(); }}>ADMIN</button>
            )}
          </nav>
          <div className="header-right" ref={menuRef}>
            <button className="nav-cta" onClick={() => setMenuOpen(!menuOpen)}>
              {user?.username?.toUpperCase() || 'MENU'} {menuOpen ? '▴' : '▾'}
            </button>
            {menuOpen && (
              <div className="user-dropdown-menu">
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
        </div>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to Your Study Dashboard</h2>
          <p>Choose your learning method and start preparing for your {state || ''} auctioneer licensing exam</p>
        </div>

        {/* ── Exam Countdown + Score Chart Row ── */}
        <div className="insights-row">
          {/* Exam Date Countdown */}
          <div className="insight-card exam-countdown-card">
            <h3>🎯 Exam Countdown</h3>
            {examDate && examCountdown ? (
              examCountdown.passed ? (
                <div className="exam-countdown-display">
                  <div className="countdown-number past">Done!</div>
                  <p className="countdown-label">Your exam date has passed</p>
                  <button className="btn-exam-date" onClick={() => { setDateInput(''); setShowDatePicker(true); }}>Set New Date</button>
                </div>
              ) : (
                <div className="exam-countdown-display">
                  <div className="countdown-number">{examCountdown.days}</div>
                  <p className="countdown-label">day{examCountdown.days !== 1 ? 's' : ''} until your exam</p>
                  <p className="countdown-date">📅 {new Date(examDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  {progressData && progressData.totalAttempts > 0 && examCountdown.days > 0 && (
                    <p className="countdown-pace">
                      💡 Study pace: ~{Math.max(1, Math.ceil((75 - (progressData.totalAttempts || 0)) / examCountdown.days))} session{Math.max(1, Math.ceil((75 - (progressData.totalAttempts || 0)) / examCountdown.days)) !== 1 ? 's' : ''}/day recommended
                    </p>
                  )}
                  <button className="btn-exam-date-small" onClick={handleClearExamDate}>✕ Clear</button>
                </div>
              )
            ) : (
              <div className="exam-countdown-empty">
                {!showDatePicker ? (
                  <>
                    <p>Set your exam date to see a countdown and study pace recommendation</p>
                    <button className="btn-exam-date" onClick={() => setShowDatePicker(true)}>📅 Set Exam Date</button>
                  </>
                ) : (
                  <div className="exam-date-picker">
                    <input
                      type="date"
                      value={dateInput}
                      onChange={(e) => setDateInput(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="exam-date-input"
                    />
                    <div className="exam-date-actions">
                      <button className="btn-exam-date" onClick={handleSaveExamDate} disabled={!dateInput}>Save</button>
                      <button className="btn-exam-date-cancel" onClick={() => setShowDatePicker(false)}>Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Score History Chart */}
          <div className="insight-card score-chart-card">
            <h3>📊 Score History</h3>
            {progressLoading ? (
              <p className="insight-loading">Loading...</p>
            ) : !progressData || !progressData.scoreHistory || progressData.scoreHistory.length < 2 ? (
              <div className="insight-empty">
                <p>Complete at least 2 tests or quizzes to see your score trend chart</p>
              </div>
            ) : (
              <>
                <ScoreChart history={progressData.scoreHistory} />
                <div className="score-chart-legend">
                  <span className="chart-legend-item">
                    <span className="legend-dot" style={{ background: '#00a86b' }} /> 70%+ (Passing)
                  </span>
                  <span className="chart-legend-item">
                    <span className="legend-dot" style={{ background: '#d60000' }} /> Below 70%
                  </span>
                </div>
                <div className="score-chart-stats">
                  <span>Avg: <strong>{progressData.averageScore}%</strong></span>
                  <span>Tests: <strong>{progressData.totalAttempts}</strong></span>
                  {progressData.byMode?.find(m => m.mode === 'test') && (
                    <span>Best: <strong>{progressData.byMode.find(m => m.mode === 'test').bestScore}%</strong></span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Performance by Topic ── */}
        {!progressLoading && progressData?.byTopic?.length > 0 && (
          <div className="topic-performance-section">
            <h3>📋 Performance by Topic</h3>
            <p className="topic-perf-subtitle">See which topics need the most work — sorted weakest to strongest</p>
            <div className="topic-perf-list">
              {progressData.byTopic.map(t => (
                <TopicBar key={t.topic} topic={t.topic} avgScore={t.avgScore} count={t.count} />
              ))}
            </div>
          </div>
        )}

        <div className="study-modes-grid">
          {/* Full Practice Test */}
          <div className="study-mode-card">
            <div className="card-icon">📝</div>
            <h3>Full Practice Test</h3>
            <p>Take a complete 75-question exam simulating the real licensing test</p>
            <button 
              onClick={() => onStartTest(75)} 
              className="btn-mode"
            >
              Start Practice Test
            </button>
            <button 
              onClick={() => onStartTest(75, true)} 
              className="btn-mode btn-mode-timed"
            >
              ⏱️ Timed Exam (2 hrs)
            </button>
          </div>

          {/* Topic Quiz */}
          <div className="study-mode-card">
            <div className="card-icon">🎯</div>
            <h3>Quick Quiz</h3>
            <p>Take a quick quiz with customizable question count</p>
            
            <div className="quiz-options">
              <CustomSelect
                value={quizSize}
                onChange={(val) => setQuizSize(Number(val))}
                placeholder="Select size"
                options={quizSizeOptions}
              />
            </div>

            <button 
              onClick={() => onStartQuiz('', quizSize)} 
              className="btn-mode"
            >
              Start Quiz
            </button>
          </div>

          {/* Flashcards */}
          <div className="study-mode-card">
            <div className="card-icon">🎴</div>
            <h3>Flashcards</h3>
            <p>Quick review with interactive flashcards for efficient studying</p>
            
            <div className="quiz-options">
              <CustomSelect
                value={flashcardTopic}
                onChange={setFlashcardTopic}
                placeholder="All Topics"
                options={topicOptions}
              />
            </div>

            <button 
              onClick={() => onStartFlashcards(flashcardTopic)} 
              className="btn-mode"
            >
              Start Flashcards
            </button>
          </div>

          {/* Study Games */}
          <div className="study-mode-card">
            <div className="card-icon">🎮</div>
            <h3>Study Games</h3>
            <p>Learn through fun matching games and challenges</p>
            
            <div className="quiz-options">
              <CustomSelect
                value={gameTopic}
                onChange={setGameTopic}
                placeholder="All Topics"
                options={topicOptions}
              />
            </div>

            <button 
              onClick={() => onStartGame(gameTopic)} 
              className="btn-mode"
            >
              Play Game
            </button>
          </div>

          {/* Study Guide */}
          <div className="study-mode-card">
            <div className="card-icon">📚</div>
            <h3>Study Guide</h3>
            <p>Read and print comprehensive study materials for {state}</p>
            
            <button 
              onClick={onStartStudyGuide} 
              className="btn-mode"
            >
              View Study Guide
            </button>
          </div>
        </div>

        {/* Topics Overview */}
        <div className="topics-section">
          <h3>Topics Covered</h3>
          <div className="topics-grid">
            {availableTopics.filter(t => t !== 'All Topics').map(topic => (
              <div key={topic} className="topic-badge">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

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
                <input
                  type="text"
                  className="feedback-input"
                  placeholder="Your name"
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                />

                <label className="report-label" style={{ marginTop: '0.75rem' }}>How Should We Contact You?</label>
                <input
                  type="text"
                  className="feedback-input"
                  placeholder="Email, phone number, etc."
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                />

                <label className="report-label" style={{ marginTop: '0.75rem' }}>Your Message</label>
                <textarea
                  className="report-textarea"
                  rows={4}
                  placeholder="Describe your question, issue, or feedback..."
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                />

                {feedbackStatus === 'error' && (
                  <div className="report-error">Something went wrong. Please try again or email us at hello@auctionacademy.com</div>
                )}

                <div className="report-actions">
                  <button
                    className="btn-report-submit"
                    onClick={handleSubmitFeedback}
                    disabled={!feedbackMessage.trim() || feedbackStatus === 'sending'}
                  >
                    {feedbackStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <button className="btn-report-cancel" onClick={closeFeedbackModal}>
                    Cancel
                  </button>
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

export default Dashboard;
