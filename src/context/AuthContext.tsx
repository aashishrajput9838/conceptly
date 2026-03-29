import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getCurrentSession, setCurrentSession, saveUser, getAllUsers, updateUser } from '../utils/authStorage';
import type { User, AuthStatus } from '../types/auth';

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<void>;
  signup: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = getCurrentSession();
    if (savedUser) {
      setUser(savedUser);
      setStatus('authenticated');
    } else {
      setStatus('unauthenticated');
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getAllUsers();
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      setStatus('authenticated');
      setCurrentSession(foundUser);
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const signup = async (fullName: string, email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getAllUsers();
    const existing = users.find(u => u.email === email);
    
    if (existing) {
      throw new Error('Email already registered');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      fullName,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    saveUser(newUser);
    setUser(newUser);
    setStatus('authenticated');
    setCurrentSession(newUser);
  };

  const logout = () => {
    setUser(null);
    setStatus('unauthenticated');
    setCurrentSession(null);
  };

  const forgotPassword = async (email: string, newPassword: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getAllUsers();
    const user = users.find(u => u.email === email);
    
    if (!user) {
      throw new Error('Email not found');
    }

    const updatedUser = { ...user, password: newPassword };
    updateUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, status, login, signup, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
