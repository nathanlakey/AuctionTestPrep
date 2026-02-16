import { useState, useEffect, useRef } from 'react';
import { getRandomQuestions, getQuizQuestions } from '../data/questionBank';
import { useAuth } from './AuthContext';
import './Test.css';

function Test({ state, questionCount, topic, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const resultSaved = useRef(false);
  const { saveResult } = useAuth();

  useEffect(() => {
    // Load questions based on type
    if (questionCount === 75) {
      setQuestions(getRandomQuestions(state, 75));
    } else {
      setQuestions(getQuizQuestions(state, questionCount, topic));
    }
  }, [state, questionCount, topic]);

  useEffect(() => {
    // Timer
    if (!showResults && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showResults, questions]);

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
    // Save result to database
    if (!resultSaved.current) {
      resultSaved.current = true;
      const score = calculateScore();
      saveResult({
        state,
        mode: questionCount === 75 ? 'test' : 'quiz',
        topic: topic || 'All Topics',
        scoreCorrect: score.correct,
        scoreTotal: score.total,
        scorePercentage: parseFloat(score.percentage),
        timeSeconds: timeElapsed,
      });
    }
  };

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
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return (
      <div className="test-container">
        <div className="loading">Loading questions...</div>
      </div>
    );
  }

  const handleRetake = () => {
    resultSaved.current = false;
    if (questionCount === 75) {
      setQuestions(getRandomQuestions(state, 75));
    } else {
      setQuestions(getQuizQuestions(state, questionCount, topic));
    }
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setTimeElapsed(0);
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score.percentage >= 70;

    return (
      <div className="test-container">
        <div className="results-container">
          <div className={`results-header ${passed ? 'passed' : 'failed'}`}>
            <h2>{passed ? '🎉 Congratulations!' : '📚 Keep Studying!'}</h2>
            <div className="score-display">
              <div className="score-number">{score.percentage}%</div>
              <div className="score-details">
                {score.correct} out of {score.total} correct
              </div>
              <div className="time-taken">
                Time: {formatTime(timeElapsed)}
              </div>
            </div>
          </div>

          <div className="results-review">
            <h3>Review Your Answers</h3>
            {questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className={`review-question ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    <span className="question-number">Question {index + 1}</span>
                    <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
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
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

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
          <h2>{questionCount === 75 ? 'Full Practice Test' : `Quiz - ${questionCount} Questions`}</h2>
          <div className="test-meta">
            <span>{state}</span>
            <span>•</span>
            <span>{formatTime(timeElapsed)}</span>
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
          <span className="topic-badge">{currentQuestion.topic}</span>
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
        <h4>Question Navigator</h4>
        <div className="question-grid">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`question-nav-btn ${currentQuestionIndex === index ? 'active' : ''} ${answers[q.id] !== undefined ? 'answered' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
