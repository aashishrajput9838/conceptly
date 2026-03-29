import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Map as MapIcon, 
  Clock, 
  BarChart, 
  Circle, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  Route
} from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import type { RoadmapMilestone } from '../../context/AppContext';

export const LearningPathSection = () => {
  const { 
    generateRoadmap, 
    milestones, 
    isGeneratingRoadmap, 
    roadmapGoal,
    setRoadmapGoal 
  } = useAppContext();
  
  const [inputValue, setInputValue] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      generateRoadmap(inputValue);
    }
  };

  // Example topic chips
  const examples = ["Machine Learning", "Web Development", "Data Science", "UI/UX Design"];

  return (
    <section id="learning-path" className="py-24 bg-[#0b1121] relative overflow-hidden scroll-mt-20">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-medium mb-6"
          >
            <Route className="w-4 h-4" />
            <span>New: AI-Powered Learning Roadmaps</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Your Personalized <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Learning Path</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-10"
          >
            Tell us what you want to achieve, and our AI will build a custom, step-by-step roadmap tailored to your specific goals.
          </motion.p>

          {/* Search Input */}
          <motion.form 
            onSubmit={handleGenerate}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto flex gap-3"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ex: Learn React in 1 month, Master Python, etc."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-lg"
              />
            </div>
            <button 
              type="submit"
              disabled={isGeneratingRoadmap || !inputValue.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2"
            >
              {isGeneratingRoadmap ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              {isGeneratingRoadmap ? 'Creating Path...' : 'Build Path'}
            </button>
          </motion.form>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => {
                  setInputValue(ex);
                  generateRoadmap(ex);
                }}
                className="text-sm text-gray-500 hover:text-purple-400 border border-white/5 hover:border-purple-500/30 px-4 py-1.5 rounded-full transition-all bg-white/5"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Display */}
        <div className="relative mt-20 min-h-[400px]">
          <AnimatePresence mode="wait">
            {isGeneratingRoadmap ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="w-24 h-24 relative mb-6">
                  <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full" />
                  <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  <MapIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Architecting your journey...</h3>
                <p className="text-gray-500">Mapping out the optimal curriculum for {inputValue || roadmapGoal}</p>
              </motion.div>
            ) : milestones.length > 0 ? (
              <motion.div
                key="roadmap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                {/* The vertical connector line */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-20 hidden md:block" />

                <div className="space-y-12 md:space-y-2 relative">
                  {milestones.map((milestone, index) => (
                    <MilestoneCard 
                      key={milestone.id} 
                      milestone={milestone} 
                      index={index} 
                      isLast={index === milestones.length - 1} 
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-500">
                  <MapIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">No roadmap generated yet</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Type your goal above or click one of the examples to see your personalized learning flowchart.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const MilestoneCard = ({ milestone, index, isLast }: { milestone: RoadmapMilestone, index: number, isLast: boolean }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center justify-between md:mb-20 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Visual Dot on the line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={`w-8 h-8 rounded-full border-4 border-[#0b1121] shadow-lg flex items-center justify-center ${
            milestone.status === 'completed' ? 'bg-emerald-500' : 
            milestone.status === 'current' ? 'bg-purple-500' : 'bg-gray-700'
          }`}
        >
          {milestone.status === 'completed' ? (
            <CheckCircle2 className="w-4 h-4 text-white" />
          ) : milestone.status === 'current' ? (
            <Circle className="w-2 h-2 text-white fill-white animate-pulse" />
          ) : (
            <Lock className="w-3 h-3 text-gray-400" />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={`w-full md:w-[45%] glass p-6 rounded-2xl border border-white/5 relative group cursor-default ${
          milestone.status === 'current' ? 'ring-2 ring-purple-500/30 bg-purple-500/5' : ''
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-md">
            STAGE {index + 1}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {milestone.duration}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 ml-auto">
            <BarChart className="w-3 h-3" />
            {milestone.difficulty}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {milestone.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {milestone.description}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
           <button className={`text-sm font-semibold flex items-center gap-2 transition-colors ${
             milestone.status === 'locked' ? 'text-gray-600 cursor-not-allowed' : 'text-purple-400 hover:text-purple-300'
           }`}>
             {milestone.status === 'completed' ? 'Review content' : 
              milestone.status === 'current' ? 'Start this module' : 'Module locked'}
             {milestone.status !== 'locked' && <ArrowRight className="w-4 h-4" />}
           </button>
           
           {milestone.status === 'current' && (
             <span className="flex h-2 w-2 relative">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
             </span>
           )}
        </div>
      </motion.div>

      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};
