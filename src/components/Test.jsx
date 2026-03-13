import { useState, useEffect, useRef } from 'react';
import { getRandomQuestions, getQuizQuestions } from '../data/questionBank';
import { useAuth } from './AuthContext';
import './Test.css';

// --- Question History Helpers (localStorage) ---
const HISTORY_KEY_PREFIX = 'auctionAcademy_seenQuestions_';

function getSeenQuestionIds(state) {
  try {
    const raw = localStorage.getItem(HISTORY_KEY_PREFIX + state);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSeenQuestionIds(state, questionIds) {
  try {
    const existing = getSeenQuestionIds(state);
    const merged = [...new Set([...existing, ...questionIds.map(String)])];
    localStorage.setItem(HISTORY_KEY_PREFIX + state, JSON.stringify(merged));
  } catch { /* ignore storage errors */ }
}

function resetSeenQuestionIds(state) {
  try {
    localStorage.removeItem(HISTORY_KEY_PREFIX + state);
  } catch { /* ignore */ }
}

const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';

function Test({ state, questionCount, topic, timed = false, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timed ? 7200 : 0); // 2 hours = 7200s
  const [reviewFilter, setReviewFilter] = useState('all'); // 'all', 'missed', or 'flagged'
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [reportModal, setReportModal] = useState(null);
  const [reportReason, setReportReason] = useState('');
  const [reportStatus, setReportStatus] = useState(null);
  const [reportedQuestionIds, setReportedQuestionIds] = useState([]);
  const resultSaved = useRef(false);
  const autoSubmitted = useRef(false);
  const { saveResult, getBookmarks, toggleBookmark } = useAuth();

  useEffect(() => {
    // Fetch open reported question IDs, then load questions excluding them
    async function loadQuestions() {
      let reportedIds = [];
      try {
        const res = await fetch(`${API_BASE}/api/reported-question-ids?state=${encodeURIComponent(state)}`);
        if (res.ok) {
          const data = await res.json();
          reportedIds = data.questionIds || [];
        }
      } catch { /* ignore — fall back to no exclusions */ }
      setReportedQuestionIds(reportedIds);

      const seenIds = getSeenQuestionIds(state);
      if (questionCount === 75) {
        setQuestions(getRandomQuestions(state, 75, seenIds, reportedIds));
      } else {
        setQuestions(getQuizQuestions(state, questionCount, topic, seenIds, reportedIds));
      }
    }
    loadQuestions();
  }, [state, questionCount, topic]);

  // Load user's bookmarked questions
  useEffect(() => {
    async function loadBookmarks() {
      const result = await getBookmarks(state);
      if (result.success) {
        setBookmarkedIds(new Set(result.bookmarks.map(b => b.questionId)));
      }
    }
    loadBookmarks();
  }, [state, getBookmarks]);

  const handleToggleFlag = (questionId) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const handleToggleBookmark = async (questionId) => {
    const result = await toggleBookmark(questionId, state);
    if (result.success) {
      setBookmarkedIds(prev => {
        const next = new Set(prev);
        if (result.bookmarked) {
          next.add(questionId);
        } else {
          next.delete(questionId);
        }
        return next;
      });
    }
  };

  useEffect(() => {
    // Timer — counts up (untimed) or counts down (timed)
    if (!showResults && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
        if (timed) {
          setTimeRemaining(prev => {
            if (prev <= 1) {
              // Time's up — auto-submit
              clearInterval(timer);
              if (!autoSubmitted.current) {
                autoSubmitted.current = true;
                // Use setTimeout to avoid setState-during-render
                setTimeout(() => setShowResults(true), 0);
              }
              return 0;
            }
            return prev - 1;
          });
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showResults, questions, timed]);

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  // Save result whenever results are shown (covers both manual submit and auto-submit on timeout)
  useEffect(() => {
    if (showResults && !resultSaved.current) {
      resultSaved.current = true;
      // Record these question IDs as seen so they won't repeat next time
      const usedIds = questions.map(q => q.id);
      saveSeenQuestionIds(state, usedIds);
      const score = calculateScore();
      saveResult({
        state,
        mode: questionCount === 75 ? (timed ? 'timed-test' : 'test') : 'quiz',
        topic: topic || 'All Topics',
        scoreCorrect: score.correct,
        scoreTotal: score.total,
        scorePercentage: parseFloat(score.percentage),
        timeSeconds: timeElapsed,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResults]);

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: ((correct / questions.length) * 100).toFixed(1)
    };
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs} hr ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return (
      <div className="test-container">
        <div className="loading">Loading questions...</div>
      </div>
    );
  }

  const handleReportQuestion = async (question) => {
    try {
      const token = localStorage.getItem('auctionAcademyToken');
      const res = await fetch(`${API_BASE}/api/report-question`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          questionId: question.id,
          questionText: question.question,
          reason: reportReason,
          state,
          component: 'test',
        }),
      });
      if (res.ok) {
        setReportStatus('success');
        setTimeout(() => { setReportModal(null); setReportReason(''); setReportStatus(null); }, 1500);
      } else {
        setReportStatus('error');
      }
    } catch {
      setReportStatus('error');
    }
  };

  const handleRetake = () => {
    resultSaved.current = false;
    autoSubmitted.current = false;
    const seenIds = getSeenQuestionIds(state);
    if (questionCount === 75) {
      setQuestions(getRandomQuestions(state, 75, seenIds, reportedQuestionIds));
    } else {
      setQuestions(getQuizQuestions(state, questionCount, topic, seenIds, reportedQuestionIds));
    }
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setTimeElapsed(0);
    setTimeRemaining(timed ? 7200 : 0);
    setReviewFilter('all');
    setFlaggedQuestions(new Set());
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score.percentage >= 70;

    return (
      <div className="test-container">
        <div className="results-container">
          <div className={`results-header ${passed ? 'passed' : 'failed'}`}>
            <h2>{passed ? '🎉 Congratulations!' : '📚 Keep Studying!'}</h2>
            {timed && autoSubmitted.current && (
              <div className="timed-notice">⏱️ Time expired — test auto-submitted</div>
            )}
            <div className="score-display">
              <div className="score-number">{score.percentage}%</div>
              <div className="score-details">
                {score.correct} out of {score.total} correct
              </div>
              <div className="time-taken">
                Time: {formatTime(timeElapsed)}{timed ? ' / 2:00:00' : ''}
              </div>
            </div>
          </div>

          <div className="results-review">
            <div className="review-filter-bar">
              <h3>Review Your Answers</h3>
              <div className="review-filter-buttons">
                <button
                  className={`review-filter-btn ${reviewFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('all')}
                >
                  All ({questions.length})
                </button>
                <button
                  className={`review-filter-btn missed ${reviewFilter === 'missed' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('missed')}
                >
                  ✗ Missed ({questions.filter(q => answers[q.id] !== q.correctAnswer).length})
                </button>
                <button
                  className={`review-filter-btn flagged ${reviewFilter === 'flagged' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('flagged')}
                >
                  ⭐ Starred ({flaggedQuestions.size})
                </button>
              </div>
            </div>
            {questions
              .map((question, index) => ({ question, originalIndex: index }))
              .filter(({ question }) => {
                if (reviewFilter === 'missed') {
                  return answers[question.id] !== question.correctAnswer;
                }
                if (reviewFilter === 'flagged') {
                  return flaggedQuestions.has(question.id);
                }
                return true;
              })
              .map(({ question, originalIndex }) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className={`review-question ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    <span className="question-number">
                      Question {originalIndex + 1}
                      {flaggedQuestions.has(question.id) && <span className="flag-indicator"> ⭐</span>}
                    </span>
                    <div className="review-header-actions">
                      <button
                        className={`btn-bookmark ${bookmarkedIds.has(question.id) ? 'active' : ''}`}
                        onClick={() => handleToggleBookmark(question.id)}
                        title={bookmarkedIds.has(question.id) ? 'Remove bookmark' : 'Bookmark for later review'}
                      >
                        {bookmarkedIds.has(question.id) ? '🔖' : '📑'} {bookmarkedIds.has(question.id) ? 'Saved' : 'Save'}
                      </button>
                      <button
                        className="btn-bookmark btn-report"
                        onClick={() => setReportModal(question)}
                        title="Report this question"
                      >
                        ⚠️ Report
                      </button>
                      <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="review-topic">{question.topic}</div>
                  <div className="review-question-text">{question.question}</div>
                  
                  <div className="review-options">
                    {question.options.map((option, optIndex) => {
                      const isUserAnswer = userAnswer === optIndex;
                      const isCorrectAnswer = optIndex === question.correctAnswer;
                      
                      let className = 'review-option';
                      if (isCorrectAnswer) className += ' correct-answer';
                      if (isUserAnswer && !isCorrect) className += ' wrong-answer';
                      
                      return (
                        <div key={optIndex} className={className}>
                          {option}
                          {isCorrectAnswer && <span className="answer-label"> (Correct Answer)</span>}
                          {isUserAnswer && !isCorrect && <span className="answer-label"> (Your Answer)</span>}
                        </div>
                      );
                    })}
                  </div>
                  
                  {!isCorrect && (
                    <div className="explanation">
                      <strong>Explanation:</strong> {question.explanation && question.explanation.trim() 
                        ? question.explanation 
                        : '(Explanation not available for this question. Please report this question if you believe it should have an explanation.)'}
                    </div>
                  )}
                </div>
              );
            })}
            {reviewFilter === 'missed' && questions.filter(q => answers[q.id] !== q.correctAnswer).length === 0 && (
              <div className="review-empty-state">
                🎉 Perfect score! You didn't miss any questions!
              </div>
            )}            {reviewFilter === 'flagged' && flaggedQuestions.size === 0 && (
              <div className="review-empty-state">
                No starred questions. Use the ☆ button during the test to mark tricky questions.
              </div>
            )}          </div>

          <div className="results-completion-message">
            {passed
              ? '🌟 Great work! You\'re well-prepared for the exam!'
              : score.percentage >= 50
              ? '👍 Getting there! Review the missed questions and try again.'
              : '💪 Don\'t give up! Study the explanations above and retake the test.'}
          </div>

          <div className="results-actions">
            <button onClick={handleRetake} className="btn-retake">
              🔄 Retake Test
            </button>
            {questions.filter(q => answers[q.id] !== q.correctAnswer).length > 0 && (
              <button
                onClick={() => {
                  setReviewFilter('missed');
                  document.querySelector('.results-review')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-review-missed"
              >
                🔍 Review Missed
              </button>
            )}
            <button onClick={onExit} className="btn-secondary">
              🏠 Main Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="test-container">
      <div className="test-header">
        <div className="test-info">
          <h2>{questionCount === 75 ? (timed ? '⏱️ Timed Practice Test' : 'Full Practice Test') : `Quiz - ${questionCount} Questions`}</h2>
          <div className="test-meta">
            <span>{state}</span>
            <span>•</span>
            {timed ? (
              <span className={`timer-countdown ${timeRemaining < 300 ? 'timer-warning' : ''}`}>
                ⏱️ {formatTime(timeRemaining)} remaining
              </span>
            ) : (
              <span>{formatTime(timeElapsed)}</span>
            )}
          </div>
        </div>
        <button onClick={() => { if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) onExit(); }} className="btn-exit">Exit</button>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="test-content">
        <div className="question-header">
          <span className="question-counter">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <div className="question-header-right">
            <button
              className={`btn-flag ${flaggedQuestions.has(currentQuestion.id) ? 'flagged' : ''}`}
              onClick={() => handleToggleFlag(currentQuestion.id)}
              title={flaggedQuestions.has(currentQuestion.id) ? 'Remove star' : 'Star for review'}
            >
              {flaggedQuestions.has(currentQuestion.id) ? '⭐' : '☆'}
            </button>
            <button
              className="btn-flag btn-report"
              onClick={() => setReportModal(currentQuestion)}
              title="Report this question"
            >
              ⚠️ Report
            </button>
            <span className="topic-badge">{currentQuestion.topic}</span>
          </div>
        </div>

        <div className="question-text">
          {currentQuestion.question}
        </div>

        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                checked={answers[currentQuestion.id] === index}
                onChange={() => handleAnswer(currentQuestion.id, index)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>

        <div className="test-navigation">
          <button 
            onClick={handlePrevious} 
            disabled={currentQuestionIndex === 0}
            className="btn-nav"
          >
            ← Previous
          </button>

          <div className="answered-status">
            {answeredCount} of {questions.length} answered
          </div>

          {currentQuestionIndex === questions.length - 1 ? (
            <button 
              onClick={handleSubmit}
              className="btn-submit"
            >
              Submit Test
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="btn-nav"
            >
              Next →
            </button>
          )}
        </div>
      </div>

      <div className="question-navigator">
        <h4>Question Navigator {flaggedQuestions.size > 0 && <span className="nav-flag-count">⭐ {flaggedQuestions.size} starred</span>}</h4>
        <div className="question-grid">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`question-nav-btn ${currentQuestionIndex === index ? 'active' : ''} ${answers[q.id] !== undefined ? 'answered' : ''} ${flaggedQuestions.has(q.id) ? 'flagged' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Report Question Modal */}
      {reportModal && (
        <div className="report-modal-overlay" onClick={() => { setReportModal(null); setReportReason(''); setReportStatus(null); }}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            <h3>⚠️ Report a Question</h3>
            <p className="report-question-preview">"{reportModal.question}"</p>
            {reportStatus === 'success' ? (
              <div className="report-success">✅ Question reported successfully!</div>
            ) : (
              <>
                <label className="report-label">Reason (optional):</label>
                <textarea
                  className="report-textarea"
                  placeholder="Describe the issue (e.g., incorrect answer, typo, unclear wording)..."
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  rows={3}
                />
                {reportStatus === 'error' && <div className="report-error">❌ Failed to submit report. Please try again.</div>}
                <div className="report-actions">
                  <button className="btn-report-submit" onClick={() => handleReportQuestion(reportModal)}>Submit Report</button>
                  <button className="btn-report-cancel" onClick={() => { setReportModal(null); setReportReason(''); setReportStatus(null); }}>Cancel</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
