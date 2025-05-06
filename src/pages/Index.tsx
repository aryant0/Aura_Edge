import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Testimonials } from "@/components/Testimonials";
import { ServiceCards } from "@/components/ServiceCards";
import { Projects } from "@/components/Projects";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const ContactButtons = () => {
  return (
    <div className="w-full py-12 bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://wa.me/your_whatsapp_number', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button
              className="bg-aura-orange hover:bg-aura-orange/90 text-white hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:your_email@example.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send us an Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              className="fixed inset-0 bg-background flex items-center justify-center z-50"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              key="loading"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="orange-gradient text-white font-display text-2xl md:text-4xl font-bold tracking-widest px-6 py-3 rounded-lg"
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                    scale: [0.95, 1.05, 0.95],
                    filter: ["drop-shadow(0 0 0px #FF7300)", "drop-shadow(0 0 15px #FF7300)", "drop-shadow(0 0 0px #FF7300)"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  AURAEDGESTUDIOS
                </motion.div>
                <motion.div 
                  className="mt-6 bg-aura-orange/20 rounded-full h-1 w-40"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  transition={{ 
                    delay: 0.3,
                    duration: 1.2, 
                    ease: "easeInOut" 
                  }}
                >
                  <motion.div 
                    className="bg-aura-orange h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      delay: 0.3,
                      duration: 1.2, 
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col min-h-screen"
            >
              <AnimatedBackground />
              <Navbar />
              <main className="flex-grow pt-32">
                <Hero />
                <ServiceCards />
                <Projects />
                <Testimonials />
              </main>
              <ContactButtons />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Index;
