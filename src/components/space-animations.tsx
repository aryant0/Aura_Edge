import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SpaceAnimations = () => {
  const [showAstronaut, setShowAstronaut] = useState(false);

  useEffect(() => {
    // Show astronaut every 30 seconds
    const interval = setInterval(() => {
      setShowAstronaut(true);
      setTimeout(() => setShowAstronaut(false), 5000); // Hide after 5 seconds
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Rockets */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: '20%' }}
        animate={{ x: '120%' }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <img src="/rocket.svg" alt="Rocket" className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ x: -100, y: '60%' }}
        animate={{ x: '120%' }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
      >
        <img src="/rocket.svg" alt="Rocket" className="w-20 h-20" />
      </motion.div>

      {/* Spaceship */}
      <motion.div
        className="absolute"
        initial={{ x: '120%', y: '40%' }}
        animate={{ x: -100 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
      >
        <img src="/spaceship.svg" alt="Spaceship" className="w-24 h-24" />
      </motion.div>

      {/* Astronaut */}
      <AnimatePresence>
        {showAstronaut && (
          <motion.div
            className="absolute right-0 top-1/2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <img src="/astronaut.svg" alt="Astronaut" className="w-32 h-32" />
              <motion.div
                className="absolute -top-16 right-0 bg-white/90 dark:bg-gray-800/90 p-3 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm font-medium">How can I help you?</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 