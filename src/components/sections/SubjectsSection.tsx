import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FlaskConical, Code2, Hourglass, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const SubjectsSection = () => {
  const { setActiveQuizTopic, generateRoadmap } = useAppContext();

  const subjects = [
    {
      name: "Mathematics",
      description: "Master algebra, calculus, and geometry.",
      icon: <Calculator className="w-6 h-6 text-purple-400" />,
      topicTarget: "Mathematics"
    },
    {
      name: "Science",
      description: "Explore physics, chemistry, and biology.",
      icon: <FlaskConical className="w-6 h-6 text-cyan-400" />,
      topicTarget: "Physics"
    },
    {
      name: "Programming",
      description: "Learn Python, Java, and Web Dev.",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      topicTarget: "Java Programming"
    },
    {
      name: "History",
      description: "Understand world events and eras.",
      icon: <Hourglass className="w-6 h-6 text-amber-400" />,
      topicTarget: "History"
    },
    {
      name: "English",
      description: "Improve grammar and writing skills.",
      icon: <BookOpen className="w-6 h-6 text-rose-400" />,
      topicTarget: "English"
    },
    {
      name: "Business",
      description: "Discover finance and marketing.",
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      topicTarget: "Business"
    }
  ];

  const handleExplore = (topicTarget: string) => {
    generateRoadmap(topicTarget);
    const roadmapSection = document.getElementById('learning-path');
    if (roadmapSection) {
      roadmapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="subjects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative gradient patches */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Master Any Subject
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Choose from a wide range of interactive, AI-optimized subjects designed to help you excel academically.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors">
              View All Subjects <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group glass border border-white/5 p-6 rounded-2xl hover:bg-white/[0.02] hover:border-purple-500/30 transition-all cursor-pointer"
              onClick={() => handleExplore(subject.topicTarget)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {subject.name}
                </h3>
              </div>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{subject.description}</p>
              <button 
                className="w-full py-2.5 rounded-lg border border-white/10 text-gray-300 font-medium hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-white transition-all text-sm flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                Explore <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
