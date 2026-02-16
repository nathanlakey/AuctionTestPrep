import { useState, useEffect, useCallback } from 'react'
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
import Admin, { isAdmin } from './components/Admin'
import './App.css'

function AppContent() {
  const [selectedState, setSelectedState] = useState(null)
  const [mode, setMode] = useState('select') // select, dashboard, test, quiz, flashcards, game, studyguide, auth, payment
  const [testConfig, setTestConfig] = useState({})
  const [resetToken, setResetToken] = useState(null)
  const { user, logout, markAsPaid } = useAuth()

  // Push browser history when mode changes so the back button works within the app
  const navigateTo = useCallback((newMode) => {
    setMode(prevMode => {
      if (prevMode !== newMode) {
        window.history.pushState({ mode: newMode }, '', window.location.pathname)
      }
      return newMode
    })
  }, [])

  // Handle Stripe payment return — check for ?payment=success on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('payment') === 'success' && user) {
      markAsPaid()
      window.history.replaceState({}, '', window.location.pathname)
    } else if (params.get('payment') === 'cancelled') {
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [user, markAsPaid])

  // Handle password reset link — check for ?reset_token= on page load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('reset_token')
    if (token) {
      setResetToken(token)
      setMode('auth')
      window.history.replaceState({}, '', window.location.pathname)
    }
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

  // Dynamic page title based on current view
  useEffect(() => {
    const titles = {
      select: 'Home',
      auth: 'Sign In',
      payment: 'Payment',
      dashboard: 'Dashboard',
      test: 'Practice Test',
      flashcards: 'Flashcards',
      game: 'Study Game',
      studyguide: 'Study Guide',
      profile: 'Profile',
      admin: 'Admin',
    }
    const label = titles[mode] || 'Home'
    document.title = `${label} — Auction Academy`
  }, [mode])

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
    navigateTo('select')
  }

  const handleDashboard = () => {
    if (selectedState) {
      navigateTo('dashboard')
    } else {
      // No state yet — go to select page (they're already there, so this is a no-op,
      // but it ensures correct behavior from other pages)
      navigateTo('select')
    }
  }

  const handleStartTest = (questionCount, timed = false) => {
    setTestConfig({ questionCount, topic: 'All Topics', timed })
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

  const handleAdmin = () => {
    navigateTo('admin')
  }

  const handleAdminBack = () => {
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
          onBack={() => { setResetToken(null); navigateTo('select'); }}
          resetToken={resetToken}
          onResetComplete={() => setResetToken(null)}
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
          onAdmin={handleAdmin}
          onDashboard={handleDashboard}
          isUserAdmin={isAdmin(user)}
          user={user}
          initialState={selectedState || ''}
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
          onAdmin={handleAdmin}
          onLogout={handleLogout}
          isUserAdmin={isAdmin(user)}
        />
      )}
      
      {mode === 'test' && (
        <Test 
          state={selectedState}
          questionCount={testConfig.questionCount}
          topic={testConfig.topic}
          timed={testConfig.timed || false}
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

      {mode === 'admin' && (
        <Admin 
          onBack={handleAdminBack}
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
