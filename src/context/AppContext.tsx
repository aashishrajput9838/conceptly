import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface DashboardStats {
  accuracy: number;
  streak: number;
  hoursStudied: number;
  quizCompletion: number;
}

interface AppContextProps {
  // Dashboard Stats
  stats: DashboardStats;
  updateStatsFromQuiz: (score: number, total: number) => void;
  
  // Navigation State
  activeQuizTopic: string;
  setActiveQuizTopic: (topic: string) => void;
  
  // Chart Data
  weeklyData: { name: string; score: number }[];
  subjectProgress: { name: string; progress: number; color: string }[];
}

const defaultStats = {
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
  const [stats, setStats] = useState<DashboardStats>(defaultStats);
  const [activeQuizTopic, setActiveQuizTopic] = useState('Java Programming');
  const [weeklyData, setWeeklyData] = useState(initialWeeklyData);
  const [subjectProgress, setSubjectProgress] = useState(initialSubjectProgress);

  const updateStatsFromQuiz = (score: number, total: number) => {
    const percentage = Math.round((score / total) * 100);
    
    // Smoothly update stats based on recent performance
    setStats(prev => ({
      ...prev,
      accuracy: Math.round((prev.accuracy * 0.7) + (percentage * 0.3)), // Rolling average
      quizCompletion: Math.min(100, prev.quizCompletion + 5),
      streak: prev.streak + 1,
      hoursStudied: parseFloat((prev.hoursStudied + 0.5).toFixed(1))
    }));

    // Update the chart (fake a new data point or just bump 'Today')
    setWeeklyData(prev => {
      return prev.map((item, index) => {
        if (index === prev.length - 1) {
          return {
            ...item,
            score: Math.min(100, Math.round((item.score + percentage) / 2))
          };
        }
        return item;
      });
    });

    // Update a random subject progress
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
