import { useState } from 'react'
import { AuthProvider, useAuth } from './components/AuthContext'
import StateSelector from './components/StateSelector'
import Dashboard from './components/Dashboard'
import Test from './components/Test'
import Flashcards from './components/Flashcards'
import Game from './components/Game'
import StudyGuide from './components/StudyGuide'
import AuthPage from './components/AuthPage'
import Payment from './components/Payment'
import './App.css'

function AppContent() {
  const [selectedState, setSelectedState] = useState(null)
  const [mode, setMode] = useState('select') // select, dashboard, test, quiz, flashcards, game, studyguide, auth, payment
  const [testConfig, setTestConfig] = useState({})
  const { user, logout } = useAuth()

  const handleSelectState = (state, selectedMode = null) => {
    // If user is not logged in or hasn't paid, redirect to auth/payment
    if (!user) {
      setMode('auth')
      return
    }
    if (!user.hasPaid) {
      setMode('payment')
      return
    }

    setSelectedState(state)
    if (selectedMode === 'test') {
      setTestConfig({ questionCount: 75, topic: 'All Topics' })
      setMode('test')
    } else if (selectedMode === 'quiz') {
      setMode('dashboard') // Go to dashboard to select topic
    } else if (selectedMode === 'flashcards') {
      setTestConfig({ topic: 'All Topics' })
      setMode('flashcards')
    } else if (selectedMode === 'game') {
      setTestConfig({ topic: 'All Topics' })
      setMode('game')
    } else {
      setMode('dashboard')
    }
  }

  const handleChangeState = () => {
    setSelectedState(null)
    setMode('select')
  }

  const handleStartTest = (questionCount) => {
    setTestConfig({ questionCount, topic: 'All Topics' })
    setMode('test')
  }

  const handleStartQuiz = (topic, questionCount) => {
    setTestConfig({ questionCount, topic: topic || 'All Topics' })
    setMode('test')
  }

  const handleStartFlashcards = (topic) => {
    setTestConfig({ topic: topic || 'All Topics' })
    setMode('flashcards')
  }

  const handleStartGame = (topic) => {
    setTestConfig({ topic: topic || 'All Topics' })
    setMode('game')
  }

  const handleStartStudyGuide = () => {
    setMode('studyguide')
  }

  const handleExit = () => {
    setMode('dashboard')
  }

  const handleLogin = () => {
    setMode('auth')
  }

  const handleLogout = () => {
    logout()
    setSelectedState(null)
    setMode('select')
  }

  const handleAuthSuccess = () => {
    // Check payment status from localStorage (source of truth, written synchronously by auth functions)
    const currentUser = JSON.parse(localStorage.getItem('auctionAcademyUser') || '{}')
    if (currentUser.hasPaid) {
      setMode('select')
    } else {
      setMode('payment')
    }
  }

  const handlePaymentSuccess = () => {
    setMode('select')
  }

  const handlePaymentBack = () => {
    setMode('select')
  }

  return (
    <div className="app">
      {mode === 'auth' && (
        <AuthPage 
          onAuthSuccess={handleAuthSuccess} 
          onBack={() => setMode('select')} 
        />
      )}

      {mode === 'payment' && (
        <Payment 
          onSuccess={handlePaymentSuccess} 
          onBack={handlePaymentBack} 
        />
      )}

      {mode === 'select' && (
        <StateSelector 
          onSelectState={handleSelectState} 
          onLogin={handleLogin}
          onLogout={handleLogout}
          user={user}
        />
      )}
      
      {mode === 'dashboard' && (
        <Dashboard 
          state={selectedState}
          onChangeState={handleChangeState}
          onStartTest={handleStartTest}
          onStartQuiz={handleStartQuiz}
          onStartFlashcards={handleStartFlashcards}
          onStartGame={handleStartGame}
          onStartStudyGuide={handleStartStudyGuide}
        />
      )}
      
      {mode === 'test' && (
        <Test 
          state={selectedState}
          questionCount={testConfig.questionCount}
          topic={testConfig.topic}
          onExit={handleExit}
        />
      )}
      
      {mode === 'flashcards' && (
        <Flashcards 
          state={selectedState}
          topic={testConfig.topic}
          onExit={handleExit}
        />
      )}
      
      {mode === 'game' && (
        <Game 
          state={selectedState}
          topic={testConfig.topic}
          onExit={handleExit}
        />
      )}

      {mode === 'studyguide' && (
        <StudyGuide 
          selectedState={selectedState}
          onBack={handleExit}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
