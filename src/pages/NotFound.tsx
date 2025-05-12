import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { AnimatedLines } from "@/components/AnimatedLines";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <AnimatedLines />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div 
            className="text-center max-w-md px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-aura-orange to-aura-orange/80"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              404
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Oops! The page you're looking for doesn't exist or has been moved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/">
                <Button className="bg-aura-orange hover:bg-aura-orange/90 text-white transition-all duration-300 hover:scale-105">
                  Return to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
