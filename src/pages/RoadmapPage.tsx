import { Link } from 'react-router-dom';
import { Route as RouteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { LearningPathSection } from '../components/sections/LearningPathSection';

const RoadmapPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-12 border-b border-white/5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <RouteIcon className="w-6 h-6 text-amber-400" />
            </div>
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-amber-400 cursor-pointer transition-colors">Home</Link>
              <span>/</span>
              <span className="text-amber-400 font-medium">AI Roadmap</span>
            </nav>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Personalized AI <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Roadmap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl"
          >
            Generate a custom, step-by-step learning journey for any topic using our advanced AI flowchart engine.
          </motion.p>
        </div>
      </div>
      <LearningPathSection />
    </div>
  );
};

export default RoadmapPage;
