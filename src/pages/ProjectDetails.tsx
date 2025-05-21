import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, ExternalLink } from "lucide-react";

// Import the projects data
import { projects } from "./Projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState<Record<string, boolean>>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id.toString() === id);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const toggleVideo = (videoId: string) => {
    setIsVideoPlaying(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2A293E] py-20">
      <div className="container">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 text-white hover:text-primary"
          onClick={() => navigate('/projects')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 neon-text text-white">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="text-sm bg-primary/30 px-3 py-1 rounded-full text-white font-bold">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-lg">{project.description}</p>
        </div>

        {/* Media Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Media Display */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/20">
            {project.type === "video" ? (
              <div className="relative w-full h-full">
                <video
                  src={project.video}
                  poster={project.thumbnail}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                  autoPlay={isVideoPlaying[project.id.toString()]}
                />
                <div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  onClick={() => toggleVideo(project.id.toString())}
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="bg-primary/80 hover:bg-primary text-white border-none rounded-full"
                  >
                    {isVideoPlaying[project.id.toString()] ? 
                      <Pause className="h-8 w-8" /> : 
                      <Play className="h-8 w-8" />
                    }
                  </Button>
                </div>
              </div>
            ) : (
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 gap-4">
            {project.images?.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentImageIndex === index ? 'ring-4 ring-primary' : 'hover:opacity-80'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            className="text-white border-primary hover:bg-primary/20"
            onClick={prevImage}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="text-white border-primary hover:bg-primary/20"
            onClick={nextImage}
          >
            Next
          </Button>
        </div>

        {/* External Link (if applicable) */}
        {project.hasLink && (
          <div className="mt-12 text-center">
            <Button
              variant="default"
              size="lg"
              className="rounded-full gaming-border bg-primary hover:bg-primary/90 text-white"
            >
              View Live Project <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 