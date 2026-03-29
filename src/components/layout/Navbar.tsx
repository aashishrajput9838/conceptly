import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Brain, Menu, X, LogOut, User as UserIcon, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const { user, status, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Explainer', path: '/explore' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const activeStyle = "text-white bg-white/10";
  const inactiveStyle = "text-gray-400 hover:text-white hover:bg-white/5";

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
    setIsUserMenuOpen(false);
  };

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

              {status === 'authenticated' && user ? (
                <div className="relative ml-4">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                      {getInitials(user.fullName)}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 bg-[#1e293b] border border-white/10 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden"
                      >
                        <div className="px-4 py-2 border-b border-white/5 mb-1">
                          <p className="text-xs text-gray-500">Signed in as</p>
                          <p className="text-sm font-medium text-white truncate">{user.fullName}</p>
                        </div>
                        <button 
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2 transition-colors"
                        >
                          <LogOut className="w-4 h-4" /> Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button 
                  onClick={() => navigate('/login')}
                  className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-lg active:scale-95"
                >
                  Get Started
                </button>
              )}
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

            {status === 'authenticated' && user ? (
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-4 py-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                    {getInitials(user.fullName)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{user.fullName}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-red-400 font-medium hover:bg-red-500/10 rounded-xl transition-colors"
                >
                  <LogOut className="w-5 h-5" /> Sign out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  setIsOpen(false);
                  navigate('/login');
                }}
                className="w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold"
              >
                Get Started
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};
