import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[200px] pointer-events-none rounded-[100%]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-[100%]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.15)] relative overflow-hidden"
        >
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">AI Learning Journey</span> Today
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have already transformed their academic performance using Conceptly's next-level AI platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-5 rounded-full font-bold shadow-[0_4px_30px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2 text-lg"
              >
                Get Started Free
              </motion.button>
              <span className="text-gray-500 text-sm mt-4 sm:mt-0 sm:ml-4">No credit card required.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
