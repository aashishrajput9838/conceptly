import React from 'react';
import { motion } from 'framer-motion';
import type { DifficultyLevel } from '../../lib/mockExplanations';

interface Props {
  selectedDifficulty: DifficultyLevel;
  onSelectDifficulty: (level: DifficultyLevel) => void;
}

const levels: DifficultyLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

export const DifficultySelector: React.FC<Props> = ({ selectedDifficulty, onSelectDifficulty }) => {
  return (
    <div className="flex gap-2 bg-black/20 p-1.5 rounded-xl border border-white/5 mx-auto max-w-lg mb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-xl pointer-events-none" />
      {levels.map((level) => {
        const isActive = selectedDifficulty === level;
        return (
          <button
            key={level}
            onClick={() => onSelectDifficulty(level)}
            className={`relative flex-1 py-3 px-4 text-sm font-semibold rounded-lg transition-colors z-10 ${
              isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="difficulty-indicator"
                className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-white/10"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{level}</span>
          </button>
        );
      })}
    </div>
  );
};
