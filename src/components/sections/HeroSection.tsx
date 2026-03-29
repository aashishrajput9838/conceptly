import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight, BrainCircuit, Play } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0f172a]">
      {/* Animated Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            <BrainCircuit className="w-4 h-4" />
            <span>Conceptly v2.0 is highly advanced</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Learn Smarter <br/>
            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">AI</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Conceptly helps students understand concepts faster with personalized AI guidance, adaptive quizzes, and real-time performance tracking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/explore')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2"
              >
                Start Learning <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/dashboard')}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                Watch Demo <Play className="w-5 h-5" />
              </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="w-full h-[500px] rounded-2xl glass p-4 border border-white/10 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 blur-[50px] rounded-full" />
            
            {/* Mockup Top bar */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="ml-4 w-60 h-6 bg-white/5 rounded-md" />
            </div>

            {/* Mockup Dashboard Body */}
            <div className="grid grid-cols-3 gap-4 h-[90%]">
              <div className="col-span-1 space-y-4">
                <div className="h-24 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/5 p-4">
                  <div className="w-1/2 h-4 bg-white/20 rounded mb-2" />
                  <div className="w-3/4 h-8 bg-white/10 rounded" />
                </div>
                <div className="h-48 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-end">
                   <div className="w-full h-1/2 bg-purple-500/20 rounded" />
                </div>
              </div>
              <div className="col-span-2 space-y-4">
                 <div className="h-40 rounded-lg bg-white/5 border border-white/5 p-6 flex flex-col gap-3">
                   <div className="w-1/4 h-5 bg-white/20 rounded" />
                   <div className="w-full h-3 bg-white/10 rounded mt-auto" />
                   <div className="w-5/6 h-3 bg-white/10 rounded" />
                   <div className="w-4/6 h-3 bg-white/10 rounded" />
                 </div>
                 <div className="h-32 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-white/5 p-4 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-cyan-500/20 blur-[30px]" />
                    <div className="w-1/3 h-5 bg-white/20 rounded mb-4 relative z-10" />
                    <div className="flex gap-2 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                      <div className="flex-1 space-y-2">
                        <div className="w-3/4 h-3 bg-white/20 rounded" />
                        <div className="w-1/2 h-3 bg-white/10 rounded" />
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
