import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { Sparkles, Brain, Zap, Target, BarChart3, Clock } from 'lucide-react';

const FeaturesPage = () => {
  const details = [
    {
      title: "AI Concept Explainer",
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      description: "Break down any complex topic into bite-sized, understandable chunks. Our AI adapts to your current knowledge level.",
      benefits: ["Simplifies jargon", "Step-by-step logic", "Interactive examples"]
    },
    {
      title: "Personalized Roadmaps",
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      description: "Stop wandering. Get a clear, visual path from 'Beginner' to 'Master' for any skill or subject you choose.",
      benefits: ["Visual flowcharts", "Progress tracking", "Estimated timeframes"]
    },
    {
      title: "Smart Quiz Generator",
      icon: <Zap className="w-6 h-6 text-rose-400" />,
      description: "Test your knowledge with quizzes that adapt to your performance. Identify and bridge your learning gaps instantly.",
      benefits: ["Dynamic difficulty", "Instant feedback", "Performance analytics"]
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/5 blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Platform Capabilities</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Master Any Subject</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the powerful AI-driven tools designed to make your learning journey faster, smarter, and more personalized.
          </p>
        </div>
      </div>

      <FeaturesSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{item.description}</p>
              
              <ul className="space-y-3 w-full text-left">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
