import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, ShieldCheck, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: <UserCheck className="w-5 h-5 text-purple-400" />,
      content: "By accessing and using our Services, you agree to be bound by these Terms. If you do not agree to all of these Terms, do not use the Services. These terms apply to all visitors, users and others who wish to access or use the Service."
    },
    {
      title: "2. Use of the Services",
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      content: "You are responsible for your use of the Services and for any content you provide, including compliance with applicable laws, rules, and regulations. You should only provide content that you are comfortable sharing with others."
    },
    {
      title: "3. Account Security",
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      content: "You are responsible for safeguarding the credentials you use to access the Services and for any activities or actions under your account. We encourage you to use \"strong\" passwords (passwords that use a combination of upper and lower case letters, numbers and symbols) with your account."
    },
    {
      title: "4. Termination",
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      content: "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Service</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Please read these terms carefully before using our services.
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

export default TermsOfServicePage;
