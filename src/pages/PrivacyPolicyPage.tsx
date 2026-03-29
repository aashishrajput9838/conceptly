import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Data We Collect",
      icon: <Eye className="w-5 h-5 text-purple-400" />,
      content: "We collect information you provide directly to us, such as when you create an account, update your profile, or participate in interactive features of our Services. This includes your name, email address, password, and learning progress data."
    },
    {
      title: "How We Use Data",
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      content: "We use the information we collect to provide, maintain, and improve our services, including to personalize your learning experience and send you technical notices, updates, and security alerts."
    },
    {
      title: "Storage and Security",
      icon: <Lock className="w-5 h-5 text-rose-400" />,
      content: "We use browser-based localStorage for your demo sessions. For authenticated accounts, your data is stored securely using industry-standard encryption protocols. We take reasonable measures to protect your information from loss or misuse."
    },
    {
      title: "Your Choices",
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      content: "You can access, update, or delete your account information at any time by logging into your account settings. You can also clear your browser's local storage to reset your anonymous sessions."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Policy</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Last updated: March 2026. Your privacy is important to us.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
