import { useState, useEffect } from 'react';
import { getRandomFlashcards } from '../data/flashcardQuestions';
import './Flashcards.css';

function Flashcards({ state, topic, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Use dedicated flashcard questions (same for all states)
    const cards = getRandomFlashcards(20);
    setQuestions(cards);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMarkKnown = () => {
    const updatedKnown = !knownCards.includes(currentIndex)
      ? [...knownCards, currentIndex]
      : knownCards;
    setKnownCards(updatedKnown);

    setIsFlipped(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    const cards = getRandomFlashcards(20);
    setQuestions(cards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setCompleted(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flashcards-container">
        <div className="loading">Loading flashcards...</div>
      </div>
    );
  }

  const currentCard = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const knownPercent = Math.round((knownCards.length / questions.length) * 100);

  if (completed) {
    return (
      <div className="flashcards-container">
        <div className="completion-overlay">
          <div className="completion-card">
            <div className="completion-icon">🎉</div>
            <h2 className="completion-title">Flashcards Complete!</h2>
            <p className="completion-subtitle">Great job reviewing all {questions.length} cards!</p>

            <div className="completion-stats">
              <div className="completion-stat">
                <span className="stat-value">{questions.length}</span>
                <span className="stat-label">Cards Reviewed</span>
              </div>
              <div className="completion-stat">
                <span className="stat-value">{knownCards.length}</span>
                <span className="stat-label">Marked Known</span>
              </div>
              <div className="completion-stat">
                <span className="stat-value">{knownPercent}%</span>
                <span className="stat-label">Confidence</span>
              </div>
            </div>

            <div className="completion-message">
              {knownPercent >= 80
                ? '🌟 Outstanding! You have a strong grasp of these concepts!'
                : knownPercent >= 50
                ? '👍 Good progress! Keep reviewing to build more confidence.'
                : '💪 Keep at it! Practice makes perfect — try another round!'}
            </div>

            <div className="completion-actions">
              <button className="btn-completion btn-restart" onClick={handleRestart}>
                🔄 Study Again
              </button>
              <button className="btn-completion btn-menu" onClick={onExit}>
                🏠 Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcards-container">
      <div className="flashcards-header">
        <div className="header-info">
          <h2>🎴 Flashcards</h2>
          <p>Core Auction Concepts - {state}</p>
        </div>
        <button onClick={onExit} className="btn-exit">Exit</button>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flashcard-stats">
        <span>Card {currentIndex + 1} of {questions.length}</span>
        <span>Known: {knownCards.length}</span>
      </div>

      <div className="flashcard-wrapper">
        <div 
          className={`flashcard ${isFlipped ? 'flipped' : ''}`}
          onClick={handleFlip}
        >
          <div className="flashcard-front">
            <div className="card-label">Question</div>
            <div className="card-content">{currentCard.question}</div>
            <div className="card-hint">Click to see answer</div>
          </div>
          
          <div className="flashcard-back">
            <div className="card-label">Answer</div>
            <div className="card-content answer">
              {currentCard.answer}
            </div>
            {currentCard.explanation && (
              <div className="card-explanation">
                <strong>Explanation:</strong><br/>
                {currentCard.explanation}
              </div>
            )}
            <div className="card-hint">Click to go back</div>
          </div>
        </div>
      </div>

      <div className="flashcard-controls">
        <button 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="btn-control"
        >
          ← Previous
        </button>

        <button 
          onClick={handleMarkKnown}
          className="btn-control btn-known"
          disabled={knownCards.includes(currentIndex)}
        >
          {knownCards.includes(currentIndex) ? '✓ Known' : 'I Know This'}
        </button>

        <button 
          onClick={handleNext}
          className="btn-control"
        >
          {currentIndex === questions.length - 1 ? 'Finish ✓' : 'Next →'}
        </button>
      </div>

      <div className="keyboard-hint">
        💡 Tip: Click the card to flip it
      </div>
    </div>
  );
}

export default Flashcards;
