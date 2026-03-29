import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquareMore, Send, Bot, User, Clock } from 'lucide-react';
import { ChatDemoSection } from '../components/sections/ChatDemoSection';

const DoubtSolverPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-12 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <MessageSquareMore className="w-6 h-6 text-emerald-400" />
            </div>
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-emerald-400 cursor-pointer transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-400 font-medium">Doubt Solver</span>
            </nav>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Instant AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Doubt Solver</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl"
          >
            Never get stuck again. Ask your questions 24/7 and receive instant, deep-dive explanations from our AI tutor.
          </motion.p>
        </div>
      </div>
      <ChatDemoSection />
    </div>
  );
};

export default DoubtSolverPage;
