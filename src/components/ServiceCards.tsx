import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built with modern technologies for performance and scalability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-4v4h4v-4z" />
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    color: "from-aura-orange/20 to-transparent",
  },
  {
    id: 2,
    title: "App Development",
    description: "Native and cross-platform mobile apps for iOS and Android with high-quality UI/UX design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    color: "from-aura-orange/20 to-transparent",
  },
  {
    id: 3,
    title: "Branding",
    description: "Build complete brand identity with logo design, detailed style guides, and captivating visual identity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 21 4.3-4.3" />
        <path d="m2.5 16.5 5 5" />
        <circle cx="12" cy="12" r="10" />
        <path d="m16 8-3.5 3.5" />
        <path d="M20 4 8.7 15.3" />
      </svg>
    ),
    color: "from-aura-orange/20 to-transparent",
  },
];

export function ServiceCards() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  useEffect(() => {
    const controls = animate(x, [-1000, 0], {
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    });

    return () => controls.stop();
  }, [x]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            OUR <span className="text-aura-orange">SERVICES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            style={{ x }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* First set of cards */}
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                className="min-w-[300px] md:min-w-[350px]"
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border border-white/5 overflow-hidden group hover:border-aura-orange/20 transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader>
                    <div className="bg-aura-orange/10 rounded-full w-12 h-12 flex items-center justify-center text-aura-orange mb-4 group-hover:bg-aura-orange/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6">{service.description}</CardDescription>
                    <Button
                      variant="ghost"
                      className="text-aura-orange group-hover:translate-x-1 transition-transform duration-300 p-0"
                      onClick={() => navigate("/services")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {/* Second set of cards */}
            {services.map((service) => (
              <motion.div 
                key={`duplicate-${service.id}`} 
                variants={itemVariants}
                className="min-w-[300px] md:min-w-[350px]"
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border border-white/5 overflow-hidden group hover:border-aura-orange/20 transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader>
                    <div className="bg-aura-orange/10 rounded-full w-12 h-12 flex items-center justify-center text-aura-orange mb-4 group-hover:bg-aura-orange/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6">{service.description}</CardDescription>
                    <Button
                      variant="ghost"
                      className="text-aura-orange group-hover:translate-x-1 transition-transform duration-300 p-0"
                      onClick={() => navigate("/services")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {/* Third set of cards for smoother infinite scroll */}
            {services.map((service) => (
              <motion.div 
                key={`triplicate-${service.id}`} 
                variants={itemVariants}
                className="min-w-[300px] md:min-w-[350px]"
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border border-white/5 overflow-hidden group hover:border-aura-orange/20 transition-all duration-500">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader>
                    <div className="bg-aura-orange/10 rounded-full w-12 h-12 flex items-center justify-center text-aura-orange mb-4 group-hover:bg-aura-orange/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="font-display">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6">{service.description}</CardDescription>
                    <Button
                      variant="ghost"
                      className="text-aura-orange group-hover:translate-x-1 transition-transform duration-300 p-0"
                      onClick={() => navigate("/services")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            onClick={() => navigate("/services")} 
            className="bg-aura-orange hover:bg-aura-orange/90 hover:orange-glow transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
