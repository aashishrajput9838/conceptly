import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, Flame, Clock, Trophy } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

export const DashboardSection = () => {
  const { stats, weeklyData, subjectProgress } = useAppContext();
  const [timeFilter, setTimeFilter] = useState('7d');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth counting animation component
  const AnimatedNumber = ({ value, suffix = '' }: { value: number | string, suffix?: string }) => {
    return (
      <motion.span 
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block"
      >
        {value}{suffix}
      </motion.span>
    );
  };

  return (
    <section id="dashboard" className="py-24 bg-[#0f172a] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Track Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Visualize your growth with granular performance data. Knowing your precise weaknesses is the fastest route to improvement.
          </motion.p>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Accuracy', value: stats.accuracy, suffix: '%', icon: <Target className="w-5 h-5 text-emerald-400" /> },
            { label: 'Learning Streak', value: stats.streak, suffix: ' Days', icon: <Flame className="w-5 h-5 text-orange-400" /> },
            { label: 'Hours Studied', value: stats.hoursStudied, suffix: 'h', icon: <Clock className="w-5 h-5 text-blue-400" /> },
            { label: 'Quiz Completion', value: stats.quizCompletion, suffix: '%', icon: <Trophy className="w-5 h-5 text-purple-400" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5">
                  {stat.icon}
                </div>
                <span className="text-gray-400 font-medium text-sm">{stat.label}</span>
              </div>
              <h4 className="text-3xl font-bold text-white">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </h4>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Weekly Progress Flow</h3>
              <div className="flex bg-white/5 rounded-lg p-1">
                {['7d', '14d', '30d'].map(filter => (
                  <button 
                    key={filter}
                    onClick={() => setTimeFilter(filter)}
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${timeFilter === filter ? 'bg-purple-500/20 text-purple-300' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div style={{ width: '100%', height: '300px', minHeight: '300px' }}>
              {isMounted && (
                <ResponsiveContainer width="100%" height={300} minHeight={300}>
                <AreaChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#4a5568" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#4a5568" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#a78bfa' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" isAnimationActive={true} animationDuration={1000} />
                </AreaChart>
              </ResponsiveContainer>
              )}
            </div>
          </motion.div>

          {/* Subject Progress */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Subject Progress</h3>
              <div className="space-y-6">
                {subjectProgress.map((sub, i) => (
                  <div key={sub.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium text-sm">{sub.name}</span>
                      <motion.span 
                         key={sub.progress}
                         initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                         className="text-gray-400 text-sm"
                      >
                         {sub.progress}%
                      </motion.span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${sub.progress}%` }}
                        transition={{ duration: 1, type: "spring" }}
                        className={`h-full bg-gradient-to-r ${sub.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full mt-8 py-3 rounded-lg border border-purple-500/30 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              View Detailed Analytics
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
