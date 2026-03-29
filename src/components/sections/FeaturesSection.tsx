import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Sparkles, TrendingUp, MessageSquareMore, Activity, Route } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
      title: "AI Concept Explainer",
      description: "Explains any topic from beginner to advanced level, ensuring perfect comprehension."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      title: "Smart Quiz Generator",
      description: "Generates quizzes automatically based on topics to test and reinforce your knowledge."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Adaptive Difficulty",
      description: "Difficulty algorithms adapt dynamically based on student performance in real-time."
    },
    {
      icon: <MessageSquareMore className="w-8 h-8 text-emerald-400" />,
      title: "Doubt Solver",
      description: "Students can ask questions 24/7 and get instant, accurate, interactive answers."
    },
    {
      icon: <Activity className="w-8 h-8 text-rose-400" />,
      title: "Progress Tracking",
      description: "Shows comprehensive performance stats, accuracy metrics, and learning streaks."
    },
    {
      icon: <Route className="w-8 h-8 text-amber-400" />,
      title: "Personalized Learning Path",
      description: "AI creates a bespoke roadmap tailored to your specific strengths and weaknesses."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0f172a] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Powerful AI Tools for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Better Learning</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Everything you need to master new concepts quickly, retain knowledge longer, and crush your academic goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all group border border-white/5"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
