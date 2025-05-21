
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface SpaceshipEffectsProps {
  className?: string;
}

export function SpaceshipEffects({ className }: SpaceshipEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const stars: HTMLDivElement[] = [];
    
    // Create random stars
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size
      const size = Math.random() * 2.5 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random depth for 3D effect
      star.style.transform = `translateZ(${Math.random() * 400 - 100}px)`;
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 4}s`;
      
      // Add glow effect with our gaming colors
      const colorIndex = Math.floor(Math.random() * 3);
      const colors = ['#8B5CF6', '#F97316', '#A78BFA'];
      star.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px ${colors[colorIndex]}`;
      
      container.appendChild(star);
      stars.push(star);
    }
    
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div ref={containerRef} className="star-field perspective-1000" />
      
      {/* Flying spaceships */}
      <motion.div 
        className="absolute"
        animate={{
          x: ["calc(-10vw)", "calc(110vw)"],
          y: ["calc(20vh)", "calc(50vh)", "calc(10vh)"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Spaceship scale={0.7} color="#F97316" />
      </motion.div>
      
      <motion.div 
        className="absolute"
        animate={{
          x: ["calc(110vw)", "calc(-10vw)"],
          y: ["calc(70vh)", "calc(30vh)", "calc(60vh)"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      >
        <Spaceship scale={0.5} color="#A78BFA" flipX />
      </motion.div>
      
      <motion.div 
        className="absolute"
        animate={{
          x: ["calc(-5vw)", "calc(105vw)"],
          y: ["calc(40vh)", "calc(60vh)", "calc(30vh)"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      >
        <Spaceship scale={0.4} color="#8B5CF6" />
      </motion.div>
      
      <motion.div 
        className="absolute"
        animate={{
          x: ["calc(105vw)", "calc(-5vw)"],
          y: ["calc(15vh)", "calc(45vh)", "calc(20vh)"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 8,
        }}
      >
        <Spaceship scale={0.6} color="#F97316" flipX />
      </motion.div>
    </div>
  );
}

interface SpaceshipProps {
  scale?: number;
  color?: string;
  flipX?: boolean;
}

function Spaceship({ scale = 1, color = "#F97316", flipX = false }: SpaceshipProps) {
  return (
    <motion.div 
      className="relative"
      style={{
        transform: `scale(${scale}) ${flipX ? 'scaleX(-1)' : ''}`,
      }}
      whileInView={{
        filter: ["drop-shadow(0 0 5px rgba(255,255,255,0.5))", "drop-shadow(0 0 15px rgba(255,255,255,0.8))", "drop-shadow(0 0 5px rgba(255,255,255,0.5))"]
      }}
      transition={{
        filter: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {/* Spaceship body */}
      <div 
        className="w-24 h-12 rounded-full relative"
        style={{ background: color }}
      >
        <motion.div 
          className="absolute -left-3 top-3 w-5 h-5 rounded-l-full engine-flame"
          style={{ background: '#FFD580' }}
          animate={{
            boxShadow: ["0 0 5px 1px #F97316", "0 0 15px 3px #F97316", "0 0 5px 1px #F97316"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div 
          className="absolute top-1 left-5 w-14 h-10 rounded-t-full"
          style={{ background: '#8B5CF6' }}
        />
        <div 
          className="absolute top-3 left-16 w-10 h-5 rounded-r-full" 
          style={{ background: color }}
        />
        
        {/* Window */}
        <motion.div 
          className="absolute top-3 left-9 w-5 h-5 rounded-full bg-[#FFD580] opacity-80"
          animate={{
            opacity: [0.7, 0.9, 0.7],
            boxShadow: ["0 0 5px 1px #FFD580", "0 0 10px 2px #FFD580", "0 0 5px 1px #FFD580"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Light trail */}
        <motion.div
          className="absolute top-6 -left-20 h-1 w-20 opacity-60"
          style={{
            background: `linear-gradient(to left, ${color}, transparent)`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            width: ['60px', '100px', '60px'],
            boxShadow: [
              `0 0 5px 1px ${color}`, 
              `0 0 15px 3px ${color}`, 
              `0 0 5px 1px ${color}`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
