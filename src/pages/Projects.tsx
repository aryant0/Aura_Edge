import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import { ExternalLink, Gamepad2, Code, Monitor, Paintbrush, GalleryHorizontal, GalleryThumbnails, Image, Play, Pause, Phone, MessageCircle, X } from "lucide-react";

// Image Preview Modal Component
const ImagePreviewModal = ({ image, onClose }: { image: string; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={onClose}>
        <X className="h-8 w-8" />
      </button>
      <div className="max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Preview" className="max-w-full max-h-[90vh] object-contain" />
      </div>
    </div>
  );
};

// Export projects data
export const projects = [
  // Web Development Projects
  {
    id: 1,
    title: "Rexerra Consultancy",
    category: "web",
    type: "image",
    tags: ["Web Development", "UI/UX Design"],
    images: ["/webdev_rexerra_homepage.png"],
    description: "A modern consultancy website featuring a clean design, interactive elements, and seamless user experience.",
    hasLink: true,
    liveLink: "https://www.rexerra.com/"
  },
  {
    id: 2,
    title: "WealthWisse",
    category: "web",
    type: "image",
    tags: ["Web Development", "Finance"],
    images: ["/wealthwise.png"],
    description: "A comprehensive financial platform offering investment insights and wealth management solutions.",
    hasLink: true,
    liveLink: "https://wealthwisse.netlify.app/"
  },
  {
    id: 3,
    title: "Dendrite AI",
    category: "web",
    type: "image",
    tags: ["Web Development", "AI/ML"],
    images: ["/dendrite.png"],
    description: "An innovative AI platform showcasing advanced machine learning capabilities and neural network solutions.",
    hasLink: true,
    liveLink: "https://dendriteai.netlify.app/"
  },
  {
    id: 4,
    title: "AumTrades",
    category: "web",
    type: "image",
    tags: ["Web Development", "Trading"],
    images: ["/webdev_aumtrades_homepage.png"],
    description: "A sophisticated trading platform with real-time market data and advanced trading tools.",
    hasLink: true,
    liveLink: "https://aumtrades.com/"
  },

  // App Development Projects
  {
    id: 5,
    title: "GDevelop",
    category: "app",
    type: "image",
    tags: ["App Development", "Game Development"],
    images: ["/gdevelopgame.png"],
    description: "A powerful no-code game development platform enabling creators to build and publish games without coding.",
    hasLink: true,
    liveLink: "https://play.google.com/store/apps/details?id=io.gdevelop.ide"
  },
  {
    id: 6,
    title: "Trading Game",
    category: "app",
    type: "image",
    tags: ["App Development", "Trading"],
    images: ["/tradinggame.png"],
    description: "An interactive trading simulator app that helps users learn and practice trading strategies in a risk-free environment.",
    hasLink: true,
    liveLink: "https://play.google.com/store/apps/details?id=com.tiim.tradinggame"
  },

  // Video Content
  {
    id: 7,
    title: "Short Form Videos",
    category: "ui-ux",
    type: "video",
    tags: ["Video Production", "Short Form"],
    video: "/short_video1.mp4",
    description: "Engaging short-form video content showcasing creative storytelling.",
    hasLink: false
  },
  {
    id: 8,
    title: "3D Animation",
    category: "ui-ux",
    type: "video",
    tags: ["Animation", "3D"],
    video: "/3D RENDER 2.mp4",
    description: "Creative 3D animation showcasing our design capabilities.",
    hasLink: false
  },
  {
    id: 9,
    title: "Animated Shorts",
    category: "ui-ux",
    type: "video",
    tags: ["Animation", "Short Form"],
    video: "/Animated shorts retention edit.mp4",
    description: "Creative animated short-form content with engaging visual effects.",
    hasLink: false
  },
  {
    id: 10,
    title: "Chef's Special",
    category: "ui-ux",
    type: "video",
    tags: ["Video Production", "Food Content"],
    video: "/chef_shorts.mp4",
    description: "Culinary-focused short video content with professional production quality.",
    hasLink: false
  },
  {
    id: 11,
    title: "Trading Game Demo",
    category: "ui-ux",
    type: "video",
    tags: ["App Demo", "Game Development"],
    video: "/new.mp4",
    description: "Interactive demo showcasing the features of our trading game app.",
    hasLink: false
  },
  {
    id: 12,
    title: "T-Shirt Brand Video",
    category: "ui-ux",
    type: "video",
    tags: ["Brand Video", "Fashion"],
    video: "/Tshirt_brand_video.mp4",
    description: "Dynamic brand video showcasing our t-shirt collection.",
    hasLink: false
  },

  // Product Design
  {
    id: 13,
    title: "Product Design Projects",
    category: "product",
    type: "image",
    tags: ["Product Design", "Marketing"],
    images: [
      "/Pholld_phone1.jpg",
      "/pholld.jpg",
      "/pholld_phone.jpg",
      "/tshirt1.png",
      "/tshirt2.png",
      "/tshirt3.png"
    ],
    description: "Innovative product designs showcasing our creative approach to physical products.",
    hasLink: false
  },

  // Branding Projects
  {
    id: 14,
    title: "Branding Projects",
    category: "branding",
    type: "image",
    tags: ["Branding", "Design"],
    images: [
      "/AES_PROFILE_LOGO-removebg-preview.png",
      "/jhaji_achar1.png",
      "/jhaji_achar2.png",
      "/honeybrand.png",
      "/whitbull_whiskey.jpg",
      "/coconut_jerry_branding.webp",
      "/shri_laxmi2.jpg",
      "/shri laxmi jwellers.jpg",
      "/LIT METALIKS.jpg",
      'biryani1.jpg',
      "/LIT METALIKS (1).jpg",
      "/LIT METALIKS (2).jpg"
    ],
    description: "Comprehensive branding solutions for various industries and businesses.",
    hasLink: false
  },

  // Marketing Projects
  {
    id: 15,
    title: "Marketing Projects",
    category: "marketing",
    type: "image",
    tags: ["Marketing", "Social Media"],
    images: [
      "/Purple and Pink 3D Illustration International Women's Day Instagram Post.jpg",
      "/vrinda_fertility1.jpg",
      "/vrinda_fertility2.jpg",
      "/exotica standee.jpg",
      "/wedding_banner.jpg"
    ],
    description: "Creative marketing campaigns and social media content for various industries.",
    hasLink: false
  }
];

// Add video section data
export const videos = [
  {
    id: "1",
    title: "Trading Game Demo",
    description: "Watch our trading game app in action with its interactive features and real-time market simulation.",
    videoUrl: "/new.mp4",
    thumbnail: "/appdev_tradinggame.webp"
  },
  {
    id: "2",
    title: "Chef's Special",
    description: "A showcase of our food delivery app's features and user interface.",
    videoUrl: "/chef_shorts.mp4",
    thumbnail: "/appdev_game.webp"
  },
  {
    id: "3",
    title: "3D Animation",
    description: "Creative 3D animation showcasing our design capabilities.",
    videoUrl: "/3D RENDER 2.mp4",
    thumbnail: "/appdev_tradinggame.webp"
  },
  {
    id: "4",
    title: "Animated Shorts",
    description: "Collection of animated shorts demonstrating our video production expertise.",
    videoUrl: "/Animated shorts retention edit.mp4",
    thumbnail: "/appdev_game.webp"
  }
];

export default function Projects() {
  const navigate = useNavigate();
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<string>("web");
  const [isVideoPlaying, setIsVideoPlaying] = useState<Record<string, boolean>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Video refs to control play/pause
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});

  // Function to toggle video play/pause
  const toggleVideo = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(prev => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setIsVideoPlaying(prev => ({ ...prev, [id]: false }));
      }
    }
  };

  // Function to handle card click
  const handleCardClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  // Project categories
  const categories = [
    { id: "web", name: "Web Development", icon: <Monitor className="mr-2 h-4 w-4" /> },
    { id: "app", name: "App Development", icon: <Code className="mr-2 h-4 w-4" /> },
    { id: "ui-ux", name: "Video Editing", icon: <Paintbrush className="mr-2 h-4 w-4" /> },
    { id: "product", name: "Product Design", icon: <GalleryHorizontal className="mr-2 h-4 w-4" /> },
    { id: "branding", name: "Branding", icon: <Image className="mr-2 h-4 w-4" /> },
    { id: "marketing", name: "Marketing", icon: <Image className="mr-2 h-4 w-4" /> }
  ];

  const filteredProjects = projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatedShapes />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <motion.div 
                className="w-32 h-32 relative shadow-lg shadow-purple-800"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="/AES PROFILE LOGO.jpg" 
                  alt="Aura Edge Studios Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 neon-text">
              Our Projects<span className="text-gradient"></span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our portfolio of successful projects across different industries and services.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter and Grid */}
      <section 
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding relative z-10 ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button 
                key={category.id} 
                variant={activeFilter === category.id ? "default" : "outline"} 
                onClick={() => handleFilterChange(category.id)}
                className="rounded-full gaming-border"
              >
                <span className="flex items-center">
                  {category.icon}
                  {category.name}
                </span>
              </Button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="space-y-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-full">
                {project.category === "web" ? (
                  <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Main Image */}
                      <div className="w-full lg:w-2/3">
                        <div className="relative group">
                          <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                            onClick={() => setPreviewImage(project.images[0])}
                          />
                          <div 
                            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.liveLink) {
                                window.open(project.liveLink, '_blank');
                              }
                            }}
                          >
                            <Button variant="secondary" size="lg" className="rounded-full gaming-border bg-primary/90 text-white hover:bg-primary">
                              Visit Live Website <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* Project Info */}
                      <div className="w-full lg:w-1/3 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 font-heading neon-text text-foreground">{project.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-sm bg-primary/30 px-3 py-1.5 rounded-full text-foreground font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.category === "app" ? (
                  <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Main Image */}
                      <div className="w-full lg:w-2/3">
                        <div className="relative group">
                          <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                            onClick={() => setPreviewImage(project.images[0])}
                          />
                          <div 
                            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.liveLink) {
                                window.open(project.liveLink, '_blank');
                              }
                            }}
                          >
                            <Button variant="secondary" size="lg" className="rounded-full gaming-border bg-primary/90 text-white hover:bg-primary">
                              Visit App Store <ExternalLink className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* Project Info */}
                      <div className="w-full lg:w-1/3 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 font-heading neon-text text-foreground">{project.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-sm bg-primary/30 px-3 py-1.5 rounded-full text-foreground font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.category === "ui-ux" ? (
                  <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      {/* Video */}
                      <div className="w-full lg:w-2/3">
                        <div className="relative group h-[400px]">
                          <video
                            ref={(el) => {
                              if (el) videoRefs.current[project.id.toString()] = el;
                            }}
                            src={project.video}
                            className="w-full h-full object-contain rounded-lg shadow-lg"
                            playsInline
                            loop
                            muted
                            autoPlay
                            controls={false}
                          />
                          <div 
                            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-lg"
                            onClick={() => toggleVideo(project.id.toString())}
                          >
                            <Button variant="secondary" size="lg" className="rounded-full gaming-border bg-primary/90 text-white hover:bg-primary">
                              {isVideoPlaying[project.id.toString()] ? (
                                <Pause className="h-6 w-6" />
                              ) : (
                                <Play className="h-6 w-6" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* Project Info */}
                      <div className="w-full lg:w-1/3 space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 font-heading neon-text text-foreground">{project.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-sm bg-primary/30 px-3 py-1.5 rounded-full text-foreground font-bold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.images.map((image, idx) => (
                      <div 
                        key={idx} 
                        className="relative w-full aspect-[4/3] bg-black/5 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setPreviewImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-contain p-4"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {previewImage && (
        <ImagePreviewModal 
          image={previewImage} 
          onClose={() => setPreviewImage(null)} 
        />
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#2A293E]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div 
              className="bg-primary p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(85, 37, 134, 0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(106, 53, 156, 0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(85, 37, 134, 0.2) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white">
                Ready to Start Your Own Project?
              </h2>
              <p className="text-white/90 mb-8">
                We're excited to hear about your ideas and help bring them to life. Contact us today to discuss your project needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
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
        </div>
      </section>
    </>
  );
}
