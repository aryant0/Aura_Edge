
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function MovingGridlines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions and handle resize
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation properties
    let animationFrameId: number;
    let time = 0;
    
    // Grid properties
    const gridSpacing = 40;
    const gridOffset = { x: 0, y: 0 };
    const gridMovementSpeed = 0.5;
    
    // Draw the grid
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update grid offset based on time
      gridOffset.x = (gridOffset.x + gridMovementSpeed) % gridSpacing;
      gridOffset.y = (gridOffset.y + gridMovementSpeed * 0.5) % gridSpacing;
      
      // Determine grid color based on theme
      const isDarkTheme = document.documentElement.classList.contains('dark');
      const gridColor = isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
      const accentColor = 'rgba(255, 153, 51, 0.15)'; // Orange accent (primary color)
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      
      // Draw vertical lines
      for (let x = gridOffset.x; x < canvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        
        // Add pulsing effect to some lines
        if (x % (gridSpacing * 4) === 0) {
          const pulseIntensity = (Math.sin(time * 0.002) + 1) * 0.5;
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 1.5 + pulseIntensity;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
          ctx.strokeStyle = gridColor;
          ctx.lineWidth = 1;
        }
      }
      
      // Draw horizontal lines
      for (let y = gridOffset.y; y < canvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
        
        // Add pulsing effect to some lines
        if (y % (gridSpacing * 4) === 0) {
          const pulseIntensity = (Math.sin(time * 0.003 + 1) + 1) * 0.5;
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 1.5 + pulseIntensity;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
          ctx.strokeStyle = gridColor;
          ctx.lineWidth = 1;
        }
      }
      
      // Add intersection glow at special points
      const specialPoints = [];
      
      for (let x = gridOffset.x; x < canvas.width; x += gridSpacing * 4) {
        for (let y = gridOffset.y; y < canvas.height; y += gridSpacing * 4) {
          specialPoints.push({ x, y });
        }
      }
      
      specialPoints.forEach(point => {
        const pulseIntensity = (Math.sin(time * 0.003 + point.x * 0.01) + 1) * 0.5;
        const radius = 3 + pulseIntensity * 2;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkTheme ? 
          `rgba(255, 153, 51, ${0.1 + pulseIntensity * 0.2})` : 
          `rgba(255, 153, 51, ${0.15 + pulseIntensity * 0.25})`;
        ctx.fill();
      });
      
      time++;
      animationFrameId = window.requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3, duration: 0.8 }}
      className="fixed inset-0 pointer-events-none z-0"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ filter: 'blur(0.5px)' }}
      />
    </motion.div>
  );
}
