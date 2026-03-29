import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Engineering Student",
      image: "https://i.pravatar.cc/150?u=aarav",
      text: "Conceptly's AI completely changed how I study for my finals. The adaptive quizzes pinpointed exactly what I didn't know, and the explainer broke down complex data structures perfectly."
    },
    {
      name: "Priya Mehta",
      role: "High School Senior",
      image: "https://i.pravatar.cc/150?u=priya",
      text: "I was struggling with Physics until I started using the Doubt Solver. Having an AI tutor that never gets tired of my questions is incredible. My grades went from a C+ to an A-."
    },
    {
      name: "Rohan Verma",
      role: "Computer Science Major",
      image: "https://i.pravatar.cc/150?u=rohan",
      text: "The personalized learning path is mind-blowing. It mapped out exactly what I needed to learn for my machine learning course. Best educational tool on the market right now."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Loved by <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Students Worldwide</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Don't just take our word for it. Look at what successful learners are saying about Conceptly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl relative border border-white/5 shadow-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-purple-400 fill-purple-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed relative z-10 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-500/50" />
                <div>
                  <h4 className="font-bold text-white block">{t.name}</h4>
                  <span className="text-sm text-gray-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
