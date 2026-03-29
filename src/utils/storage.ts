/**
 * PERSISTENCE UTILITIES
 * Handles safe localStorage operations for the Conceptly AI platform.
 */

// --- TypeScript Interfaces for Stored Data ---

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface QuizAttempt {
  id: string;
  topic: string;
  score: number;
  total: number;
  date: string;
  difficulty: string;
}

export interface RoadmapMilestone {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  status: 'completed' | 'current' | 'locked';
}

export interface RoadmapProgress {
  goal: string;
  milestones: RoadmapMilestone[];
  lastUpdated: string;
}

export interface DashboardStats {
  accuracy: number;
  streak: number;
  hoursStudied: number;
  quizCompletion: number;
}

export interface UserPreferences {
  theme: 'dark' | 'light';
  defaultDifficulty: string;
  notificationsEnabled: boolean;
}

export interface ExplainerHistory {
  topic: string;
  explanation: string;
  difficulty: string;
  timestamp: string;
}

// --- Storage Keys ---

export const STORAGE_KEYS = {
  STATS: 'conceptly_dashboard_stats',
  RECENT_TOPICS: 'conceptly_recent_topics',
  CHAT_HISTORY: 'conceptly_chat_history',
  ROADMAP: 'conceptly_roadmap_progress',
  QUIZ_HISTORY: 'conceptly_quiz_history',
  PREFERENCES: 'conceptly_user_preferences',
  EXPLAINER_HISTORY: 'conceptly_explainer_history',
  WEEKLY_DATA: 'conceptly_weekly_analytics',
  SUBJECT_PROGRESS: 'conceptly_subject_mastery'
};

// --- Storage Functions ---

/**
 * Safely saves data to localStorage.
 */
export const saveToStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(`Error saving to localStorage (key: ${key}):`, error);
  }
};

/**
 * Safely retrieves data from localStorage with a fallback default.
 */
export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return defaultValue;
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    console.error(`Error reading from localStorage (key: ${key}):`, error);
    return defaultValue;
  }
};

/**
 * Removes a specific key from localStorage.
 */
export const removeFromStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage (key: ${key}):`, error);
  }
};

/**
 * Clears all Conceptly related data from localStorage.
 */
export const clearStorage = (): void => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
