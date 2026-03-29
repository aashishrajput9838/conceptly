import React from 'react';
import { History } from 'lucide-react';

interface Props {
  topics: string[];
  onSelect: (topic: string) => void;
}

export const RecentTopics: React.FC<Props> = ({ topics, onSelect }) => {
  if (topics.length === 0) return null;

  return (
    <div className="flex items-center gap-3 mt-4 flex-wrap justify-center">
      <History className="w-4 h-4 text-gray-500" />
      <span className="text-xs text-gray-500 font-medium">Recent:</span>
      {topics.map((topic, i) => (
        <button
          key={i}
          onClick={() => onSelect(topic)}
          className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-full border border-white/10 transition-colors shadow-sm"
        >
          {topic}
        </button>
      ))}
    </div>
  );
};
