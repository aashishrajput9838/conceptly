import React from 'react';
import { motion } from 'framer-motion';
import { DashboardSection } from '../components/sections/DashboardSection';
import { BarChart3 } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-12 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
              <BarChart3 className="w-6 h-6 text-rose-400" />
            </div>
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-rose-400 cursor-pointer transition-colors">Home</span>
              <span>/</span>
              <span className="text-rose-400 font-medium">Dashboard</span>
            </nav>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Performance <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-500">Analytics</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl"
          >
            Your comprehensive progress hub. Monitor your learning streaks, quiz scores, and academic growth in one beautiful place.
          </motion.p>
        </div>
      </div>
      <DashboardSection />
    </div>
  );
};

export default DashboardPage;
