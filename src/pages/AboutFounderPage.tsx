import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Target, Sparkles, ExternalLink, Phone, Mail } from 'lucide-react';

const AboutFounderPage = () => {
  const missionCards = [
    {
      title: "The Mission",
      icon: <Target className="w-5 h-5 text-purple-400" />,
      text: "Helping students understand concepts better through AI-powered education."
    },
    {
      title: "The Vision",
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      text: "Creating a world where quality, personalized education is accessible to everyone at the touch of a button."
    },
    {
      title: "The Spark",
      icon: <Sparkles className="w-5 h-5 text-rose-400" />,
      text: "Born from the need to simplify complex subjects and build real understanding, not just memorization."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Founder</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The visionary behind Conceptly's AI-driven learning revolution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Ashmit Naik</h2>
              <p className="text-purple-400 text-xl font-medium italic">Creator of Conceptly</p>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              Ashmit Naik is the creator of Conceptly, an AI-powered personalized learning platform designed to help students learn smarter, track progress, and build stronger concepts.
            </p>

            <div className="grid gap-6">
              {missionCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl border border-white/10 flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center h-fit">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{card.title}</h4>
                    <p className="text-gray-400 leading-snug">{card.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/ashmit-naik-a0a0b71b1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,119,181,0.3)] transition-all active:scale-95"
              >
                <ExternalLink className="w-5 h-5" /> LinkedIn
              </a>
              <a 
                href="tel:9205323182"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all active:scale-95"
              >
                <Phone className="w-5 h-5" /> Contact Ashmit
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-4 rounded-[40px] border border-white/10 relative z-10">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-[30px] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <Brain className="w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-white font-bold text-2xl mb-1">Conceptly Creator</p>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Built with passion for learners</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-6">Join the Revolution</h3>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          The mission of Conceptly is to break the barriers of traditional education using advanced AI. Our journey has just begun, and we're excited to have you with us.
        </p>
        <a 
          href="mailto:ashmit@conceptly.ai" 
          className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors"
        >
          <Mail className="w-5 h-5" /> ashmit@conceptly.ai
        </a>
      </div>
    </div>
  );
};

export default AboutFounderPage;
