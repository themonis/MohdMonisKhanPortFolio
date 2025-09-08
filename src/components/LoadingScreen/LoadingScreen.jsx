import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show loading screen for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-white text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Name */}
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Mohd Monis Khan
            </motion.h1>
            
            {/* Loading Bar */}
            <motion.div
              className="w-20 h-1 bg-white/30 rounded-full mx-auto mb-4"
            >
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Loading Text */}
            <motion.p
              className="text-lg opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading Portfolio...
            </motion.p>
          </motion.div>
          
          {/* Floating Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
