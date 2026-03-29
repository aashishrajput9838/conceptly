import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { DifficultySelector } from './DifficultySelector';
import { ExplanationCard } from './ExplanationCard';
import { RecentTopics } from './RecentTopics';
import { mockExplanations, getFallbackExplanation } from '../../lib/mockExplanations';
import type { DifficultyLevel } from '../../lib/mockExplanations';
import { generateGroqExplanation, isGroqEnabled } from '../../lib/groq';

export const AIConceptExplainer = () => {
  const [inputVal, setInputVal] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Beginner');
  const [isGenerating, setIsGenerating] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [recentTopics, setRecentTopics] = useState<string[]>(['Java Inheritance', 'Photosynthesis', 'Recursion']);

  // Handle generation logic wrapper
  const requestExplanation = async (targetTopic: string, targetDiff: DifficultyLevel) => {
    if (!targetTopic.trim()) return;
    
    setIsGenerating(true);
    setTopic(targetTopic);
    
    // Manage recent searches
    setRecentTopics(prev => {
      const filtered = prev.filter(t => t.toLowerCase() !== targetTopic.toLowerCase());
      return [targetTopic, ...filtered].slice(0, 5); // Keep top 5
    });

    try {
      if (!isGroqEnabled) {
        // Fallback to mock if API key is missing
        const normalTopic = targetTopic.toLowerCase().trim();
        const lookup = mockExplanations[normalTopic] || getFallbackExplanation(targetTopic);
        setExplanation(lookup[targetDiff]);
      } else {
        // Real Groq Generation
        const aiResponse = await generateGroqExplanation(targetTopic, targetDiff);
        setExplanation(aiResponse);
      }
    } catch (error) {
      console.error("Explainer Groq Error:", error);
      const normalTopic = targetTopic.toLowerCase().trim();
      const lookup = mockExplanations[normalTopic] || getFallbackExplanation(targetTopic);
      setExplanation(lookup[targetDiff]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    requestExplanation(inputVal, difficulty);
  };

  const handleDifficultyChange = (newDiff: DifficultyLevel) => {
    setDifficulty(newDiff);
    if (topic && !isGenerating) {
      // Regenerate automatically if topic already exists
      requestExplanation(topic, newDiff);
    }
  };

  const clearSession = () => {
    setInputVal('');
    setTopic('');
    setExplanation('');
  };

  return (
    <section id="explainer" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Interactive Explainer Module</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Learn Any Concept With <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Contextual AI</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Controls Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-[2rem] border border-white/5 shadow-2xl relative bg-[#1e293b]/70">
              <h3 className="text-xl font-bold text-white mb-6">Configuration Parameter</h3>
              
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Target Concept</label>
                  <div className="relative flex items-center">
                    <input 
                      type="text"
                      className="w-full bg-black/30 border border-white/10 rounded-xl py-4 pl-4 pr-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      placeholder="e.g. Newton's Second Law"
                      value={inputVal}
                      onChange={e => setInputVal(e.target.value)}
                    />
                    {inputVal && (
                      <button 
                        type="button" 
                        onClick={clearSession} 
                        className="absolute right-3 p-1 rounded-md text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Complexity Target</label>
                  <DifficultySelector 
                    selectedDifficulty={difficulty} 
                    onSelectDifficulty={handleDifficultyChange} 
                  />
                </div>

                <button 
                  type="submit"
                  disabled={!inputVal.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Sparkles className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
                  {isGenerating ? 'Synthesizing Data...' : 'Generate Explanation'}
                </button>
              </form>

              <RecentTopics 
                topics={recentTopics} 
                onSelect={(t) => {
                  setInputVal(t);
                  requestExplanation(t, difficulty);
                }} 
              />
            </div>
          </motion.div>

          {/* Visualization / Output Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:mt-0"
          >
             <ExplanationCard 
                topic={topic}
                explanation={explanation}
                difficulty={difficulty}
                isLoading={isGenerating}
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
