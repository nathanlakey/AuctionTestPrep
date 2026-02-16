import { useState, useEffect, useRef } from 'react';
import { getQuizQuestions } from '../data/questionBank';
import { useAuth } from './AuthContext';
import './Game.css';

function Game({ state, topic, onExit }) {
  const [gameState, setGameState] = useState('loading');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showFeedback, setShowFeedback] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rocketAngle, setRocketAngle] = useState(0);
  const [laserShot, setLaserShot] = useState(null); // { start, end, active }
  const [bulletPosition, setBulletPosition] = useState(null); // For animated bullet
  const [bubbles, setBubbles] = useState([]);
  const gameAreaRef = useRef(null);
  const animationFrameRef = useRef(null);
  const resultSaved = useRef(false);
  const { saveResult } = useAuth();

  // Initialize game
  useEffect(() => {
    const gameQuestions = getQuizQuestions(state, 10, topic);
    if (gameQuestions.length > 0) {
      setQuestions(gameQuestions);
      setGameState('playing');
    }
  }, [state, topic]);

  // Initialize bubbles for current question
  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      
      // Fixed positions for 4 bubbles in a 2x2 grid - evenly distributed
      // Uses percentages of the game area (answer-bubbles is position:absolute filling parent)
      const positions = [
        { x: 25, y: 20 },  // Top-left
        { x: 75, y: 20 },  // Top-right
        { x: 25, y: 60 },  // Bottom-left
        { x: 75, y: 60 }   // Bottom-right
      ];
      
      const newBubbles = question.options.map((opt, idx) => {
        // Use fixed positions to prevent overlap
        const pos = positions[idx % positions.length];
        return {
          id: idx,
          text: opt,
          isCorrect: idx === question.correctAnswer,
          x: pos.x, // Fixed x position (percentage)
          y: pos.y, // Fixed y position (percentage)
          vx: 0, // No movement - stationary
          vy: 0, // No movement - stationary
          radius: 80, // collision radius in pixels
          removed: false
        };
      });
      setBubbles(newBubbles);
      setTimeRemaining(60);
      setShowFeedback(null);
      setLaserShot(null);
    }
  }, [currentQuestionIndex, questions]);

  // Mouse tracking for rocket aim
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gameAreaRef.current && gameState === 'playing') {
        const rect = gameAreaRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gameState]);

  // Calculate rocket rotation to point at mouse
  useEffect(() => {
    if (gameAreaRef.current) {
      const rect = gameAreaRef.current.getBoundingClientRect();
      const rocketX = rect.width / 2;
      const rocketY = rect.height - 80; // Rocket position at bottom
      
      const dx = mousePosition.x - rocketX;
      const dy = mousePosition.y - rocketY;
      let angle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      // No clamping - allow rocket to point anywhere on screen
      setRocketAngle(angle + 90); // +90 to adjust for rocket facing up by default
    }
  }, [mousePosition]);

  // Physics animation loop - DISABLED for stationary bubbles
  // Bubbles are now completely stationary with vx=0, vy=0
  // No physics updates or collision detection needed

  // Timer countdown
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, currentQuestionIndex]);

  const handleTimeUp = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('gameOver');
    }
  };

  // Save result when game ends
  useEffect(() => {
    if (gameState === 'gameOver' && !resultSaved.current && questions.length > 0) {
      resultSaved.current = true;
      const accuracy = Math.round((correctAnswers / questions.length) * 100);
      saveResult({
        state,
        mode: 'game',
        topic: topic || 'All Topics',
        scoreCorrect: correctAnswers,
        scoreTotal: questions.length,
        scorePercentage: accuracy,
        timeSeconds: 0,
      });
    }
  }, [gameState, correctAnswers, questions.length, state, topic, saveResult]);

  const handleBubbleClick = (bubble) => {
    if (showFeedback || bubble.removed) return;

    // Calculate laser shot path and animate bullet
    if (gameAreaRef.current) {
      const rect = gameAreaRef.current.getBoundingClientRect();
      
      // Calculate rocket tip position (considering rotation)
      const rocketCenterX = rect.width / 2;
      const rocketCenterY = rect.height - 30;
      const tipOffset = 40; // Distance from rocket center to tip
      const angleRad = (rocketAngle * Math.PI) / 180;
      const rocketTipX = rocketCenterX + Math.sin(angleRad) * tipOffset;
      const rocketTipY = rocketCenterY - Math.cos(angleRad) * tipOffset;
      
      const bubbleX = (bubble.x / 100) * rect.width;
      const bubbleY = (bubble.y / 100) * rect.height;

      // Animate bullet from rocket tip to bubble
      const startTime = Date.now();
      const duration = 200; // ms
      
      const animateBullet = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentX = rocketTipX + (bubbleX - rocketTipX) * progress;
        const currentY = rocketTipY + (bubbleY - rocketTipY) * progress;
        const angle = Math.atan2(bubbleY - rocketTipY, bubbleX - rocketTipX) * (180 / Math.PI);
        
        setBulletPosition({ x: currentX, y: currentY, angle, active: true });
        
        if (progress < 1) {
          requestAnimationFrame(animateBullet);
        } else {
          setBulletPosition(null);
        }
      };
      
      animateBullet();
    }

    // Mark bubble as removed
    setBubbles(prev => prev.map(b => 
      b.id === bubble.id ? { ...b, removed: true } : b
    ));

    setTimeout(() => {
      if (bubble.isCorrect) {
        const timeBonus = Math.floor(timeRemaining * 2);
        const totalPoints = 100 + timeBonus;
        setScore(prev => prev + totalPoints);
        setCorrectAnswers(prev => prev + 1);
        
        setShowFeedback({
          correct: true,
          message: `🚀 Direct Hit! +${totalPoints} points`
        });

        setTimeout(() => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
          } else {
            setGameState('gameOver');
          }
        }, 1500);
      } else {
        setShowFeedback({
          correct: false,
          message: '💥 Missed! Try again!'
        });

        setTimeout(() => {
          setShowFeedback(null);
        }, 1000);
      }
    }, 300);
  };

  const togglePause = () => {
    setGameState(gameState === 'playing' ? 'paused' : 'playing');
  };

  if (gameState === 'loading' || questions.length === 0) {
    return (
      <div className="space-container">
        <div className="loading">🚀 Loading Space Mission...</div>
      </div>
    );
  }

  const handlePlayAgain = () => {
    resultSaved.current = false;
    const gameQuestions = getQuizQuestions(state, 10, topic);
    setQuestions(gameQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setTimeRemaining(60);
    setShowFeedback(null);
    setLaserShot(null);
    setBulletPosition(null);
    setBubbles([]);
    setGameState('playing');
  };

  if (gameState === 'gameOver') {
    const accuracy = questions.length > 0 ? Math.round((correctAnswers / questions.length) * 100) : 0;

    return (
      <div className="space-container">
        <div className="game-over">
          <h2>🚀 Mission Complete!</h2>
          <div className="final-score">
            <div className="score-big">{score}</div>
            <div className="score-label">Final Score</div>
          </div>
          <div className="game-stats">
            <div className="stat">
              <div className="stat-value">{correctAnswers}/{questions.length}</div>
              <div className="stat-label">Targets Hit</div>
            </div>
            <div className="stat">
              <div className="stat-value">{accuracy}%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-value">{Math.round(score / (correctAnswers || 1))}</div>
              <div className="stat-label">Avg Points</div>
            </div>
          </div>
          <div className="game-completion-message">
            {accuracy >= 80
              ? '🌟 Outstanding pilot! You dominated that mission!'
              : accuracy >= 50
              ? '👍 Solid flying! A few more runs and you\'ll master it.'
              : '💪 Keep training! Every mission makes you stronger!'}
          </div>
          <div className="game-actions">
            <button onClick={handlePlayAgain} className="btn-primary">
              🔄 Play Again
            </button>
            <button onClick={onExit} className="btn-secondary-game">
              🏠 Main Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-container">
      <div className="game-header">
        <div className="game-info">
          <h2>🚀 Space Shooter</h2>
          <p>{topic || 'All Topics'} - {state}</p>
        </div>
        <div className="header-controls">
          <button onClick={togglePause} className="btn-pause">
            {gameState === 'paused' ? '▶️ Resume' : '⏸️ Pause'}
          </button>
          <button onClick={() => { if (window.confirm('Are you sure you want to exit? Your game progress will be lost.')) onExit(); }} className="btn-exit">Exit</button>
        </div>
      </div>

      <div className="game-stats-bar">
        <div className="stat-item">
          <span className="stat-icon">⏱️</span>
          <span className={`timer ${timeRemaining <= 10 ? 'timer-warning' : ''}`}>
            {formatTime(timeRemaining)}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🎯</span>
          <span>Score: {score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">📊</span>
          <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">✓</span>
          <span>Hits: {correctAnswers}</span>
        </div>
      </div>

      {/* Question Section - Separate from play area */}
      <div className="game-question-section">
        <div className="question-text">{currentQuestion.question}</div>
      </div>

      {gameState === 'paused' && (
        <div className="pause-overlay" onClick={togglePause}>
          <div className="pause-message">
            <h2>⏸️ Mission Paused</h2>
            <p>Click anywhere to continue</p>
          </div>
        </div>
      )}

      <div className="space-game-area" ref={gameAreaRef}>
        {/* Stars background */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

        {/* Bouncing answer bubbles */}
        <div className="answer-bubbles">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={`bubble ${bubble.removed ? 'removed' : ''}`}
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                transition: 'opacity 0.3s',
              }}
              onClick={() => handleBubbleClick(bubble)}
            >
              <div className="bubble-content">
                {bubble.text}
              </div>
            </div>
          ))}
        </div>

        {/* Animated laser bullet */}
        {bulletPosition && bulletPosition.active && (
          <div 
            className="laser-bullet"
            style={{
              left: `${bulletPosition.x}px`,
              top: `${bulletPosition.y}px`,
              transform: `translate(-50%, -50%) rotate(${bulletPosition.angle}deg)`
            }}
          />
        )}

        {/* Rocket ship - rotates to follow mouse */}
        <div 
          className="rocket-ship" 
          style={{ 
            transform: `translate(-50%, -50%) rotate(${rocketAngle}deg)`
          }}
        >
          <div className="rocket-body">🚀</div>
          <div className="rocket-flame">🔥</div>
        </div>

        {/* Feedback message */}
        {showFeedback && (
          <div className={`feedback-message ${showFeedback.correct ? 'correct' : 'incorrect'}`}>
            {showFeedback.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
