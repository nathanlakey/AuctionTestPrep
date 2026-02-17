import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { useAuth } from './AuthContext';
import { isAdmin } from '../utils/adminUtils';
import './Admin.css';

// Re-export isAdmin for backward compatibility
export { isAdmin };

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

function Admin({ state, onBack, onChangeState, onDashboard, onProfile, onLogout, isUserAdmin }) {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('analytics'); // 'analytics', 'users', or 'reports'
  const [analytics, setAnalytics] = useState(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportedQuestions, setReportedQuestions] = useState([]);
  const [reportsLoading, setReportsLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState(null);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  // Fetch reported questions
  const loadReports = useCallback(async () => {
    try {
      const data = await adminFetch('/api/admin/reported-questions');
      setReportedQuestions(data.reports || []);
    } catch (err) {
      showMessage(err.message, 'error');
    } finally {
      setReportsLoading(false);
    }
  }, []);

  // Fetch feedback submissions
  const loadFeedback = useCallback(async () => {
    try {
      const data = await adminFetch('/api/admin/feedback');
      setFeedbackList(data.feedback || []);
    } catch (err) {
      showMessage(err.message, 'error');
    } finally {
      setFeedbackLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin(user)) {
      loadUsers();
      loadAnalytics();
      loadReports();
      loadFeedback();
    }
  }, [user, loadUsers, loadAnalytics, loadReports, loadFeedback]);

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

  const updateReportStatus = async (reportId, status) => {
    try {
      await adminFetch(`/api/admin/reported-questions/${reportId}`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
      });
      showMessage(`Report marked as ${status}`);
      loadReports();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const deleteReport = async (reportId) => {
    try {
      await adminFetch(`/api/admin/reported-questions/${reportId}`, { method: 'DELETE' });
      showMessage('Report deleted');
      loadReports();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const updateFeedbackStatus = async (feedbackId, status) => {
    try {
      await adminFetch(`/api/admin/feedback/${feedbackId}`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
      });
      showMessage(`Feedback marked as ${status}`);
      loadFeedback();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const deleteFeedback = async (feedbackId) => {
    try {
      await adminFetch(`/api/admin/feedback/${feedbackId}`, { method: 'DELETE' });
      showMessage('Feedback deleted');
      loadFeedback();
    } catch (err) {
      showMessage(err.message, 'error');
    }
  };

  const openFeedbackModal = () => {
    setFeedbackName(user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : '');
    setFeedbackEmail(user?.email || '');
    setFeedbackMessage('');
    setFeedbackStatus(null);
    setFeedbackModal(true);
  };

  const closeFeedbackModal = () => {
    setFeedbackModal(false);
    setFeedbackName('');
    setFeedbackEmail('');
    setFeedbackMessage('');
    setFeedbackStatus(null);
  };

  const handleSubmitFeedback = async () => {
    if (!feedbackMessage.trim()) return;
    setFeedbackStatus('sending');
    try {
      const token = localStorage.getItem('auctionAcademyToken');
      const res = await fetch(`${API_BASE}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ name: feedbackName, email: feedbackEmail, message: feedbackMessage }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit feedback.');
      setFeedbackStatus('sent');
      setTimeout(() => closeFeedbackModal(), 2000);
    } catch (err) {
      console.error('Feedback submit error:', err);
      setFeedbackStatus('error');
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
          <button style={{ background: '#001829', color: 'white', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '6px', cursor: 'pointer', marginTop: '1rem' }} onClick={onBack}>
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
      <header className="dashboard-header">
        <div className="header-content">
          <img src="/icon.png" alt="Auction Academy" className="dashboard-logo clickable-logo" onClick={onChangeState} />
          <nav className="header-nav">
            <button className="nav-link" onClick={onChangeState}>HOME</button>
            {state && <span className="nav-link nav-state">{state.toUpperCase()}</span>}
            <button className="nav-link" onClick={onDashboard}>DASHBOARD</button>
            <button className="nav-link" onClick={onChangeState}>CHANGE STATE</button>
            <button className="nav-link" onClick={onProfile}>PROFILE</button>
            <button className="nav-link nav-active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ADMIN</button>
          </nav>
          <div className="header-right" ref={menuRef}>
            <button className="nav-cta" onClick={() => setMenuOpen(!menuOpen)}>
              {user?.username?.toUpperCase() || 'MENU'} {menuOpen ? '▴' : '▾'}
            </button>
            {menuOpen && (
              <div className="user-dropdown-menu">
                <button className="dropdown-item" onClick={() => { setMenuOpen(false); onDashboard(); }}>
                  📊 Dashboard
                </button>
                <button className="dropdown-item" onClick={() => { setMenuOpen(false); onProfile(); }}>
                  👤 Profile
                </button>
                <button className="dropdown-item" onClick={() => { setMenuOpen(false); openFeedbackModal(); }}>
                  📧 Contact Us
                </button>
                <div className="dropdown-divider" />
                <button className="dropdown-item dropdown-item-logout" onClick={() => { setMenuOpen(false); onLogout(); }}>
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
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
          <button className={`admin-tab ${tab === 'reports' ? 'active' : ''}`} onClick={() => setTab('reports')}>
            ⚠️ Reported Questions {reportedQuestions.filter(r => r.status === 'open').length > 0 && (
              <span className="report-badge-count">{reportedQuestions.filter(r => r.status === 'open').length}</span>
            )}
          </button>
          <button className={`admin-tab ${tab === 'feedback' ? 'active' : ''}`} onClick={() => setTab('feedback')}>
            📧 Feedback {feedbackList.filter(f => f.status === 'new').length > 0 && (
              <span className="report-badge-count">{feedbackList.filter(f => f.status === 'new').length}</span>
            )}
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

        {/* ── REPORTED QUESTIONS TAB ── */}
        {tab === 'reports' && (
          <div className="reports-section">
            {reportsLoading ? (
              <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Loading reported questions...</p>
            ) : reportedQuestions.length === 0 ? (
              <div className="admin-empty">
                <div className="empty-icon">✅</div>
                <p>No reported questions yet.</p>
              </div>
            ) : (
              <div className="admin-table-card">
                <div className="admin-table-header">
                  <h2>⚠️ Reported Questions ({reportedQuestions.length})</h2>
                </div>
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Reason</th>
                        <th>Reported By</th>
                        <th>State</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportedQuestions.map((report) => (
                        <tr key={report.id}>
                          <td className="report-question-cell">{report.question_text}</td>
                          <td>{report.reason || '—'}</td>
                          <td><strong>{report.username}</strong><br /><span style={{ fontSize: '0.8rem', color: '#666' }}>{report.email}</span></td>
                          <td>{report.state || '—'}</td>
                          <td><span className="badge badge-source">{report.component || '—'}</span></td>
                          <td>
                            <span className={`badge badge-report-${report.status}`}>
                              {report.status === 'open' ? '🔴 Open' : report.status === 'reviewed' ? '🟢 Reviewed' : '⚪ Dismissed'}
                            </span>
                          </td>
                          <td>{formatDate(report.created_at)}</td>
                          <td>
                            <div className="admin-actions">
                              {report.status === 'open' && (
                                <button className="btn-admin-action btn-grant" onClick={() => updateReportStatus(report.id, 'reviewed')}>
                                  ✅ Reviewed
                                </button>
                              )}
                              {report.status === 'open' && (
                                <button className="btn-admin-action btn-revoke" onClick={() => updateReportStatus(report.id, 'dismissed')}>
                                  ❌ Dismiss
                                </button>
                              )}
                              {report.status !== 'open' && (
                                <button className="btn-admin-action btn-grant" onClick={() => updateReportStatus(report.id, 'open')}>
                                  🔄 Reopen
                                </button>
                              )}
                              <button className="btn-admin-action btn-delete-user" onClick={() => deleteReport(report.id)}>
                                🗑️ Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── FEEDBACK TAB ── */}
        {tab === 'feedback' && (
        <div className="reports-section">
          {feedbackLoading ? (
            <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Loading feedback...</p>
          ) : feedbackList.length === 0 ? (
            <div className="admin-empty">
              <div className="empty-icon">📧</div>
              <p>No feedback submissions yet.</p>
            </div>
          ) : (
            <div className="admin-table-card">
              <div className="admin-table-header">
                <h2>📧 Feedback ({feedbackList.length})</h2>
              </div>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Message</th>
                      <th>User</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackList.map((fb) => (
                      <tr key={fb.id}>
                        <td><strong>{fb.name || '—'}</strong></td>
                        <td>{fb.email || '—'}</td>
                        <td className="report-question-cell">{fb.message}</td>
                        <td>{fb.username}</td>
                        <td>
                          <span className={`badge badge-feedback-${fb.status}`}>
                            {fb.status === 'new' ? '🔵 New' : fb.status === 'read' ? '🟡 Read' : '🟢 Resolved'}
                          </span>
                        </td>
                        <td>{formatDate(fb.created_at)}</td>
                        <td>
                          <div className="admin-actions">
                            {fb.status === 'new' && (
                              <button className="btn-admin-action btn-grant" onClick={() => updateFeedbackStatus(fb.id, 'read')}>
                                👁️ Mark Read
                              </button>
                            )}
                            {(fb.status === 'new' || fb.status === 'read') && (
                              <button className="btn-admin-action btn-make-admin" onClick={() => updateFeedbackStatus(fb.id, 'resolved')}>
                                ✅ Resolved
                              </button>
                            )}
                            {fb.status !== 'new' && (
                              <button className="btn-admin-action btn-grant" onClick={() => updateFeedbackStatus(fb.id, 'new')}>
                                🔄 Reopen
                              </button>
                            )}
                            <button className="btn-admin-action btn-delete-user" onClick={() => deleteFeedback(fb.id)}>
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
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

      {/* ── Contact Us / Feedback Modal ── */}
      {feedbackModal && (
        <div className="report-modal-overlay" onClick={closeFeedbackModal}>
          <div className="report-modal" onClick={(e) => e.stopPropagation()}>
            {feedbackStatus === 'sent' ? (
              <div className="report-success">
                ✅ Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            ) : (
              <>
                <h3>📧 Contact Us</h3>
                <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Have a question, suggestion, or issue? Let us know and we'll get back to you.
                </p>
                <label className="report-label">Your Name</label>
                <input type="text" className="feedback-input" placeholder="Your name" value={feedbackName} onChange={(e) => setFeedbackName(e.target.value)} />
                <label className="report-label" style={{ marginTop: '0.75rem' }}>How Should We Contact You?</label>
                <input type="text" className="feedback-input" placeholder="Email, phone number, etc." value={feedbackEmail} onChange={(e) => setFeedbackEmail(e.target.value)} />
                <label className="report-label" style={{ marginTop: '0.75rem' }}>Your Message</label>
                <textarea className="report-textarea" rows={4} placeholder="Describe your question, issue, or feedback..." value={feedbackMessage} onChange={(e) => setFeedbackMessage(e.target.value)} />
                {feedbackStatus === 'error' && (
                  <div className="report-error">Something went wrong. Please try again or email us at hello@auctionacademy.com</div>
                )}
                <div className="report-actions">
                  <button className="btn-report-submit" onClick={handleSubmitFeedback} disabled={!feedbackMessage.trim() || feedbackStatus === 'sending'}>
                    {feedbackStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <button className="btn-report-cancel" onClick={closeFeedbackModal}>Cancel</button>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center' }}>
                  Or email us directly at <a href="mailto:hello@auctionacademy.com" style={{ color: '#d60000' }}>hello@auctionacademy.com</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
