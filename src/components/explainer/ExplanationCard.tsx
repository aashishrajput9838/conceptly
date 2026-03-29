import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Volume2, Sparkles, BookOpen } from 'lucide-react';
import type { DifficultyLevel } from '../../lib/mockExplanations';

interface Props {
  topic: string;
  explanation: string;
  difficulty: DifficultyLevel;
  isLoading: boolean;
}

export const ExplanationCard: React.FC<Props> = ({ topic, explanation, difficulty, isLoading }) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(explanation).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(explanation);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  };

  if (!topic && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-gray-500 border border-dashed border-white/10 rounded-2xl bg-[#1e293b]/30">
        <BookOpen className="w-12 h-12 mb-4 opacity-50" />
        <p>Your explanation will appear here once generated.</p>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden bg-[#1e293b]/60">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 relative z-10"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="w-6 h-6 bg-white/10 rounded-full animate-pulse" />
              <div className="h-6 w-1/3 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-11/12 animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-4/5 animate-pulse" />
            <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col h-full"
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl md:text-2xl font-bold text-white capitalize">{topic}</h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {difficulty} Level
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleSpeech}
                  className={`p-2 rounded-lg border transition-all ${
                    isSpeaking 
                    ? 'bg-purple-500/20 border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] animate-pulse' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={isSpeaking ? "Stop Speaking" : "Listen to Explanation"}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={handleCopy}
                  className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 rounded-lg transition-all"
                  title="Copy to Clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                {explanation}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
