
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Project type definition
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Vertex Financial Dashboard",
      category: "Web Development",
      description: "A comprehensive financial dashboard with real-time data visualization and responsive design.",
      longDescription: "Built for a leading fintech company, this dashboard provides real-time financial data visualization with interactive charts and customizable widgets. The system processes millions of data points while maintaining sub-second response times and includes a sophisticated alert system for market changes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js", "WebSockets"],
      image: "/Platform.jpg",
      githubLink: "https://github.com/example/vertex"
    },
    {
      id: 2,
      title: "Lumina Mobile App",
      category: "App Development",
      // description: "Cross-platform mobile application for productivity tracking with seamless cloud synchronization.",
      // longDescription: "Lumina helps users manage their daily tasks, track habits, and improve productivity through intelligent suggestions. The app features offline functionality with seamless cloud sync, custom notifications, and detailed analytics to help users understand their productivity patterns.",
      // technologies: ["Flutter", "Firebase", "Swift", "Kotlin", "Cloud Firestore", "FCM"],
      image: "/4.jpg",
      description: "",
      technologies: []
    },
    {
      id: 3,
      title: "Echo Sustainable Fashion",
      category: "Branding",
      // description: "Complete brand identity redesign for a sustainable fashion company entering the global market.",
      // longDescription: "We created a comprehensive brand identity for Echo, including logo design, typography system, color palette, packaging design, and brand guidelines. The rebrand helped position Echo as a premium sustainable fashion brand, increasing their market visibility and consumer trust.",
      // technologies: ["Adobe Creative Suite", "Figma", "After Effects", "Brand Strategy", "Packaging Design"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      description: "",
      technologies: []
    },
    {
      id: 4,
      title: "Pulse Marketing Campaign",
      category: "Digital Marketing",
      description: "Strategic campaign that increased client conversion rates by 156% over six months.",
      longDescription: "For a B2B SaaS client, we developed and executed a multi-channel marketing strategy focusing on content marketing, SEO, and targeted advertising. The campaign included detailed buyer persona research, competitive analysis, and A/B testing of messaging across channels.",
      technologies: ["Google Analytics", "SEO", "Content Strategy", "Social Media", "Email Marketing", "PPC"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      link: "https://example.com/pulse-case-study",
    },
    {
      id: 5,
      title: "Nexus SaaS Platform",
      category: "Web Development",
      description: "Enterprise-level SaaS platform for business intelligence with custom reporting tools.",
      longDescription: "Nexus is a comprehensive business intelligence platform that integrates data from multiple sources to provide actionable insights. The platform includes custom report builders, automated analytics, and machine learning-powered predictions to help businesses optimize their operations.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "GraphQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      link: "https://example.com/nexus",
      githubLink: "https://github.com/example/nexus"
    },
    {
      id: 6,
      title: "Harmony Design System",
      category: "UI/UX Design",
      description: "Comprehensive design system with over 200 components for rapid application development.",
      longDescription: "Harmony is a complete design system that includes a component library, design tokens, and documentation to ensure consistency across products. The system supports multiple themes, is accessibility compliant, and includes integration with popular frameworks like React, Vue, and Angular.",
      technologies: ["Figma", "React", "Storybook", "CSS Variables", "Accessibility", "Design Tokens"],
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "https://example.com/harmony-design",
      githubLink: "https://github.com/example/harmony"
    },
    {
      id: 7,
      title: "TechConf Event Platform",
      category: "Web Development",
      description: "Virtual conference platform with live streaming and networking capabilities.",
      longDescription: "Built during the pandemic, this platform allowed tech conferences to go virtual with interactive features like live streaming, networking rooms, sponsor booths, and session scheduling. The platform supported concurrent users in the thousands while maintaining video quality and interactivity.",
      technologies: ["React", "WebRTC", "Node.js", "Redis", "AWS", "Socket.io"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://example.com/techconf",
    },
    {
      id: 8,
      title: "GreenVest Strategy",
      category: "Business Strategy",
      description: "Growth strategy for a sustainable investment platform targeting millennial investors.",
      longDescription: "We created a comprehensive business strategy for GreenVest, including market analysis, competitive positioning, customer acquisition strategy, and five-year growth roadmap. The strategy helped the company secure Series A funding and increase their user base by 230% in the first year.",
      technologies: ["Market Research", "Competitive Analysis", "Financial Modeling", "Go-to-Market Strategy"],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "https://example.com/greenvest-case-study",
    },
  ];

  const categories = ["All", "Web Development", "App Development", "Branding", "Digital Marketing", "Business Strategy", "UI/UX Design"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
    
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative">
      <div className="container px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-aura-orange mb-2">Our Work</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
                Selected Projects
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl">
                Explore our portfolio of award-winning projects that showcase our expertise in creating cutting-edge digital experiences across various industries.
              </p>
            </div>
            <Button 
              variant="outline" 
              className="border-aura-orange text-aura-orange hover:bg-aura-orange/10 hover:orange-glow transition-all duration-300 hover:scale-105 w-full md:w-auto"
              onClick={() => window.open("https://example.com/all-projects", "_blank")}
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <Tabs defaultValue="All" className="mt-8">
            <TabsList className="bg-background flex flex-wrap justify-start overflow-x-auto hide-scrollbar pb-4">
              {categories.map((category, index) => (
                <TabsTrigger 
                  key={index} 
                  value={category}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-aura-orange data-[state=active]:text-white data-[state=active]:orange-glow"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer h-full">
                    <div 
                      className="aspect-[4/3] bg-cover bg-center w-full transition-all duration-700 group-hover:scale-105" 
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <p className="text-xs text-aura-orange font-medium uppercase tracking-wider mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex gap-2">
                        {project.link && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-white/30 bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 w-max"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.link, "_blank");
                            }}
                          >
                            View Project
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        )}
                        
                        {project.githubLink && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-white/30 bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 w-max"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubLink, "_blank");
                            }}
                          >
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                
                <HoverCardContent className="w-80 p-0 overflow-hidden">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{project.longDescription || project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                      {project.link && (
                        <Button 
                          size="sm" 
                          variant="link" 
                          className="p-0 h-auto text-aura-orange hover:text-aura-orange/80"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          Visit Project →
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
