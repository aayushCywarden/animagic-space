
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isWaitingResponse, setIsWaitingResponse] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      toast.error('Please login to access the chat');
      navigate('/login');
    }
  }, [navigate]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Add an initial welcome message from the AI
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        { 
          id: 1, 
          text: "Hello! I'm ANIMA, your AI assistant. How can I help you today?", 
          sender: 'ai' 
        }
      ]);
    }, 1000);
  }, []);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsWaitingResponse(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "I understand what you're asking. Let me help you with that.",
        "That's an interesting question! Here's what I think...",
        "I can definitely assist you with that request.",
        "Based on the information I have, I'd recommend the following approach...",
        "Great question! Let me provide some insights on this topic."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage = {
        id: Date.now(),
        text: randomResponse,
        sender: 'ai'
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsWaitingResponse(false);
    }, 1500);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      toast.success('Voice recording stopped');
      
      // Simulate processing the voice input
      setTimeout(() => {
        const voiceText = "This is a simulated voice message transcription.";
        setInput(voiceText);
      }, 1000);
    } else {
      // Start recording
      setIsRecording(true);
      toast.info('Voice recording started... Speak now');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/login');
  };
  
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple/5 to-teal/5">
      {/* Header */}
      <header className="glass-card p-4 flex justify-between items-center z-10">
        <div className="flex items-center">
          <span className="text-xl font-bold gradient-text">ANIMA</span>
        </div>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-sm rounded-full border border-purple text-purple hover:bg-purple hover:text-white transition-all"
        >
          Logout
        </button>
      </header>
      
      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                  message.sender === 'user' 
                    ? 'bg-purple text-white rounded-tr-none' 
                    : 'glass-card rounded-tl-none'
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isWaitingResponse && (
          <motion.div 
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-none flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="p-4 glass-card m-4 rounded-2xl">
        <div className="relative flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="w-full px-4 py-3 pr-24 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple/50 bg-white/50 resize-none max-h-32"
            rows="1"
          />
          <div className="absolute right-2 flex space-x-2">
            <button
              onClick={toggleRecording}
              className={`p-2.5 rounded-full transition-all ${
                isRecording 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-gray-100 text-gray-600 hover:bg-purple/10'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() && !isRecording}
              className="p-2.5 rounded-full bg-purple text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 3 3 9-3 9 19-9Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
