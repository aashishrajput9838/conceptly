import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Target, Sparkles, ExternalLink, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FounderSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0f172a]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Meet the Visionary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            The Mind Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Conceptly</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Animated Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-cyan-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Founder Visual */}
            <div className="relative group/avatar">
              <div className="w-full aspect-square rounded-[32px] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover/avatar:scale-105 transition-transform duration-500">
                  <Brain className="w-24 h-24 text-white/50" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full glass border border-white/20 text-white font-bold text-sm">
                    Ashmit Naik
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full group-hover/avatar:bg-purple-500/30 transition-colors" />
            </div>

            {/* Founder Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Ashmit Naik</h3>
                <p className="text-purple-400 font-medium">Founder of Conceptly</p>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                "Ashmit Naik is the creator of Conceptly, an AI-powered personalized learning platform designed to help students learn smarter, track progress, and build stronger concepts."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <a 
                  href="mailto:ashmitnaik@example.com" 
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all active:scale-95 group"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Ashmit</span>
                </a>

                <a 
                  href="https://wa.me/919205323182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Me</span>
                </a>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <Link 
                  to="/about-founder" 
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors flex items-center gap-2 group"
                >
                  View Founder Story
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex gap-2">
                  <a href="https://wa.me/919205323182" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-50 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
