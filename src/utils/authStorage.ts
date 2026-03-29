import type { User } from '../types/auth';

const STORAGE_KEYS = {
  USERS: 'conceptly_users',
  CURRENT_USER: 'conceptly_current_user',
};

/**
 * Gets all users from localStorage.
 */
export const getAllUsers = (): User[] => {
  try {
    const usersJson = localStorage.getItem(STORAGE_KEYS.USERS);
    return usersJson ? JSON.parse(usersJson) : [];
  } catch (error) {
    console.error('Error reading users from storage:', error);
    return [];
  }
};

/**
 * Saves a new user to localStorage.
 */
export const saveUser = (user: User): void => {
  try {
    const users = getAllUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving user to storage:', error);
  }
};

/**
 * Updates an existing user's data (e.g., password).
 */
export const updateUser = (updatedUser: User): void => {
  try {
    const users = getAllUsers();
    const index = users.findIndex(u => u.id === updatedUser.id || u.email === updatedUser.email);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }
  } catch (error) {
    console.error('Error updating user in storage:', error);
  }
};

/**
 * Sets the current logged-in user session.
 */
export const setCurrentSession = (user: User | null): void => {
  try {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  } catch (error) {
    console.error('Error setting session in storage:', error);
  }
};

/**
 * Gets the current logged-in user from the session.
 */
export const getCurrentSession = (): User | null => {
  try {
    const sessionJson = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return sessionJson ? JSON.parse(sessionJson) : null;
  } catch (error) {
    console.error('Error reading session from storage:', error);
    return null;
  }
};

/**
 * Validates credentials against stored users.
 */
export const validateCredentials = (email: string, password: string): User | null => {
  const users = getAllUsers();
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
};
