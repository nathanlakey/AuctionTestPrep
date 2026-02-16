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

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const data = await res.json();

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

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, markAsPaid, updateProfile, changePassword, deleteAccount, forgotPassword, resetPasswordWithToken }}>
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
