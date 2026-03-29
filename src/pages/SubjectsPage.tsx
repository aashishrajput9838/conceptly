import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SubjectsSection } from '../components/sections/SubjectsSection';
import { Search, Sparkles, Filter, ChevronRight } from 'lucide-react';

const SubjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Learning Library</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-tight"
          >
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Knowledge</span>
          </motion.h1>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for any subject (e.g. Physics, Java...)" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {['All Categories', 'Computer Science', 'Science', 'Mathematics', 'Finance', 'Engineering'].map((cat, idx) => (
            <button key={idx} className="glass px-6 py-2.5 rounded-full text-sm font-medium text-gray-300 border border-white/10 hover:border-cyan-500/50 hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <SubjectsSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass p-12 rounded-[40px] border border-white/10 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Subject missing?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Our AI roadmap generator can handle any custom topic you specify. If you don't see it here, just type it in the roadmap generator!
          </p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2 mx-auto">
            Create Custom Roadmap <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
