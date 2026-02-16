import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
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

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);

  const signup = useCallback(async (username, email, password) => {
    const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    if (users.find(u => u.username === username)) {
      return { success: false, error: 'This username is already taken.' };
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password: hashedPassword,
      hasPaid: false,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));

    const sessionUser = { id: newUser.id, username: newUser.username, email: newUser.email, hasPaid: newUser.hasPaid, createdAt: newUser.createdAt, firstName: '', lastName: '', phone: '' };
    setUser(sessionUser);
    localStorage.setItem('auctionAcademyUser', JSON.stringify(sessionUser));
    
    return { success: true };
  }, []);

  const login = useCallback(async (email, password) => {
    const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    const hashedPassword = await hashPassword(password);
    const foundUser = users.find(u => u.email === email && u.password === hashedPassword);
    
    if (!foundUser) {
      return { success: false, error: 'Invalid email or password.' };
    }

    const sessionUser = { id: foundUser.id, username: foundUser.username, email: foundUser.email, hasPaid: foundUser.hasPaid, createdAt: foundUser.createdAt, firstName: foundUser.firstName || '', lastName: foundUser.lastName || '', phone: foundUser.phone || '' };
    setUser(sessionUser);
    localStorage.setItem('auctionAcademyUser', JSON.stringify(sessionUser));
    
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('auctionAcademyUser');
  }, []);

  const markAsPaid = useCallback(() => {
    setUser(prev => {
      if (!prev) return prev;
      const updatedUser = { ...prev, hasPaid: true };
      localStorage.setItem('auctionAcademyUser', JSON.stringify(updatedUser));

      const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
      const userIndex = users.findIndex(u => u.id === prev.id);
      if (userIndex !== -1) {
        users[userIndex].hasPaid = true;
        localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));
      }
      return updatedUser;
    });
  }, []);

  const updateProfile = useCallback(async (updates) => {
    const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('auctionAcademyUser') || '{}');

    // Check for duplicate username/email (exclude self)
    if (updates.username && users.find(u => u.username === updates.username && u.id !== currentUser.id)) {
      return { success: false, error: 'This username is already taken.' };
    }
    if (updates.email && users.find(u => u.email === updates.email && u.id !== currentUser.id)) {
      return { success: false, error: 'This email is already in use.' };
    }

    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return { success: false, error: 'User not found.' };

    // Update stored user
    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));

    // Update session
    const updatedSession = { ...currentUser, ...updates };
    localStorage.setItem('auctionAcademyUser', JSON.stringify(updatedSession));
    setUser(updatedSession);

    return { success: true };
  }, []);

  const changePassword = useCallback(async (currentPassword, newPassword) => {
    const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('auctionAcademyUser') || '{}');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex === -1) return { success: false, error: 'User not found.' };

    const hashedCurrent = await hashPassword(currentPassword);
    if (users[userIndex].password !== hashedCurrent) {
      return { success: false, error: 'Current password is incorrect.' };
    }

    users[userIndex].password = await hashPassword(newPassword);
    localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));

    return { success: true };
  }, []);

  const deleteAccount = useCallback(() => {
    const currentUser = JSON.parse(localStorage.getItem('auctionAcademyUser') || '{}');
    let users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    users = users.filter(u => u.id !== currentUser.id);
    localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));
    localStorage.removeItem('auctionAcademyUser');
    setUser(null);
  }, []);

  const resetPassword = useCallback(async (email, username, newPassword) => {
    const users = JSON.parse(localStorage.getItem('auctionAcademyUsers') || '[]');
    const userIndex = users.findIndex(
      u => u.email.toLowerCase() === email.toLowerCase() && u.username.toLowerCase() === username.toLowerCase()
    );
    if (userIndex === -1) {
      return { success: false, error: 'No account found with that email and username combination.' };
    }
    users[userIndex].password = await hashPassword(newPassword);
    localStorage.setItem('auctionAcademyUsers', JSON.stringify(users));
    return { success: true };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, markAsPaid, updateProfile, changePassword, deleteAccount, resetPassword }}>
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
