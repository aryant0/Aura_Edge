import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { Counter } from "@/components/counter";
import { SpaceshipEffects } from "@/components/spaceship-effects";
import { ArrowRight, Code, Layout, Layers, PenTool, Monitor, Phone, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function Home() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const { ref: refSection2, isIntersecting: isSection2Visible } = useScrollReveal();
  const { ref: refSection3, isIntersecting: isSection3Visible } = useScrollReveal();
  const { ref: refSection4, isIntersecting: isSection4Visible } = useScrollReveal();

  // Project samples
  const projects = [
    {
      title: "Rexerra Consultancy",
      category: "Enterprise Web Development",
      image: "/webdev_rexerra_homepage.png",
      link: "https://www.rexerra.com/",
      description: "A comprehensive business consultancy platform with advanced analytics and client management systems."
    },
    {
      title: "Trading Game Pro",
      category: "Mobile App Development",
      image: "/appdev_tradinggame.webp",
      link: "https://play.google.com/store/apps/details?id=com.tiim.tradinggame",
      description: "An innovative trading simulation app with real-time market data and educational features."
    },
    {
      title: "Corporate Brand Videos",
      category: "Video Production",
      image: "/hanma.jpg",
      link: "https://play.google.com/store/apps/details?id=io.gdevelop.ide",
      description: "Professional corporate video production services for brand storytelling and graphic design campaigns."
    }
  ];

  // Services
  const services = [
    {
      icon: <Monitor />,
      title: "Web Development",
      description: "Custom websites that engage visitors and drive conversions."
    },
    {
      icon: <Phone />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <PenTool />,
      title: "Branding & Design",
      description: "Visual identity systems that elevate your brand's presence."
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "AuraEdge transformed our digital presence completely. Their team delivered beyond our expectations with a website that perfectly captures our brand.",
      name: "Sarah Johnson",
      position: "Graphic Design Director, TechCorp"
    },
    {
      quote: "The gaming app AuraEdge developed for us has been downloaded over 500,000 times. Their innovative approach and attention to detail made all the difference.",
      name: "Michael Chen",
      position: "Game Producer, NexusGames"
    },
    {
      quote: "Working with AuraEdge Studios was a game-changer for our streaming platform. They understood our vision and executed it flawlessly.",
      name: "Alex Rodriguez",
      position: "CTO, StreamFusion"
    },
    {
      quote: "The UI/UX design AuraEdge created for our VR experience has received multiple industry awards. Their creative vision is unmatched.",
      name: "Priya Sharma",
      position: "Lead Designer, VRWorld"
    },
    {
      quote: "From concept to launch, AuraEdge provided exceptional service. Their team's technical expertise and creative approach exceeded all expectations.",
      name: "James Wilson",
      position: "Founder, GalaxyPlay"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 space-travel">
        <AnimatedShapes />
        <SpaceshipEffects />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.p 
                className="inline-block text-sm md:text-base font-medium px-4 py-1 mb-6 border border-primary rounded-full text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Aura Edge Studios
              </motion.p>
              
              <motion.h1 
                className="hero-title mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                We Create <span className="text-gradient">Digital Experiences</span> That Matter
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                AuraEdge Studios is a full-service digital agency helping brands thrive in the digital landscape with cutting-edge development and design solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button asChild size="lg" className="rounded-full" style={{ background: '#7F55B1' }}>
                  <Link to="/contact">Start a Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-[#9B7EBD] text-[#9B7EBD] hover:bg-[#9B7EBD]/10">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/new.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
              </div>
              
              {/* Floating spaceship around the image */}
              <motion.div
                className="absolute -top-10 right-20 z-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  {/* Spaceship body */}
                  <div className="w-16 h-8 bg-[#F49BAB] rounded-full relative">
                    <div className="absolute -left-1 top-2 w-3 h-3 rounded-l-full engine-flame" style={{background: '#FFE1E0'}} />
                    <div className="absolute top-1 left-3 w-8 h-6 bg-[#7F55B1] rounded-t-full" />
                    <div className="absolute top-2 left-10 w-6 h-3 bg-[#F49BAB] rounded-r-full" />
                    
                    {/* Window */}
                    <div className="absolute top-2 left-5 w-3 h-3 rounded-full bg-[#FFE1E0] opacity-80" />
                  </div>
                  
                  {/* Light trail */}
                  <motion.div
                    className="absolute top-4 left-0 h-0.5 w-8 opacity-60"
                    style={{
                      background: 'linear-gradient(to right, transparent, #FFE1E0)',
                    }}
                    animate={{
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-card p-4 rounded-2xl shadow-xl"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#7F55B1]/20 p-2 rounded-full">
                    <Layers className="h-6 w-6 text-[#7F55B1]" />
                  </div>
                  <div>
                    <p className="font-medium">Design Process</p>
                    <p className="text-sm text-muted-foreground">User-centered approach</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-card p-4 rounded-2xl shadow-xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#F49BAB]/20 p-2 rounded-full">
                    <Code className="h-6 w-6 text-[#F49BAB]" />
                  </div>
                  <div>
                    <p className="font-medium">Clean Code</p>
                    <p className="text-sm text-muted-foreground">Modern technologies</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Counter end={200} suffix="+" title="Projects Completed" />
            <Counter end={150} suffix="+" title="Satisfied Clients" />
            <Counter end={15} suffix="+" title="Industry Awards" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer comprehensive digital solutions tailored to your specific needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#7F55B1]/10 p-4 rounded-full mb-4">
                    <div className="text-[#7F55B1]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="group inline-flex items-center text-[#7F55B1] font-medium gap-2 mt-auto"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full border-[#9B7EBD] text-[#9B7EBD] hover:bg-[#9B7EBD]/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section
        ref={refSection2 as React.RefObject<HTMLDivElement>}
        className={`section-padding bg-muted ${isSection2Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-10 bg-card p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold font-heading mb-1">Since 2015</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="section-title">Creating Digital Success Stories Since 2015</h2>
              <p className="text-muted-foreground mb-6">
                AuraEdge Studios is a team of passionate digital experts dedicated to helping businesses succeed online. Our innovative approach combines creativity with technical expertise to deliver outstanding results.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <div className="text-primary h-4 w-4 flex items-center justify-center">✓</div>
                  </div>
                  <span>Strategic approach to every project</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <div className="text-primary h-4 w-4 flex items-center justify-center">✓</div>
                  </div>
                  <span>Experienced team of designers and developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/20 p-1 rounded-full mt-1">
                    <div className="text-primary h-4 w-4 flex items-center justify-center">✓</div>
                  </div>
                  <span>Focus on results and client satisfaction</span>
                </li>
              </ul>
              <Button asChild className="rounded-full">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={refSection3 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection3Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Take a look at some of our recent work that showcases our expertise and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} to={project.link} target="_blank" className="group">
                <div className="rounded-2xl overflow-hidden relative card-hover">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain bg-black/5 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                    <div>
                      <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="rounded-full">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        ref={refSection4 as React.RefObject<HTMLDivElement>}
        className={`section-padding relative overflow-hidden ${isSection4Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from the businesses and brands who have experienced our service firsthand.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel 
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="testimonial-card border gaming-border overflow-hidden">
                        <CardContent className="p-8 text-center flex flex-col items-center">
                          <motion.svg 
                            className="h-12 w-12 text-primary mx-auto mb-6" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <path d="M9.13456 9H5.25654C5.25654 9 5.02142 3.95531 9.7151 4.00047C11.0646 4.00047 11.327 5.54053 10.9452 6.31448C10.2006 7.9042 7.70153 7.9042 7.70153 9.32912" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.644 9H14.766C14.766 9 14.5308 3.95531 19.2245 4.00047C20.574 4.00047 20.8364 5.54053 20.4546 6.31448C19.71 7.9042 17.211 7.9042 17.211 9.32912" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 13V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.5 13V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                          <motion.p 
                            className="text-xl md:text-2xl font-medium mb-8 neon-text text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            {testimonial.quote}
                          </motion.p>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                          >
                            <p className="font-bold font-heading text-gradient">{testimonial.name}</p>
                            <p className="text-white/80">{testimonial.position}</p>
                          </motion.div>
                          
                          {/* Decorative elements */}
                          <motion.div
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-accent/10"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                              duration: 3,
                              delay: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static left-0 translate-y-0 mr-4 bg-card/30 backdrop-blur-xl border-primary/30 text-white" />
                <CarouselNext className="relative static right-0 translate-y-0 bg-card/30 backdrop-blur-xl border-primary/30 text-white" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden space-travel">
        <AnimatedShapes />
        <SpaceshipEffects />
        <div className="container relative z-10">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to start your project?</h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Contact us today to discuss your ideas and discover how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/919309252279?text=Hi%20there%21%20I%20came%20across%20your%20work%20on%20the%20website%20and%20was%20really%20impressed.%20I%27m%20interested%20in%20collaborating%20with%20you%20%E2%80%94%20would%20it%20be%20possible%20to%20schedule%20a%20meeting%3F', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-full"
                onClick={() => window.location.href = 'tel:+919309252279'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
