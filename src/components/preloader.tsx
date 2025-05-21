
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newValue = prev + Math.random() * 15;
        return newValue > 100 ? 100 : newValue;
      });
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          style={{ 
            background: `radial-gradient(ellipse at center, #8B5CF6 0%, #1E0B41 100%)`,
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Space themed background elements */}
            <div className="absolute inset-0 w-screen h-screen">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: Math.random() * 0.5 + 0.3,
                    scale: Math.random() * 0.3 + 0.1,
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() * 3 + 1}px ${
                      ["#F97316", "#8B5CF6", "#A78BFA"][Math.floor(Math.random() * 3)]
                    }`,
                  }}
                />
              ))}
            </div>

            {/* Animated spaceship */}
            <motion.div
              className="relative mb-8"
              animate={{
                y: [-10, 10, -10],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div 
                className="w-28 h-16 relative"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: 1, 
                  rotate: [0, 5, 0, -5, 0],
                  filter: ["drop-shadow(0 0 8px #8B5CF6)", "drop-shadow(0 0 15px #8B5CF6)", "drop-shadow(0 0 8px #8B5CF6)"]
                }}
                transition={{ 
                  scale: { duration: 0.5 },
                  rotate: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Spaceship body */}
                <div className="absolute top-4 left-0 w-22 h-8 bg-[#F97316] rounded-full" />
                <div className="absolute top-2 left-4 w-14 h-12 bg-[#8B5CF6] rounded-t-full" />
                <div className="absolute top-6 left-18 w-8 h-4 bg-[#F97316] rounded-r-full" />
                
                {/* Engine flames */}
                <motion.div 
                  className="absolute -left-4 top-6 w-6 h-3 rounded-l-full"
                  style={{ background: '#FFD580' }}
                  animate={{ 
                    width: ['24px', '14px', '24px'],
                    opacity: [0.8, 1, 0.8],
                    boxShadow: [
                      "0 0 10px 2px #F97316", 
                      "0 0 20px 4px #F97316", 
                      "0 0 10px 2px #F97316"
                    ]
                  }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
            
            {/* Loading bar */}
            <div className="w-64 h-4 bg-[#1E0B41] rounded-full overflow-hidden mb-4 relative border-2 border-[#A78BFA]">
              <motion.div 
                className="h-full"
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #F97316, #8B5CF6)",
                  backgroundSize: "200% 200%",
                }}
                initial={{ width: "0%", backgroundPosition: "0% 50%" }}
                animate={{ 
                  width: `${loadingProgress}%`,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  width: { duration: 0.3 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
              />
              <motion.div 
                className="absolute inset-0 w-full h-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  backgroundSize: "200% 100%"
                }}
                animate={{
                  backgroundPosition: ["100% 0%", "-100% 0%"]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            
            {/* Loading percentage */}
            <motion.p 
              className="text-white font-bold text-xl mb-1 font-heading"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                textShadow: [
                  "0 0 5px rgba(139,92,246,0.5)", 
                  "0 0 10px rgba(139,92,246,0.8)", 
                  "0 0 5px rgba(139,92,246,0.5)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.floor(loadingProgress)}%
            </motion.p>
            
            {/* Logo text */}
            <motion.h2 
              className="text-2xl font-bold font-heading tracking-wider"
              animate={{
                opacity: [0.7, 1, 0.7],
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(139,92,246,0.5)",
                  "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(139,92,246,0.7)",
                  "0 0 5px rgba(255,255,255,0.5), 0 0 10px rgba(139,92,246,0.5)"
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-[#F97316]">Aura</span>{" "}
              <span className="text-white">Edge Studios</span>
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
