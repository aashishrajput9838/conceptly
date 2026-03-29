import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      description: "Basic AI tutoring and limited quiz generation.",
      features: ["5 AI Explanations/day", "2 Generated Quizzes/day", "Basic Dashboard Access"],
      icon: <Check className="w-5 h-5 text-gray-400" />,
      highlighted: false,
    },
    {
      name: "Pro Plan",
      price: "299",
      description: "Full access to advanced AI models and infinite learning.",
      features: ["Unlimited AI Explanations", "Unlimited Quiz Generaton", "Adaptive Difficulty", "Full Performance Tracking"],
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      highlighted: true,
    },
    {
      name: "Premium Plan",
      price: "599",
      description: "1-on-1 human tutoring integrated with AI.",
      features: ["Everything in Pro", "Human Tutor Access", "Custom Career Roadmaps", "Priority Support"],
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      highlighted: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Invest in your education intelligently without breaking the bank.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02 }}
              className={`p-8 rounded-3xl relative transition-all ${
                plan.highlighted 
                ? "bg-gradient-to-br from-purple-900/40 to-[#0f172a] border border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.2)] md:-translate-y-4" 
                : "glass border border-white/5 hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-purple-500/20' : 'bg-white/5'}`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              </div>
              
              <div className="mb-6 border-b border-white/10 pb-6">
                <p className="text-gray-400 min-h-[48px] text-sm mb-4 leading-relaxed">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex flex-row items-center gap-3 text-gray-300">
                     <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                     {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2 ${
                  plan.highlighted 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_4px_25px_rgba(139,92,246,0.5)]" 
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
