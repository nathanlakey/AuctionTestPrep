import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './AuthPage.css';

function AuthPage({ onAuthSuccess, onBack, resetToken, onResetComplete }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetWithToken, setIsResetWithToken] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { login, signup, forgotPassword, resetPasswordWithToken } = useAuth();

  // If a reset token is passed via URL, show the "enter new password" form
  useEffect(() => {
    if (resetToken) {
      setIsResetWithToken(true);
      setIsForgotPassword(false);
      setIsLogin(true);
      setError('');
      setSuccessMsg('');
    }
  }, [resetToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!isLogin) {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (username.trim().length < 3) {
        setError('Username must be at least 3 characters.');
        return;
      }

      const result = await signup(username.trim(), email.trim(), password);
      if (result.success) {
        onAuthSuccess();
      } else {
        setError(result.error);
      }
    } else {
      const result = await login(email.trim(), password);
      if (result.success) {
        onAuthSuccess();
      } else {
        setError(result.error);
      }
    }
  };

  // Send reset email
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    setIsSending(true);
    const result = await forgotPassword(email.trim());
    setIsSending(false);

    if (result.success) {
      setSuccessMsg('✅ If an account with that email exists, a password reset link has been sent. Check your inbox (and spam folder)!');
      setEmail('');
    } else {
      setError(result.error);
    }
  };

  // Reset password with token from email link
  const handleResetWithToken = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSending(true);
    const result = await resetPasswordWithToken(resetToken, password);
    setIsSending(false);

    if (result.success) {
      setSuccessMsg('✅ Password reset successfully! You can now sign in with your new password.');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setIsResetWithToken(false);
        setSuccessMsg('');
        if (onResetComplete) onResetComplete();
      }, 3000);
    } else {
      setError(result.error);
    }
  };

  const switchToForgot = () => {
    setIsForgotPassword(true);
    setIsResetWithToken(false);
    setIsLogin(true);
    setError('');
    setSuccessMsg('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
    setEmail('');
  };

  const switchToLogin = () => {
    setIsForgotPassword(false);
    setIsResetWithToken(false);
    setIsLogin(true);
    setError('');
    setSuccessMsg('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
    setEmail('');
    if (onResetComplete) onResetComplete();
  };

  // ─── Reset Password with Token (from email link) ───
  if (isResetWithToken && resetToken) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <button className="auth-back-btn" onClick={switchToLogin}>
            ← Back to Sign In
          </button>

          <div className="auth-header">
            <img src="/auction-academy-logo.png" alt="Auction Academy" className="auth-logo" />
            <h2>Choose New Password</h2>
            <p>Enter your new password below.</p>
          </div>

          {error && <div className="auth-error">{error}</div>}
          {successMsg && <div className="auth-success">{successMsg}</div>}

          <form onSubmit={handleResetWithToken} className="auth-form">
            <div className="form-group">
              <label htmlFor="new-password">New Password</label>
              <input
                id="new-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a new password"
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-new-password">Confirm New Password</label>
              <input
                id="confirm-new-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isSending}>
              {isSending ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─── Forgot Password (enter email to get link) ───
  if (isForgotPassword) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <button className="auth-back-btn" onClick={switchToLogin}>
            ← Back to Sign In
          </button>

          <div className="auth-header">
            <img src="/auction-academy-logo.png" alt="Auction Academy" className="auth-logo" />
            <h2>Forgot Password?</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
          </div>

          {error && <div className="auth-error">{error}</div>}
          {successMsg && <div className="auth-success">{successMsg}</div>}

          <form onSubmit={handleForgotPassword} className="auth-form">
            <div className="form-group">
              <label htmlFor="reset-email">Email Address</label>
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your account email"
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="auth-toggle">
            <p>
              Remember your password?{' '}
              <button onClick={switchToLogin} className="auth-toggle-btn">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── Login / Signup ───
  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="auth-back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="auth-header">
          <img src="/auction-academy-logo.png" alt="Auction Academy" className="auth-logo" />
          <h2>{isLogin ? 'Sign In' : 'Create Account'}</h2>
          <p>{isLogin ? 'Welcome back! Sign in to continue.' : 'Join Auction Academy today.'}</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {successMsg && <div className="auth-success">{successMsg}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
                minLength={3}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && isLogin) { e.preventDefault(); handleSubmit(e); } }}
              placeholder="Enter your password"
              required
              minLength={6}
            />
            {isLogin && (
              <button type="button" className="forgot-password-btn" onClick={switchToForgot}>
                Forgot password?
              </button>
            )}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                minLength={6}
              />
            </div>
          )}

          <button type="submit" className="auth-submit-btn">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => { setIsLogin(false); setError(''); }} className="auth-toggle-btn">
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => { setIsLogin(true); setError(''); }} className="auth-toggle-btn">
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
