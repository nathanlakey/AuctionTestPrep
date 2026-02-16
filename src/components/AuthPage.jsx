import { useState } from 'react';
import { useAuth } from './AuthContext';
import './AuthPage.css';

function AuthPage({ onAuthSuccess, onBack }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const { login, signup, resetPassword } = useAuth();

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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!email.trim() || !username.trim()) {
      setError('Please enter both your email and username.');
      return;
    }
    if (password.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const result = await resetPassword(email.trim(), username.trim(), password);
    if (result.success) {
      setSuccessMsg('Password reset successfully! You can now sign in.');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
      setTimeout(() => {
        setIsForgotPassword(false);
        setSuccessMsg('');
      }, 2500);
    } else {
      setError(result.error);
    }
  };

  const switchToForgot = () => {
    setIsForgotPassword(true);
    setIsLogin(true);
    setError('');
    setSuccessMsg('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
  };

  const switchToLogin = () => {
    setIsForgotPassword(false);
    setIsLogin(true);
    setError('');
    setSuccessMsg('');
    setPassword('');
    setConfirmPassword('');
    setUsername('');
  };

  // Forgot Password view
  if (isForgotPassword) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <button className="auth-back-btn" onClick={switchToLogin}>
            ← Back to Sign In
          </button>

          <div className="auth-header">
            <img src="/auction-academy-logo.png" alt="Auction Academy" className="auth-logo" />
            <h2>Reset Password</h2>
            <p>Enter your email and username to verify your identity, then choose a new password.</p>
          </div>

          {error && <div className="auth-error">{error}</div>}
          {successMsg && <div className="auth-success">{successMsg}</div>}

          <form onSubmit={handleResetPassword} className="auth-form">
            <div className="form-group">
              <label htmlFor="reset-email">Email</label>
              <input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your account email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reset-username">Username</label>
              <input
                id="reset-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reset-password">New Password</label>
              <input
                id="reset-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a new password"
                required
                minLength={6}
              />
            </div>

            <div className="form-group">
              <label htmlFor="reset-confirm">Confirm New Password</label>
              <input
                id="reset-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                minLength={6}
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Reset Password
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
