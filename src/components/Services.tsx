
import { Code, Palette, Target, Smartphone, Monitor, Headphones, LineChart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

function ServiceCard({ icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:border-aura-orange/50 hover:shadow-lg hover:shadow-aura-orange/5 group"
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-aura-orange/10 text-aura-orange mb-4 group-hover:bg-aura-orange group-hover:text-white transition-all duration-300 group-hover:orange-glow">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm flex items-start">
            <span className="text-aura-orange mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Development",
      description: "Crafting responsive, high-performance websites and web applications with cutting-edge technologies.",
      features: [
        "Custom frontend with React, Vue, or Angular",
        "Headless CMS integration",
        "E-commerce solutions with secure payment",
        "Progressive Web Apps (PWA)"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Development",
      description: "Building native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS and Android native development",
        "React Native & Flutter expertise",
        "App Store submission assistance",
        "Backend API integration"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Branding & Design",
      description: "Creating memorable brand identities and striking visual design systems for digital products.",
      features: [
        "Logo design and visual identity",
        "Brand guidelines and style guides",
        "UX/UI design for web and mobile",
        "Motion graphics and animations"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing that drives growth, engagement, and conversion for your business.",
      features: [
        "SEO optimization and strategy",
        "Social media management",
        "PPC and display advertising",
        "Content marketing and creation"
      ]
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Business Strategy",
      description: "Data-driven consulting that helps businesses identify opportunities and optimize their digital presence.",
      features: [
        "Market research and analysis",
        "Competitive landscape mapping",
        "Growth strategy and planning",
        "Digital transformation roadmaps"
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Support & Maintenance",
      description: "Ongoing maintenance, optimization, and support services to keep your digital products running smoothly.",
      features: [
        "24/7 technical support",
        "Regular updates and bug fixes",
        "Performance monitoring",
        "Security audits and updates"
      ]
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-aura-orange mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We offer a full spectrum of digital services designed to elevate your brand, 
            engage your audience, and accelerate your business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            className="bg-aura-orange hover:bg-aura-orange/90 text-white hover:orange-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Custom Service
          </Button>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-aura-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-aura-orange/5 rounded-full blur-3xl"></div>
    </section>
  );
}
