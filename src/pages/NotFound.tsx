
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple/5 to-teal/5">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="button-primary inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
