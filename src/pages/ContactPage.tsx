import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Phone, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Have questions? We're here to help you on your learning journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our support team is available 24/7 to assist you. Whether it's a technical query or a curriculum suggestion, we're all ears.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Me</p>
                  <p className="text-lg font-medium text-white">ashmit@conceptly.ai</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://wa.me/919205323182', '_blank')}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp Me</p>
                  <p className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">+91 9205323182</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/ashmit-naik-a0a0b71b1', '_blank')}>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <ExternalLink className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn Profile</p>
                  <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">Connect with Ashmit</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-400">Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Doe" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell us how we can help..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-inner resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] transition-all flex items-center justify-center gap-2 group active:scale-95"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
