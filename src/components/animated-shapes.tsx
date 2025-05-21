
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedShapesProps {
  className?: string;
}

export function AnimatedShapes({ className }: AnimatedShapesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Original shapes with enhanced animations */}
      <motion.div 
        className="shape-animation left-[5%] top-[10%] w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[80%] top-[20%] w-40 h-40 bg-accent/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[20%] top-[70%] w-48 h-48 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[70%] top-[60%] w-28 h-28 bg-accent/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* New gradient shapes */}
      <motion.div 
        className="shape-animation left-[40%] top-[30%] w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[15%] top-[40%] w-36 h-36 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[65%] top-[15%] w-48 h-48 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-full blur-2xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="shape-animation left-[45%] top-[80%] w-56 h-56 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-2xl opacity-80"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -10, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* SVG blob shapes */}
      <motion.div className="shape-animation left-[15%] top-[25%] w-24 h-24">
        <motion.svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg" 
          className="fill-primary/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <path d="M43.5,-64.3C53.8,-56.5,58.1,-39.8,62.8,-24.7C67.6,-9.6,72.8,3.9,71.2,17.1C69.5,30.3,61,43.3,49.4,55.5C37.9,67.7,23.2,79.2,7,79.6C-9.3,80,-27.2,69.3,-42.1,57.1C-56.9,44.9,-68.8,31.2,-74.6,14.7C-80.3,-1.9,-79.9,-21.3,-71.2,-36.4C-62.5,-51.6,-45.6,-62.5,-29.5,-67.7C-13.5,-73,-6.7,-72.6,6.3,-82C19.3,-91.5,38.7,-110.7,46,-108.7C53.3,-106.7,48.5,-83.5,43.5,-64.3Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>
      
      <motion.div className="shape-animation left-[80%] top-[50%] w-32 h-32">
        <motion.svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg" 
          className="fill-accent/10"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <path d="M44.5,-76.3C58.3,-68.9,70.5,-57.1,77.8,-42.7C85.1,-28.2,87.4,-11,86.4,5.9C85.3,22.7,80.9,39.1,71.6,51.8C62.3,64.5,48.1,73.5,33.1,77.7C18.1,82,3.2,81.5,-11.4,78.4C-26,75.3,-40.5,69.6,-51.6,60C-62.8,50.3,-70.7,36.7,-75.9,21.9C-81.1,7.1,-83.5,-8.9,-79.8,-23.3C-76,-37.7,-66,-50.4,-53.6,-58.4C-41.1,-66.5,-26.3,-69.7,-11.5,-72.7C3.3,-75.6,16.7,-78.3,29.2,-78.5C41.8,-78.7,53.4,-76.5,44.5,-76.3Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>

      {/* New SVG blob shapes with gradient fills */}
      <motion.div className="shape-animation left-[30%] top-[60%] w-28 h-28">
        <motion.svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 180, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient id="blob-gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary) / 0.2)" />
              <stop offset="100%" stopColor="hsl(var(--accent) / 0.2)" />
            </linearGradient>
          </defs>
          <path fill="url(#blob-gradient1)" d="M39.2,-65.8C52.9,-60.3,67.5,-52.8,75.2,-40.6C83,-28.5,83.9,-11.8,80.5,3.4C77.1,18.5,69.4,32,59.6,43.3C49.8,54.6,38,63.7,24.4,69.9C10.8,76.1,-4.7,79.5,-19.2,76.4C-33.8,73.3,-47.4,63.8,-57.8,51.5C-68.2,39.3,-75.6,24.4,-76.8,8.8C-78,-6.8,-73,-23,-64.4,-35.8C-55.8,-48.6,-43.7,-58,-30.8,-64.7C-17.9,-71.3,-4.5,-75.3,7.4,-71.9C19.2,-68.5,25.4,-71.3,39.2,-65.8Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>

      <motion.div className="shape-animation left-[60%] top-[30%] w-36 h-36">
        <motion.svg 
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, -120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient id="blob-gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent) / 0.2)" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.2)" />
            </linearGradient>
          </defs>
          <path fill="url(#blob-gradient2)" d="M51.9,-88.3C67.6,-80.2,80.9,-66.3,86.8,-50C92.8,-33.7,91.4,-14.9,87.1,2.5C82.8,19.8,75.5,35.7,65.1,49.2C54.7,62.7,41.1,73.9,25.6,80.8C10.1,87.8,-7.4,90.6,-22.9,85.7C-38.4,80.9,-52,68.3,-64.1,54.6C-76.3,40.9,-87.1,26,-91.6,9C-96.1,-8.1,-94.2,-27.2,-85.1,-42.2C-76,-57.1,-59.7,-67.8,-43.5,-75.9C-27.3,-84,-13.6,-89.4,2.1,-93C17.9,-96.6,35.8,-98.3,51.9,-88.3Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
