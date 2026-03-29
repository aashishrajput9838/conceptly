import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Zap, Target, Link } from 'lucide-react';

const AdaptiveLearningPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-12 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-cyan-400 cursor-pointer transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cyan-400 font-medium">Adaptive Difficulty</span>
            </nav>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Adaptive <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Difficulty Engine</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl"
          >
            Our AI algorithms analyze your performance in real-time to adjust the difficulty of your learning experience, ensuring you stay in the perfect flow state.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Dynamic Scaling",
              description: "Questions get harder as you master concepts and simpler if you need more reinforcement."
            },
            {
              icon: <Target className="w-8 h-8 text-rose-400" />,
              title: "Precision Targeting",
              description: "Identifies your exact knowledge gaps and focuses on them to maximize efficiency."
            },
            {
              icon: <Brain className="w-8 h-8 text-purple-400" />,
              title: "Cognitive Load Balancing",
              description: "Prevents burnout by managing the complexity of information presented during study sessions."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdaptiveLearningPage;
