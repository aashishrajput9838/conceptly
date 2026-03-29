import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Explainer', path: '/explainer' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const activeStyle = "text-white bg-white/10";
  const inactiveStyle = "text-gray-400 hover:text-white hover:bg-white/5";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Conceptly
            </span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button 
                onClick={() => navigate('/explore')}
                className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg active:scale-95"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0f172a] border-b border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive ? activeStyle : inactiveStyle}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                navigate('/explore');
              }}
              className="w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
