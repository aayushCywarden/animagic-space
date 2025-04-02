
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-light/20 via-transparent to-pink-light/20"></div>
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-light/20 filter blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, 20, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 15,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal/20 filter blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, -20, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 18,
              ease: "easeInOut" 
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 max-w-5xl">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Meet <span className="gradient-text">ANIMA</span>, Your AI Companion
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience the most advanced AI assistant with a sleek interface and powerful features. Talk or type - ANIMA understands it all.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/register" 
                className="button-primary text-center text-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/login" 
                className="px-6 py-3 bg-white text-purple border border-purple rounded-full hover:bg-purple/10 transition-all shadow-md text-center text-lg"
              >
                Login
              </Link>
            </motion.div>
          </div>
          
          {/* Feature Demo Image/Video */}
          <motion.div 
            className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-white/30"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img 
              src="https://placehold.co/1200x600/e5a1f0/ffffff?text=ANIMA+AI+Demo" 
              alt="AI Demo" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
            <path d="M12 19V5M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Features</span> that stand out
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Voice Interaction", 
                desc: "Talk naturally with our AI using your voice",
                icon: "🎤"
              },
              { 
                title: "Smart Responses", 
                desc: "Get intelligent, contextual answers instantly",
                icon: "💡"
              },
              { 
                title: "Beautiful Design", 
                desc: "Enjoy a visually stunning user experience",
                icon: "✨"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="container mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to experience ANIMA?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users already talking with our AI assistant.</p>
          <Link to="/register" className="button-primary text-lg font-medium inline-block">
            Get Started Free
          </Link>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/src/assets/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold gradient-text">ANIMA</span>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ANIMA AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
