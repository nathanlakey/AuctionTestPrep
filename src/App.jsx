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
import Profile from './components/Profile'
import './App.css'

function AppContent() {
  const [selectedState, setSelectedState] = useState(null)
  const [mode, setMode] = useState('select') // select, dashboard, test, quiz, flashcards, game, studyguide, auth, payment
  const [testConfig, setTestConfig] = useState({})
  const { user, logout } = useAuth()

  // Push browser history when mode changes so the back button works within the app
  const navigateTo = useCallback((newMode) => {
    setMode(prevMode => {
      if (prevMode !== newMode) {
        window.history.pushState({ mode: newMode }, '', window.location.pathname)
      }
      return newMode
    })
  }, [])

  // Listen for browser back/forward button — always return to home page
  useEffect(() => {
    const handlePopState = () => {
      setSelectedState(null)
      setMode('select')
      // Replace history state so further back presses continue to work
      window.history.replaceState({ mode: 'select' }, '', window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    // Replace current history entry with initial state
    window.history.replaceState({ mode: 'select' }, '', window.location.pathname)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleSelectState = (state, selectedMode = null) => {
    // If user is not logged in or hasn't paid, redirect to auth/payment
    if (!user) {
      navigateTo('auth')
      return
    }
    if (!user.hasPaid) {
      navigateTo('payment')
      return
    }

    setSelectedState(state)
    if (selectedMode === 'test') {
      setTestConfig({ questionCount: 75, topic: 'All Topics' })
      navigateTo('test')
    } else if (selectedMode === 'quiz') {
      navigateTo('dashboard') // Go to dashboard to select topic
    } else if (selectedMode === 'flashcards') {
      setTestConfig({ topic: 'All Topics' })
      navigateTo('flashcards')
    } else if (selectedMode === 'game') {
      setTestConfig({ topic: 'All Topics' })
      navigateTo('game')
    } else {
      navigateTo('dashboard')
    }
  }

  const handleChangeState = () => {
    setSelectedState(null)
    navigateTo('select')
  }

  const handleStartTest = (questionCount) => {
    setTestConfig({ questionCount, topic: 'All Topics' })
    navigateTo('test')
  }

  const handleStartQuiz = (topic, questionCount) => {
    setTestConfig({ questionCount, topic: topic || 'All Topics' })
    navigateTo('test')
  }

  const handleStartFlashcards = (topic) => {
    setTestConfig({ topic: topic || 'All Topics' })
    navigateTo('flashcards')
  }

  const handleStartGame = (topic) => {
    setTestConfig({ topic: topic || 'All Topics' })
    navigateTo('game')
  }

  const handleStartStudyGuide = () => {
    navigateTo('studyguide')
  }

  const handleExit = () => {
    navigateTo('dashboard')
  }

  const handleLogin = () => {
    navigateTo('auth')
  }

  const handleLogout = () => {
    logout()
    setSelectedState(null)
    navigateTo('select')
  }

  const handleProfile = () => {
    navigateTo('profile')
  }

  const handleProfileBack = () => {
    if (selectedState) {
      navigateTo('dashboard')
    } else {
      navigateTo('select')
    }
  }

  const handleAuthSuccess = () => {
    // Check payment status from localStorage (source of truth, written synchronously by auth functions)
    const currentUser = JSON.parse(localStorage.getItem('auctionAcademyUser') || '{}')
    if (currentUser.hasPaid) {
      navigateTo('select')
    } else {
      navigateTo('payment')
    }
  }

  const handlePaymentSuccess = () => {
    navigateTo('select')
  }

  const handlePaymentBack = () => {
    navigateTo('select')
  }

  return (
    <div className="app">
      {mode === 'auth' && (
        <AuthPage 
          onAuthSuccess={handleAuthSuccess} 
          onBack={() => navigateTo('select')} 
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
          onProfile={handleProfile}
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
          onProfile={handleProfile}
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

      {mode === 'profile' && (
        <Profile 
          onBack={handleProfileBack}
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
