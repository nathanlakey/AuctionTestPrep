import { useState, useMemo } from 'react';
import { getAvailableTopics } from '../data/questionBank';
import './Dashboard.css';

function Dashboard({ state, onChangeState, onStartTest, onStartQuiz, onStartFlashcards, onStartGame, onStartStudyGuide }) {
  const [flashcardTopic, setFlashcardTopic] = useState('');
  const [gameTopic, setGameTopic] = useState('');
  const [quizSize, setQuizSize] = useState(10);
  
  // Get topics that actually have questions for the selected state
  const availableTopics = useMemo(() => getAvailableTopics(state), [state]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <img src="/icon.png" alt="Auction Academy" className="dashboard-logo" />
          <div className="state-info">
            <span className="state-label">Studying for:</span>
            <span className="state-name">{state}</span>
            <button onClick={onChangeState} className="btn-change-state">
              Change State
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to Your Study Dashboard</h2>
          <p>Choose your learning method and start preparing for your {state} auctioneer licensing exam</p>
        </div>

        <div className="study-modes-grid">
          {/* Full Practice Test */}
          <div className="study-mode-card primary-card">
            <div className="card-icon">📝</div>
            <h3>Full Practice Test</h3>
            <p>Take a complete 75-question exam simulating the real licensing test</p>
            <button 
              onClick={() => onStartTest(75)} 
              className="btn-mode btn-primary"
            >
              Start Practice Test
            </button>
          </div>

          {/* Topic Quiz */}
          <div className="study-mode-card">
            <div className="card-icon">🎯</div>
            <h3>Quick Quiz</h3>
            <p>Take a quick quiz with customizable question count</p>
            
            <div className="quiz-options">
              <select 
                value={quizSize} 
                onChange={(e) => setQuizSize(Number(e.target.value))}
                className="size-select"
              >
                <option value={5}>5 Questions</option>
                <option value={10}>10 Questions</option>
                <option value={15}>15 Questions</option>
                <option value={20}>20 Questions</option>
              </select>
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
              <select 
                value={flashcardTopic} 
                onChange={(e) => setFlashcardTopic(e.target.value)}
                className="topic-select"
              >
                <option value="">All Topics</option>
                {availableTopics.filter(t => t !== 'All Topics').map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
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
              <select 
                value={gameTopic} 
                onChange={(e) => setGameTopic(e.target.value)}
                className="topic-select"
              >
                <option value="">All Topics</option>
                {availableTopics.filter(t => t !== 'All Topics').map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
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
    </div>
  );
}

export default Dashboard;
