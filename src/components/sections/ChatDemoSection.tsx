import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, BrainCircuit, Sparkles, Send, Loader2 } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { generateGroqChat, isGroqEnabled } from '../../lib/groq';
import type { ChatMessage } from '../../utils/storage';

export const ChatDemoSection = () => {
  const { chatHistory: messages, setChatHistory: setMessages } = useAppContext();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg: ChatMessage = { 
      role: 'user', 
      content: inputValue, 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    };
    const currentMessages = [...messages, userMsg];
    setMessages(currentMessages);
    setInputValue('');
    setIsTyping(true);

    try {
      if (!isGroqEnabled) {
        throw new Error("Groq API Key missing");
      }

      const aiResponse = await generateGroqChat(currentMessages);
      const aiMsg: ChatMessage = { 
        role: 'assistant', 
        content: aiResponse, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Groq Error:", error);
      // Fail gracefully: Use fallback
      let aiFallback = "That's a great question! I'm currently experiencing a connection issue with my local brain (Groq API), but in the real Conceptly platform, I provide deep breakdowns of exactly these kinds of topics.";
      const errorMsg: ChatMessage = { 
        role: 'assistant', 
        content: aiFallback, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="chat" className="py-24 bg-[#0b1121] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Personal AI Tutor</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            Stuck on a problem? Conceptly provides instant, step-by-step explanations tailored to your understanding level. Try asking a question below!
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#0f172a]/90 flex flex-col h-[600px]">
            {/* Header */}
            <div className="border-b border-white/10 p-4 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center p-0.5">
                  <div className="w-full h-full bg-[#0f172a] rounded-full flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Conceptly AI</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Always Online
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-lg" title="Clear Chat" onClick={() => setMessages([])}>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' 
                        ? 'bg-blue-500/20 border-blue-500/50' 
                        : 'bg-purple-500/20 border-purple-500/50'
                    }`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-blue-300" /> : <BrainCircuit className="w-4 h-4 text-purple-300" />}
                    </div>
                    <div className="flex flex-col gap-1 max-w-[80%]">
                      <div className={`p-4 rounded-2xl shadow-lg whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'bg-blue-600/20 border border-blue-500/30 text-white rounded-tr-sm'
                          : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                      }`}>
                        {msg.content.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part)}
                      </div>
                      <span className={`text-[10px] text-gray-500 px-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0">
                      <BrainCircuit className="w-4 h-4 text-purple-300" />
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm max-w-[80%] shadow-lg flex items-center gap-1 h-[56px]">
                      <motion.div className="w-2 h-2 bg-purple-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-2 h-2 bg-purple-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-2 h-2 bg-purple-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white/5 border-t border-white/10 mt-auto">
              <div className="relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..." 
                  className="w-full bg-[#0f172a] border border-white/10 rounded-full py-3 pl-6 pr-12 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-inner"
                  disabled={isTyping}
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isTyping} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTyping ? <Loader2 className="w-4 h-4 text-white animate-spin" /> : <Send className="w-4 h-4 text-white" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
