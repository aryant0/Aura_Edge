
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechForward",
    testimonial: "Working with AuraEdge Studios transformed our online presence completely. Their team delivered a website that exceeded our expectations in both design and functionality. The attention to detail and commitment to our vision was remarkable.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "GlobalBrand",
    testimonial: "The mobile app developed by AuraEdge Studios has significantly improved our customer engagement. Their team was professional, responsive, and delivered a product that aligned perfectly with our brand identity. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "Founder",
    company: "Artisan Collective",
    testimonial: "The branding package AuraEdge created for our startup was exceptional. They captured our essence and translated it into a cohesive visual identity that resonates with our audience. Their creative approach and technical expertise set them apart.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Product Manager",
    company: "InnovateNow",
    testimonial: "Their strategic approach to our digital marketing campaigns yielded impressive results. Within three months, we saw a 40% increase in qualified leads. AuraEdge doesn't just deliver solutions; they deliver growth.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Olivia Taylor",
    position: "Operations Director",
    company: "SecureHealth",
    testimonial: "From concept to completion, AuraEdge Studios provided exceptional service. Their team's technical skills and creative vision helped us develop a secure, user-friendly platform that has transformed how we interact with patients.",
    avatar: "https://i.pravatar.cc/150?img=5",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            CLIENT <span className="text-aura-orange">TESTIMONIALS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with AuraEdge Studios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-card/50 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-aura-orange/20">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <img src={testimonial.avatar} alt={testimonial.name} />
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.position}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                          <div className="text-aura-orange">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                              opacity="0.2"
                            >
                              <path d="M11.3 2.8c-5.3.5-9.3 5-9.3 10.3 0 5.7 4.6 10.2 10.3 10.2 5.7 0 10.3-4.6 10.3-10.2 0-5.3-4-9.8-9.3-10.3z"/>
                            </svg>
                          </div>
                        </div>
                        <p className="text-muted-foreground flex-grow">{testimonial.testimonial}</p>
                        <div className="flex mt-6">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="text-aura-orange"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative inset-auto mr-2" />
              <CarouselNext className="relative inset-auto ml-2" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
