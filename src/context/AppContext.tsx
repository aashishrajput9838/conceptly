import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { generateGroqRoadmap } from '../lib/groq';
import { 
  saveToStorage, 
  getFromStorage, 
  STORAGE_KEYS
} from '../utils/storage';
import type { 
  DashboardStats, 
  RoadmapMilestone, 
  ChatMessage,
  ExplainerHistory,
  QuizAttempt,
  UserPreferences
} from '../utils/storage';

interface AppContextProps {
  // Dashboard Stats
  stats: DashboardStats;
  updateStatsFromQuiz: (score: number, total: number, difficulty: string) => void;
  
  // Navigation State
  activeQuizTopic: string;
  setActiveQuizTopic: (topic: string) => void;
  
  // Quiz History
  quizHistory: QuizAttempt[];
  
  // Roadmap State
  roadmapGoal: string;
  setRoadmapGoal: (goal: string) => void;
  milestones: RoadmapMilestone[];
  isGeneratingRoadmap: boolean;
  generateRoadmap: (goal: string) => Promise<void>;
  
  // AI Explainer State (Globalized)
  recentTopics: string[];
  setRecentTopics: React.Dispatch<React.SetStateAction<string[]>>;
  lastExplanation: string;
  setLastExplanation: (exp: string) => void;
  explainerDifficulty: string;
  setExplainerDifficulty: (diff: string) => void;

  // AI Chat State (Globalized)
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;

  // User Preferences
  preferences: UserPreferences;
  setPreferences: React.Dispatch<React.SetStateAction<UserPreferences>>;
  
  // Chart Data
  weeklyData: { name: string; score: number }[];
  subjectProgress: { name: string; progress: number; color: string }[];
}

const defaultPreferences: UserPreferences = {
  theme: 'dark',
  defaultDifficulty: 'Medium',
  notificationsEnabled: true
};

const defaultStats: DashboardStats = {
  accuracy: 65,
  streak: 5,
  hoursStudied: 12,
  quizCompletion: 45,
};

const initialWeeklyData = [
  { name: 'Mon', score: 40 },
  { name: 'Tue', score: 55 },
  { name: 'Wed', score: 45 },
  { name: 'Thu', score: 70 },
  { name: 'Fri', score: 65 },
  { name: 'Sat', score: 85 },
  { name: 'Sun', score: 95 },
];

const initialSubjectProgress = [
  { name: 'Mathematics', progress: 85, color: 'from-purple-500 to-purple-400' },
  { name: 'Physics', progress: 60, color: 'from-blue-500 to-blue-400' },
  { name: 'Computer Science', progress: 92, color: 'from-cyan-500 to-cyan-400' },
];

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  // --- Initialize State from Storage ---
  const [stats, setStats] = useState<DashboardStats>(() => 
    getFromStorage(STORAGE_KEYS.STATS, defaultStats)
  );
  const [activeQuizTopic, setActiveQuizTopic] = useState('Java Programming');
  const [weeklyData, setWeeklyData] = useState(() => 
    getFromStorage(STORAGE_KEYS.WEEKLY_DATA, initialWeeklyData)
  );
  const [subjectProgress, setSubjectProgress] = useState(() => 
    getFromStorage(STORAGE_KEYS.SUBJECT_PROGRESS, initialSubjectProgress)
  );
  
  // Roadmap State
  const [roadmapGoal, setRoadmapGoal] = useState(() => 
    getFromStorage(STORAGE_KEYS.ROADMAP, { goal: '', milestones: [] }).goal
  );
  const [milestones, setMilestones] = useState<RoadmapMilestone[]>(() => 
    getFromStorage(STORAGE_KEYS.ROADMAP, { goal: '', milestones: [] }).milestones
  );
  const [isGeneratingRoadmap, setIsGeneratingRoadmap] = useState(false);

  // AI Explainer State (Globalized)
  const [recentTopics, setRecentTopics] = useState<string[]>(() => 
    getFromStorage(STORAGE_KEYS.RECENT_TOPICS, ['Java Inheritance', 'Photosynthesis', 'Recursion'])
  );
  const [lastExplanation, setLastExplanation] = useState<string>(() => 
    getFromStorage(STORAGE_KEYS.EXPLAINER_HISTORY, { explanation: '' }).explanation
  );
  const [explainerDifficulty, setExplainerDifficulty] = useState<string>('Beginner');

  // AI Chat State (Globalized)
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => 
    getFromStorage(STORAGE_KEYS.CHAT_HISTORY, [
      { role: 'assistant', content: "Hello! I'm Conceptly AI. How can I help you today?", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ])
  );

  // Quiz History
  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>(() => 
    getFromStorage(STORAGE_KEYS.QUIZ_HISTORY, [])
  );

  // Preferences
  const [preferences, setPreferences] = useState<UserPreferences>(() => 
    getFromStorage(STORAGE_KEYS.PREFERENCES, defaultPreferences)
  );

  // --- Persistence Sync (Effect Watchers) ---
  
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.STATS, stats);
  }, [stats]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.WEEKLY_DATA, weeklyData);
  }, [weeklyData]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SUBJECT_PROGRESS, subjectProgress);
  }, [subjectProgress]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ROADMAP, { goal: roadmapGoal, milestones });
  }, [roadmapGoal, milestones]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.RECENT_TOPICS, recentTopics);
  }, [recentTopics]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CHAT_HISTORY, chatHistory);
  }, [chatHistory]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.EXPLAINER_HISTORY, { explanation: lastExplanation });
  }, [lastExplanation]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.QUIZ_HISTORY, quizHistory);
  }, [quizHistory]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PREFERENCES, preferences);
  }, [preferences]);

  // --- Methods ---

  const generateRoadmap = useCallback(async (goal: string) => {
    if (!goal.trim()) return;
    setRoadmapGoal(goal);
    setIsGeneratingRoadmap(true);
    try {
      const data = await generateGroqRoadmap(goal);
      if (data && data.milestones) {
        // Set first one to current, others locked
        const formatted = data.milestones.map((m: any, i: number) => ({
          ...m,
          status: i === 0 ? 'current' : 'locked'
        }));
        setMilestones(formatted);
      }
    } catch (error) {
      console.error("Roadmap generation failed:", error);
    } finally {
      setIsGeneratingRoadmap(false);
    }
  }, []);

  const updateStatsFromQuiz = (score: number, total: number, difficulty: string) => {
    const percentage = Math.round((score / total) * 100);
    
    // Add to History
    const newAttempt: QuizAttempt = {
      id: Date.now().toString(),
      topic: activeQuizTopic,
      score,
      total,
      difficulty,
      date: new Date().toISOString()
    };
    setQuizHistory(prev => [newAttempt, ...prev].slice(0, 50)); // Keep last 50

    setStats(prev => ({
      ...prev,
      // Weighted average for accuracy
      accuracy: Math.round((prev.accuracy * 0.7) + (percentage * 0.3)),
      quizCompletion: Math.min(100, prev.quizCompletion + 5),
      streak: prev.streak + 1,
      hoursStudied: parseFloat((prev.hoursStudied + 0.5).toFixed(1))
    }));

    setWeeklyData(prev => prev.map((item, index) => {
      if (index === prev.length - 1) {
        return { ...item, score: Math.min(100, Math.round((item.score + percentage) / 2)) };
      }
      return item;
    }));

    setSubjectProgress(prev => {
      const newData = [...prev];
      if (activeQuizTopic.includes('Math')) newData[0].progress = Math.min(100, newData[0].progress + 5);
      else if (activeQuizTopic.includes('Science') || activeQuizTopic.includes('Physics')) newData[1].progress = Math.min(100, newData[1].progress + 5);
      else newData[2].progress = Math.min(100, newData[2].progress + 5);
      return newData;
    });
  };

  return (
    <AppContext.Provider value={{
      stats,
      updateStatsFromQuiz,
      activeQuizTopic,
      setActiveQuizTopic,
      quizHistory,
      roadmapGoal,
      setRoadmapGoal,
      milestones,
      isGeneratingRoadmap,
      generateRoadmap,
      recentTopics,
      setRecentTopics,
      lastExplanation,
      setLastExplanation,
      explainerDifficulty,
      setExplainerDifficulty,
      chatHistory,
      setChatHistory,
      preferences,
      setPreferences,
      weeklyData,
      subjectProgress
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
