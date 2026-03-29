import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Globe, Mail, MessageCircle, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Subjects', path: '/subjects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-white/10 pt-16 pb-8 relative z-10 w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-purple-500/10 blur-[100px] rounded-full point-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Conceptly
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              The AI-powered education platform designed to help students understand complex concepts faster through personalized learning.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                <Globe className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Conceptly. <span className="text-purple-400/80">Built by Ashmit Naik.</span>
          </div>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            Created with love ❤️ by Ashmit Naik
          </p>
        </div>
      </div>
    </footer>
  );
};

// Internal Import helper
// Redundant imports removed to fix build error
