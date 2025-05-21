import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

interface VideoSectionProps {
  videos: Video[];
}

export function VideoSection({ videos }: VideoSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement>>({});

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <Card 
          key={video.id}
          className="overflow-hidden border-none bg-card/80 backdrop-blur-sm gaming-border shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <video
              ref={(el) => {
                if (el) videoRefs.current[video.id] = el;
              }}
              src={video.videoUrl}
              poster={video.thumbnail}
              className="w-full h-full object-cover"
              playsInline
              loop
              muted
            />
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
              onClick={() => toggleVideo(video.id)}
            >
              <Button 
                variant="outline" 
                size="icon"
                className="bg-primary/80 hover:bg-primary text-white border-none rounded-full"
              >
                {isVideoPlaying[video.id] ? 
                  <Pause className="h-6 w-6" /> : 
                  <Play className="h-6 w-6" />
                }
              </Button>
            </div>
          </div>
          <CardContent className="p-6 bg-gradient-to-b from-[#1A1F2C] to-[#2A293E]">
            <h3 className="text-xl font-bold mb-2 font-heading neon-text text-white">{video.title}</h3>
            <p className="text-gray-300 text-sm">{video.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 