import { useState, useMemo, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import './Admin.css';

// Add admin emails here — these users will always have admin access
const ADMIN_EMAILS = ['hello@auctionacademy.com', 'nathan@auctionacademy.com', 'admin@auctionacademy.com'];

const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';

function getToken() {
  return localStorage.getItem('auctionAcademyToken');
}

async function adminFetch(endpoint, options = {}) {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Something went wrong.');
  return data;
}

export function isAdmin(user) {
  if (!user) return false;
  if (user.isAdmin) return true;
  if (ADMIN_EMAILS.includes(user.email?.toLowerCase())) return true;
  return false;
}

function Admin({ onBack }) {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('analytics'); // 'analytics' or 'users'
  const [analytics, setAnalytics] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // Fetch all users from server
  const loadUsers = useCallback(async () => {
    try {
      const data = await adminFetch('/api/admin/users');
      setAllUsers(data.users);
    } catch (err) {
      showMessage(err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch analytics
  const loadAnalytics = useCallback(async () => {
    try {
      const data = await adminFetch('/api/admin/analytics');
      setAnalytics(data.analytics);
    } catch (err) {
      showMessage(err.message, 'error');
    } finally {
      setAnalyticsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin(user)) {
      loadUsers();
      loadAnalytics();
    }
  }, [user, loadUsers, loadAnalytics]);

  // Filter & search
  const filteredUsers = useMemo(() => {
    let result = allUsers;

    if (filter === 'paid') result = result.filter(u => u.hasPaid);
    else if (filter === 'unpaid') result = result.filter(u => !u.hasPaid);
    else if (filter === 'admin') result = result.filter(u => u.isAdmin);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        u =>
          u.username.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          (u.firstName + ' ' + u.lastName).toLowerCase().includes(q)
      );
    }

    return result;
  }, [allUsers, filter, search]);

  // Stats
  const stats = useMemo(() => ({
    total: allUsers.length,
    paid: allUsers.filter(u => u.hasPaid).length,
    unpaid: allUsers.filter(u => !u.hasPaid).length,
    admins: allUsers.filter(u => u.isAdmin).length,
  }), [allUsers]);

  const toggleAccess = async (userId) => {
    try {
      const data = await adminFetch(`/api/admin/users/${userId}/access`, { method: 'PUT' });
      showMessage(`Access ${data.user.hasPaid ? 'granted' : 'revoked'} for ${data.user.username}`);
      loadUsers();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const toggleAdmin = async (userId) => {
    if (userId === user.id) {
      showMessage("You can't remove your own admin access.", 'error');
      return;
    }
    try {
      const data = await adminFetch(`/api/admin/users/${userId}/role`, { method: 'PUT' });
      showMessage(`${data.user.username} is ${data.user.isAdmin ? 'now an admin' : 'no longer an admin'}`);
      loadUsers();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const confirmDelete = (userToDelete) => {
    if (userToDelete.id === user.id) {
      showMessage("You can't delete your own account from here.", 'error');
      return;
    }
    setDeleteTarget(userToDelete);
  };

  const handleDeleteUser = async () => {
    if (!deleteTarget) return;
    try {
      await adminFetch(`/api/admin/users/${deleteTarget.id}`, { method: 'DELETE' });
      showMessage(`Deleted user: ${deleteTarget.username}`);
      setDeleteTarget(null);
      loadUsers();
    } catch (err) {
      showMessage(err.message, 'error');
      setDeleteTarget(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!isAdmin(user)) {
    return (
      <div className="admin-container">
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>🚫 Access Denied</h2>
          <p>You do not have admin privileges.</p>
          <button className="btn-back-admin" style={{ background: '#001829', marginTop: '1rem' }} onClick={onBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (loading && analyticsLoading) {
    return (
      <div className="admin-container">
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>Loading users...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>🛡️ Admin Dashboard</h1>
          <button className="btn-back-admin" onClick={onBack}>← Back</button>
        </div>
      </header>

      <div className="admin-content">
        {message && (
          <div className={`admin-message ${message.type}`}>{message.text}</div>
        )}

        {/* Tab Buttons */}
        <div className="admin-tabs">
          <button className={`admin-tab ${tab === 'analytics' ? 'active' : ''}`} onClick={() => setTab('analytics')}>
            📊 Analytics
          </button>
          <button className={`admin-tab ${tab === 'users' ? 'active' : ''}`} onClick={() => setTab('users')}>
            👥 Users
          </button>
        </div>

        {/* ── ANALYTICS TAB ── */}
        {tab === 'analytics' && (
          <div className="analytics-section">
            {analyticsLoading ? (
              <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Loading analytics...</p>
            ) : analytics ? (
              <>
                {/* Top-level stats */}
                <div className="admin-stats">
                  <div className="admin-stat-card">
                    <span className="stat-number">{analytics.totalUsers}</span>
                    <span className="stat-label">Total Users</span>
                  </div>
                  <div className="admin-stat-card">
                    <span className="stat-number">{analytics.paidUsers}</span>
                    <span className="stat-label">Paid Users</span>
                  </div>
                  <div className="admin-stat-card">
                    <span className="stat-number">${analytics.estimatedRevenue.toLocaleString()}</span>
                    <span className="stat-label">Est. Revenue</span>
                  </div>
                  <div className="admin-stat-card">
                    <span className="stat-number">{analytics.totalTests}</span>
                    <span className="stat-label">Tests Taken</span>
                  </div>
                </div>

                <div className="analytics-grid">
                  {/* Popular States */}
                  <div className="analytics-card">
                    <h3>🗺️ Most Popular States</h3>
                    {analytics.popularStates.length > 0 ? (
                      <div className="analytics-list">
                        {analytics.popularStates.map(s => (
                          <div key={s.state} className="analytics-list-item">
                            <span className="analytics-list-label">{s.state}</span>
                            <span className="analytics-list-value">{s.count} tests</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="analytics-empty">No test data yet</p>
                    )}
                  </div>

                  {/* Scores by Mode */}
                  <div className="analytics-card">
                    <h3>📈 Scores by Mode</h3>
                    {analytics.scoresByMode.length > 0 ? (
                      <div className="analytics-list">
                        {analytics.scoresByMode.map(m => (
                          <div key={m.mode} className="analytics-list-item">
                            <span className="analytics-list-label">{m.mode}</span>
                            <span className="analytics-list-value">{m.avgScore}% avg · {m.attempts} attempts</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="analytics-empty">No test data yet</p>
                    )}
                  </div>

                  {/* Daily Signups */}
                  <div className="analytics-card">
                    <h3>📅 Recent Signups (30 days)</h3>
                    {analytics.dailySignups.length > 0 ? (
                      <div className="analytics-list">
                        {analytics.dailySignups.slice(0, 10).map(d => (
                          <div key={d.day} className="analytics-list-item">
                            <span className="analytics-list-label">{new Date(d.day + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            <span className="analytics-list-value">{d.count} user{d.count > 1 ? 's' : ''}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="analytics-empty">No signups in the last 30 days</p>
                    )}
                  </div>

                  {/* Recent Activity */}
                  <div className="analytics-card">
                    <h3>⚡ Recent Activity</h3>
                    {analytics.recentActivity.length > 0 ? (
                      <div className="analytics-list">
                        {analytics.recentActivity.map((a, i) => (
                          <div key={i} className="analytics-list-item">
                            <span className="analytics-list-label">
                              <strong>{a.username}</strong> — {a.mode} ({a.state})
                            </span>
                            <span className="analytics-list-value">{Math.round(a.score)}%</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="analytics-empty">No activity yet</p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Failed to load analytics.</p>
            )}
          </div>
        )}

        {/* ── USERS TAB ── */}
        {tab === 'users' && (
          <>
        {/* Stats */}
        <div className="admin-stats">
          <div className="admin-stat-card">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Total Users</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">{stats.paid}</span>
            <span className="stat-label">Paid Users</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">{stats.unpaid}</span>
            <span className="stat-label">Unpaid Users</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">{stats.admins}</span>
            <span className="stat-label">Admins</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="admin-toolbar">
          <input
            type="text"
            className="admin-search"
            placeholder="🔍 Search by name, email, or username..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="admin-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Users</option>
            <option value="paid">Paid Only</option>
            <option value="unpaid">Unpaid Only</option>
            <option value="admin">Admins Only</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="admin-table-card">
          <div className="admin-table-header">
            <h2>👥 Users ({filteredUsers.length})</h2>
          </div>

          {filteredUsers.length === 0 ? (
            <div className="admin-empty">
              <div className="empty-icon">🔍</div>
              <p>No users found matching your criteria.</p>
            </div>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Access</th>
                    <th>Role</th>
                    <th>Joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id}>
                      <td><strong>{u.username}</strong></td>
                      <td>{u.email}</td>
                      <td>{u.firstName || u.lastName ? `${u.firstName} ${u.lastName}`.trim() : '—'}</td>
                      <td>
                        <span className={`badge ${u.hasPaid ? 'badge-paid' : 'badge-unpaid'}`}>
                          {u.hasPaid ? '✅ Paid' : '❌ Unpaid'}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${u.isAdmin ? 'badge-admin' : 'badge-user'}`}>
                          {u.isAdmin ? '🛡️ Admin' : 'User'}
                        </span>
                      </td>
                      <td>{formatDate(u.createdAt)}</td>
                      <td>
                        <div className="admin-actions">
                          <button
                            className={`btn-admin-action ${u.hasPaid ? 'btn-revoke' : 'btn-grant'}`}
                            onClick={() => toggleAccess(u.id)}
                          >
                            {u.hasPaid ? '🔒 Revoke' : '🔓 Grant'}
                          </button>
                          <button
                            className="btn-admin-action btn-make-admin"
                            onClick={() => toggleAdmin(u.id)}
                          >
                            {u.isAdmin ? '👤 Remove Admin' : '🛡️ Make Admin'}
                          </button>
                          <button
                            className="btn-admin-action btn-delete-user"
                            onClick={() => confirmDelete(u)}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="admin-confirm-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="admin-confirm-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>⚠️ Delete User</h3>
            <p>
              Are you sure you want to delete <strong>{deleteTarget.username}</strong> ({deleteTarget.email})?
              This cannot be undone.
            </p>
            <div className="admin-confirm-btns">
              <button className="btn-confirm-delete" onClick={handleDeleteUser}>
                Yes, Delete
              </button>
              <button className="btn-confirm-cancel" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
