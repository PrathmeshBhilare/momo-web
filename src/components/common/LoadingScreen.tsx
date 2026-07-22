import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-main"
        >
          <div className="relative">
            {/* Mascot Placeholder */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/20 flex items-center justify-center mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              
              {/* Steam animations */}
              <motion.div
                animate={{ y: [-10, -40], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute top-1/4 left-1/3 w-2 h-8 bg-white/40 blur-md rounded-full"
              />
              <motion.div
                animate={{ y: [-10, -35], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.5 }}
                className="absolute top-1/4 left-2/3 w-3 h-10 bg-white/40 blur-md rounded-full"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl md:text-3xl text-primary mb-2">Panu's Momos</h2>
            <p className="text-text-muted font-medium tracking-wide">Preparing Fresh Momos...</p>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
