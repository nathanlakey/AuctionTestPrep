import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './Profile.css';

function Profile({ onBack }) {
  const { user, updateProfile, changePassword, deleteAccount, logout, getResultsSummary } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [progressData, setProgressData] = useState(null);
  const [progressLoading, setProgressLoading] = useState(true);

  // Edit form state
  const [editForm, setEditForm] = useState({
    username: user?.username || '',
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
  });

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // Load progress data on mount
  useEffect(() => {
    async function loadProgress() {
      const result = await getResultsSummary();
      if (result.success) {
        setProgressData(result.summary);
      }
      setProgressLoading(false);
    }
    loadProgress();
  }, [getResultsSummary]);

  const handleEditSave = async () => {
    if (!editForm.username.trim()) {
      showMessage('Username is required.', 'error');
      return;
    }
    if (!editForm.email.trim()) {
      showMessage('Email is required.', 'error');
      return;
    }

    const result = await updateProfile({
      username: editForm.username.trim(),
      email: editForm.email.trim(),
      firstName: editForm.firstName.trim(),
      lastName: editForm.lastName.trim(),
      phone: editForm.phone.trim(),
    });

    if (result.success) {
      showMessage('Profile updated successfully!');
      setIsEditing(false);
    } else {
      showMessage(result.error, 'error');
    }
  };

  const handleEditCancel = () => {
    setEditForm({
      username: user?.username || '',
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
    });
    setIsEditing(false);
  };

  const handleChangePassword = async () => {
    if (!passwordForm.currentPassword) {
      showMessage('Please enter your current password.', 'error');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      showMessage('New password must be at least 6 characters.', 'error');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showMessage('New passwords do not match.', 'error');
      return;
    }

    const result = await changePassword(passwordForm.currentPassword, passwordForm.newPassword);
    if (result.success) {
      showMessage('Password changed successfully!');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setShowPasswordForm(false);
    } else {
      showMessage(result.error, 'error');
    }
  };

  const handleDeleteAccount = () => {
    deleteAccount();
    logout();
    onBack();
  };

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`;
    }
    return user?.username ? user.username[0] : '?';
  };

  const getMemberSince = () => {
    if (user?.createdAt) {
      return new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return 'N/A';
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="profile-header-content">
          <h1>👤 My Profile</h1>
          <button className="btn-back-profile" onClick={onBack}>
            ← Back
          </button>
        </div>
      </header>

      <div className="profile-content">
        {message && (
          <div className={`profile-message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Avatar Section */}
        <div className="profile-avatar-section">
          <div className="profile-avatar">{getInitials()}</div>
          <div className="profile-avatar-name">
            {user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.username}
          </div>
          <div className="profile-avatar-email">{user.email}</div>
        </div>

        {/* Progress Tracking Section */}
        <div className="profile-card">
          <h2>📊 Your Progress</h2>
          {progressLoading ? (
            <p style={{ color: '#666', textAlign: 'center', padding: '1rem 0' }}>Loading your stats...</p>
          ) : !progressData || progressData.totalAttempts === 0 ? (
            <div className="progress-empty">
              <p>📝 No results yet! Complete a test, quiz, or game to start tracking your progress.</p>
            </div>
          ) : (
            <>
              {/* Summary Stats */}
              <div className="progress-stats-grid">
                <div className="progress-stat-card">
                  <div className="progress-stat-value">{progressData.totalAttempts}</div>
                  <div className="progress-stat-label">Total Attempts</div>
                </div>
                <div className="progress-stat-card">
                  <div className="progress-stat-value">{progressData.averageScore}%</div>
                  <div className="progress-stat-label">Average Score</div>
                </div>
                <div className="progress-stat-card streak-card">
                  <div className="progress-stat-value">{progressData.currentStreak || 0} 🔥</div>
                  <div className="progress-stat-label">Day Streak</div>
                </div>
                <div className="progress-stat-card">
                  <div className="progress-stat-value">{progressData.longestStreak || 0} 🏆</div>
                  <div className="progress-stat-label">Best Streak</div>
                </div>
                {progressData.byMode.map(m => (
                  <div className="progress-stat-card" key={m.mode}>
                    <div className="progress-stat-value">{m.bestScore}%</div>
                    <div className="progress-stat-label">Best {m.mode === 'test' ? 'Test' : m.mode === 'quiz' ? 'Quiz' : 'Game'}</div>
                  </div>
                ))}
              </div>

              {/* By Mode Breakdown */}
              <div className="progress-modes">
                {progressData.byMode.map(m => (
                  <div className="progress-mode-row" key={m.mode}>
                    <span className="progress-mode-icon">
                      {m.mode === 'test' ? '📝' : m.mode === 'quiz' ? '🎯' : '🎮'}
                    </span>
                    <span className="progress-mode-name">
                      {m.mode === 'test' ? 'Practice Tests' : m.mode === 'quiz' ? 'Quizzes' : 'Games'}
                    </span>
                    <span className="progress-mode-count">{m.count} completed</span>
                    <span className="progress-mode-avg">Avg: {m.avgScore}%</span>
                  </div>
                ))}
              </div>

              {/* Recent Results */}
              {progressData.recent.length > 0 && (
                <div className="progress-recent">
                  <h3>Recent Activity</h3>
                  {progressData.recent.map(r => {
                    const date = new Date(r.createdAt + 'Z');
                    const passed = r.scorePercentage >= 70;
                    return (
                      <div className="progress-recent-item" key={r.id}>
                        <span className="progress-recent-icon">
                          {r.mode === 'test' ? '📝' : r.mode === 'quiz' ? '🎯' : '🎮'}
                        </span>
                        <div className="progress-recent-info">
                          <div className="progress-recent-title">
                            {r.mode === 'test' ? 'Practice Test' : r.mode === 'quiz' ? 'Quiz' : 'Game'} — {r.state}
                          </div>
                          <div className="progress-recent-meta">
                            {r.topic !== 'All Topics' && <span>{r.topic} · </span>}
                            {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                        <div className={`progress-recent-score ${passed ? 'passed' : 'failed'}`}>
                          {r.scoreCorrect}/{r.scoreTotal} ({Math.round(r.scorePercentage)}%)
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Account Info Card */}
        <div className="profile-card">
          <h2>📋 Account Information</h2>

          {!isEditing ? (
            <>
              <div className="profile-info-row">
                <span className="profile-info-label">Username</span>
                <span className="profile-info-value">{user.username}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">Email</span>
                <span className="profile-info-value">{user.email}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">First Name</span>
                <span className="profile-info-value">{user.firstName || '—'}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">Last Name</span>
                <span className="profile-info-value">{user.lastName || '—'}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">Phone</span>
                <span className="profile-info-value">{user.phone || '—'}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">Member Since</span>
                <span className="profile-info-value">{getMemberSince()}</span>
              </div>
              <div className="profile-info-row">
                <span className="profile-info-label">Subscription</span>
                <span className="profile-info-value">
                  <span className={`profile-badge ${user.hasPaid ? 'paid' : 'unpaid'}`}>
                    {user.hasPaid ? '✅ Active' : '❌ Inactive'}
                  </span>
                </span>
              </div>
              <div className="profile-btn-row" style={{ marginTop: '1rem' }}>
                <button className="btn-profile-edit" onClick={() => setIsEditing(true)}>
                  ✏️ Edit Profile
                </button>
              </div>
            </>
          ) : (
            <div className="profile-edit-form">
              <div className="profile-form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={editForm.username}
                  onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                />
              </div>
              <div className="profile-form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                />
              </div>
              <div className="profile-form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="profile-form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="profile-form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="profile-btn-row">
                <button className="btn-profile-save" onClick={handleEditSave}>
                  💾 Save Changes
                </button>
                <button className="btn-profile-cancel" onClick={handleEditCancel}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Security Card */}
        <div className="profile-card">
          <h2>🔒 Security</h2>

          {!showPasswordForm ? (
            <button className="btn-profile-edit" onClick={() => setShowPasswordForm(true)}>
              🔑 Change Password
            </button>
          ) : (
            <div className="profile-edit-form">
              <div className="profile-form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, currentPassword: e.target.value })
                  }
                  placeholder="Enter current password"
                />
              </div>
              <div className="profile-form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                  }
                  placeholder="Enter new password"
                />
              </div>
              <div className="profile-form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                  }
                  placeholder="Confirm new password"
                />
              </div>
              <div className="profile-btn-row">
                <button className="btn-profile-save" onClick={handleChangePassword}>
                  Update Password
                </button>
                <button
                  className="btn-profile-cancel"
                  onClick={() => {
                    setShowPasswordForm(false);
                    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Danger Zone */}
        <div className="profile-card profile-danger-zone">
          <h2>⚠️ Danger Zone</h2>
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            Once you delete your account, there is no going back. Please be certain.
          </p>

          {!showDeleteConfirm ? (
            <button className="btn-profile-danger" onClick={() => setShowDeleteConfirm(true)}>
              🗑️ Delete Account
            </button>
          ) : (
            <div>
              <p style={{ color: '#991b1b', fontWeight: 600, marginBottom: '1rem' }}>
                Are you sure? This will permanently delete your account and all data.
              </p>
              <div className="profile-btn-row">
                <button className="btn-profile-danger" onClick={handleDeleteAccount}>
                  Yes, Delete My Account
                </button>
                <button
                  className="btn-profile-cancel"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
