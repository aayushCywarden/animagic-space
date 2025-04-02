
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  // Don't show navbar on chat page
  if (location.pathname === '/chat') return null;
  
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass-card flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/src/assets/logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold gradient-text">ANIMA</span>
      </Link>
      
      <div className="flex gap-4">
        {!isLoginPage && !isRegisterPage ? (
          <>
            <Link to="/login" className="px-4 py-2 rounded-full border border-purple text-purple hover:bg-purple hover:text-white transition-all">
              Login
            </Link>
            <Link to="/register" className="button-primary">
              Register
            </Link>
          </>
        ) : (
          <Link to="/" className="px-4 py-2 rounded-full border border-purple text-purple hover:bg-purple hover:text-white transition-all">
            Home
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
