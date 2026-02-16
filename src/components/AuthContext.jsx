import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext(null);

const API_BASE = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';

// Helper to get stored token
function getStoredToken() {
  return localStorage.getItem('auctionAcademyToken');
}

function getInitialUser() {
  const storedUser = localStorage.getItem('auctionAcademyUser');
  if (storedUser) {
    try {
      return JSON.parse(storedUser);
    } catch {
      localStorage.removeItem('auctionAcademyUser');
    }
  }
  return null;
}

// Helper for API calls
async function apiFetch(endpoint, options = {}) {
  const token = getStoredToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  } catch (networkError) {
    throw new Error('Unable to connect to the server. It may be waking up — please wait a moment and try again.');
  }

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error('The server returned an unexpected response. Please try again.');
  }

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong.');
  }
  return data;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);

  // On mount, verify token with server and refresh user data
  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      apiFetch('/api/auth/me')
        .then(data => {
          setUser(data.user);
          localStorage.setItem('auctionAcademyUser', JSON.stringify(data.user));
        })
        .catch(() => {
          // Token invalid — clear session
          localStorage.removeItem('auctionAcademyToken');
          localStorage.removeItem('auctionAcademyUser');
          setUser(null);
        });
    }
  }, []);

  const signup = useCallback(async (username, email, password) => {
    try {
      const data = await apiFetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });
      localStorage.setItem('auctionAcademyToken', data.token);
      localStorage.setItem('auctionAcademyUser', JSON.stringify(data.user));
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      const data = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem('auctionAcademyToken', data.token);
      localStorage.setItem('auctionAcademyUser', JSON.stringify(data.user));
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('auctionAcademyToken');
    localStorage.removeItem('auctionAcademyUser');
  }, []);

  const markAsPaid = useCallback(async () => {
    try {
      const data = await apiFetch('/api/auth/mark-paid', { method: 'PUT' });
      setUser(data.user);
      localStorage.setItem('auctionAcademyUser', JSON.stringify(data.user));
    } catch {
      // Fallback: update locally in case server is unreachable
      setUser(prev => {
        if (!prev) return prev;
        const updated = { ...prev, hasPaid: true };
        localStorage.setItem('auctionAcademyUser', JSON.stringify(updated));
        return updated;
      });
    }
  }, []);

  const updateProfile = useCallback(async (updates) => {
    try {
      const data = await apiFetch('/api/auth/profile', {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
      setUser(data.user);
      localStorage.setItem('auctionAcademyUser', JSON.stringify(data.user));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const changePassword = useCallback(async (currentPassword, newPassword) => {
    try {
      await apiFetch('/api/auth/password', {
        method: 'PUT',
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    try {
      await apiFetch('/api/auth/account', { method: 'DELETE' });
    } catch {
      // proceed anyway
    }
    setUser(null);
    localStorage.removeItem('auctionAcademyToken');
    localStorage.removeItem('auctionAcademyUser');
  }, []);

  const forgotPassword = useCallback(async (email) => {
    try {
      const data = await apiFetch('/api/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      return { success: true, message: data.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const resetPasswordWithToken = useCallback(async (token, newPassword) => {
    try {
      const data = await apiFetch('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, newPassword }),
      });
      return { success: true, message: data.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const saveResult = useCallback(async (resultData) => {
    try {
      await apiFetch('/api/results', {
        method: 'POST',
        body: JSON.stringify(resultData),
      });
      return { success: true };
    } catch (err) {
      console.error('Failed to save result:', err.message);
      return { success: false, error: err.message };
    }
  }, []);

  const getResults = useCallback(async () => {
    try {
      const data = await apiFetch('/api/results');
      return { success: true, results: data.results };
    } catch (err) {
      return { success: false, error: err.message, results: [] };
    }
  }, []);

  const getResultsSummary = useCallback(async () => {
    try {
      const data = await apiFetch('/api/results/summary');
      return { success: true, summary: data.summary };
    } catch (err) {
      return { success: false, error: err.message, summary: null };
    }
  }, []);

  const getBookmarks = useCallback(async (state) => {
    try {
      const url = state ? `/api/bookmarks?state=${encodeURIComponent(state)}` : '/api/bookmarks';
      const data = await apiFetch(url);
      return { success: true, bookmarks: data.bookmarks };
    } catch (err) {
      return { success: false, error: err.message, bookmarks: [] };
    }
  }, []);

  const toggleBookmark = useCallback(async (questionId, state) => {
    try {
      const data = await apiFetch('/api/bookmarks', {
        method: 'POST',
        body: JSON.stringify({ questionId, state }),
      });
      return { success: true, bookmarked: data.bookmarked };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  const getExamDate = useCallback(async () => {
    try {
      const data = await apiFetch('/api/exam-date');
      return { success: true, examDate: data.examDate };
    } catch (err) {
      return { success: false, error: err.message, examDate: null };
    }
  }, []);

  const setExamDate = useCallback(async (examDate) => {
    try {
      const data = await apiFetch('/api/exam-date', {
        method: 'PUT',
        body: JSON.stringify({ examDate }),
      });
      return { success: true, examDate: data.examDate };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, markAsPaid, updateProfile, changePassword, deleteAccount, forgotPassword, resetPasswordWithToken, saveResult, getResults, getResultsSummary, getBookmarks, toggleBookmark, getExamDate, setExamDate }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
