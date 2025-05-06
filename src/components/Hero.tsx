
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              variants={itemVariants}
            >
              CRAFTING 
              <span className="block text-glow text-aura-orange">DIGITAL</span> 
              <span className="block">EXPERIENCES</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-xl"
              variants={itemVariants}
            >
              Premium digital agency delivering immersive, high-performance web solutions for forward-thinking brands and businesses ready to stand out online.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-secondary/50 backdrop-blur-sm border border-secondary/80 rounded-lg p-6 mt-8"
            >
              <h3 className="text-lg font-display text-aura-orange mb-2">ESTABLISHED 2015</h3>
              <p className="text-muted-foreground">
                With over 200+ successful projects and 150+ satisfied clients worldwide, 
                AuraEdge Studios has been at the forefront of digital innovation for nearly a decade.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-aura-orange">200+</p>
                  <p className="text-xs text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-aura-orange">150+</p>
                  <p className="text-xs text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-aura-orange">15+</p>
                  <p className="text-xs text-muted-foreground">Industry Awards</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="bg-aura-orange hover:bg-aura-orange/90 text-white hover:orange-glow transition-all duration-300 hover:scale-105 font-medium text-base group"
                onClick={() => navigate("/projects")}
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-aura-orange text-aura-orange hover:bg-aura-orange/10 hover:orange-glow transition-all duration-300 hover:scale-105 font-medium text-base"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
          
          <div className="relative">
            <div className="w-full aspect-square rounded-full bg-gradient-to-br from-aura-orange via-aura-orange/20 to-transparent animate-spin-slow opacity-20 blur-3xl absolute"></div>
            <div className="bg-gradient-to-br from-aura-orange/20 via-aura-orange/10 to-transparent backdrop-blur-lg border border-white/5 rounded-2xl p-6 lg:p-8 relative z-10 transform hover:scale-[1.02] transition-all duration-500">
              <div className="animate-morph bg-aura-orange/20 rounded-full w-48 h-48 md:w-72 md:h-72 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-display text-3xl md:text-4xl text-white font-bold tracking-wider text-glow">
                  {/* AURA<br/>EDGE */}
                  <img 
        src="public\AES_PROFILE_LOGO-removebg-preview.png" 
        alt="AuraEdge Logo" 
        className="w-24 h-24 md:w-36 md:h-36 object-contain"
      />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <a href="#testimonials" className="text-muted-foreground hover:text-aura-orange transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5"/>
            <path d="M7 6l5 5 5-5"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
