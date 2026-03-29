import React from 'react';
import { motion } from 'framer-motion';
import { PricingSection } from '../components/sections/PricingSection';
import { CreditCard } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-12 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
              <CreditCard className="w-6 h-6 text-indigo-400" />
            </div>
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-indigo-400 cursor-pointer transition-colors">Home</span>
              <span>/</span>
              <span className="text-indigo-400 font-medium">Pricing</span>
            </nav>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl"
          >
            Invest in your education intelligently with our AI-powered plans. Affordable solutions for students at every level.
          </motion.p>
        </div>
      </div>
      <PricingSection />
    </div>
  );
};

export default PricingPage;
