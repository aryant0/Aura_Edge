
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function About() {
  const navigate = useNavigate();
  
  const values = [
    "Forward-thinking design",
    "Performance-focused development",
    "Agile methodology",
    "Client collaboration",
    "Innovation-driven solutions",
    "Data-informed decisions"
  ];
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block">
              <p className="text-sm font-medium uppercase tracking-wider text-aura-orange mb-2">About us</p>
              <div className="h-1 w-20 bg-aura-orange rounded"></div>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Pushing the boundaries of digital experience
            </h2>
            
            <p className="text-muted-foreground">
              AURAEDGESTUDIOS is a premium digital agency specializing in creating immersive digital experiences that merge cutting-edge technology with striking design. Founded with a vision to transform how brands connect with their audience online, we combine technical expertise with creative innovation.
            </p>
            
            <p className="text-muted-foreground">
              Our interdisciplinary team of designers, developers, and strategists work collaboratively to deliver solutions that not only look exceptional but perform flawlessly across all devices. We're passionate about creating digital products that leave lasting impressions and drive meaningful results for our clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-aura-orange/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-aura-orange" />
                  </div>
                  <span className="text-sm font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              className="bg-aura-orange hover:bg-aura-orange/90 text-white hover:orange-glow transition-all duration-300 hover:scale-105 group"
              onClick={() => navigate("/#team")}
            >
              Meet Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-tr from-background via-background to-aura-orange/10 rounded-2xl overflow-hidden border border-border">
              <div className="aspect-video bg-mesh-pattern relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-md mx-auto px-4">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-aura-orange/20 absolute -top-10 -left-10 blur-xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    ></motion.div>
                    <motion.div 
                      className="w-32 h-32 rounded-full bg-aura-orange/10 absolute -bottom-16 -right-16 blur-xl"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ 
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    ></motion.div>
                    
                    <div className="glass-effect bg-black/30 backdrop-blur-xl border border-white/10 rounded-lg p-8 transform hover:scale-[1.02] transition-all duration-500">
                      <blockquote className="font-medium italic">
                        "Our mission is to create digital experiences that resonate with audiences and drive results, blending technical excellence with creative vision."
                      </blockquote>
                      
                      <div className="mt-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-aura-orange/30 flex items-center justify-center">
                          <span className="text-xs font-bold text-aura-orange">AE</span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold">Alex Edwards</p>
                          <p className="text-xs text-muted-foreground">Founder & Creative Director</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-aura-orange/20 to-transparent p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-white">150+</p>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="bg-gradient-to-br from-aura-orange/20 to-transparent p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-white">12+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-aura-orange/20 to-transparent p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-white">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
