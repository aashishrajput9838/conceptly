import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Shield } from 'lucide-react';

const CookiePolicyPage = () => {
  const sections = [
    {
      title: "What are Cookies?",
      icon: <Cookie className="w-5 h-5 text-purple-400" />,
      content: "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site."
    },
    {
      title: "How We Use Cookies",
      icon: <Info className="w-5 h-5 text-cyan-400" />,
      content: "We use cookies to enhance your experience, remember your preferences, and help us understand how users interact with our site. This includes essential cookies for authentication and performance cookies for analytics."
    },
    {
      title: "Your Cookie Settings",
      icon: <Settings className="w-5 h-5 text-rose-400" />,
      content: "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit your browser's official support documentation."
    },
    {
      title: "Privacy and Cookies",
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      content: "Cookies alone do not tell us your email address or other personally identifiable information unless you choose to provide this information to us. Once you choose to provide us with personal information, this information may be linked to the data stored in the cookie."
    }
  ];

  return (
    <div className="pb-20">
      <div className="bg-[#0f172a] py-20 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Policy</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Understand how we use cookies to improve your learning journey.
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

export default CookiePolicyPage;
