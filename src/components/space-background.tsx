
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const shootingStars: HTMLDivElement[] = [];
    
    // Create shooting stars
    for (let i = 0; i < 15; i++) {
      const star = document.createElement('div');
      star.className = 'absolute h-px bg-white';
      
      // Random size and position
      const width = Math.random() * 150 + 50;
      star.style.width = `${width}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = '0';
      star.style.transform = 'rotate(-45deg)';
      
      // Add to container
      container.appendChild(star);
      shootingStars.push(star);
      
      // Animation function
      const animate = () => {
        // Reset position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Animation
        star.animate([
          { opacity: 0, transform: 'translateX(0) rotate(-45deg)' },
          { opacity: 1, transform: 'translateX(0) rotate(-45deg)', offset: 0.1 },
          { opacity: 1, transform: `translateX(-${width + 20}px) rotate(-45deg)`, offset: 0.9 },
          { opacity: 0, transform: `translateX(-${width + 40}px) rotate(-45deg)` }
        ], {
          duration: 2000 + Math.random() * 4000,
          delay: Math.random() * 10000
        });
        
        // Schedule next animation
        setTimeout(animate, 5000 + Math.random() * 15000);
      };
      
      // Start animation with random delay
      setTimeout(animate, Math.random() * 10000);
    }
    
    return () => {
      shootingStars.forEach(star => star.remove());
    };
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" ref={containerRef}>
      {/* Planets */}
      <motion.div 
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-[#F49BAB] to-[#F49BAB]/40"
        style={{ boxShadow: '0 0 40px rgba(244, 155, 171, 0.4)' }}
        animate={{ 
          x: ['-5vw', '10vw', '-5vw'], 
          y: ['70vh', '65vh', '70vh']
        }}
        transition={{ 
          duration: 120, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-[#7F55B1] to-[#7F55B1]/40"
        style={{ 
          boxShadow: '0 0 50px rgba(127, 85, 177, 0.3)',
          filter: 'blur(1px)'
        }}
        animate={{ 
          x: ['80vw', '70vw', '80vw'], 
          y: ['20vh', '25vh', '20vh']
        }}
        transition={{ 
          duration: 180, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#8B5CF6]/30"
        style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)' }}
        animate={{ 
          x: ['30vw', '35vw', '30vw'], 
          y: ['10vh', '15vh', '10vh']
        }}
        transition={{ 
          duration: 90, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#F97316] to-[#F97316]/40"
        style={{ 
          boxShadow: '0 0 35px rgba(249, 115, 22, 0.4)',
          filter: 'blur(1px)' 
        }}
        animate={{ 
          x: ['50vw', '55vw', '50vw'], 
          y: ['85vh', '80vh', '85vh']
        }}
        transition={{ 
          duration: 150, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
