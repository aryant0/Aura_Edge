import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Crown, TrendingUp, PenTool, Palette, Code, Video } from "lucide-react";

export default function Team() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  
  // Team members data
  const teamMembers = [
    {
      name: "Dakshraj Makne",
      role: "Founder and CEO",
      bio: "Leading the vision and strategy of AuraEdge with a passion for innovation and excellence.",
      icon: <Crown className="w-12 h-12 text-primary" />
    },
    {
      name: "Mayank Birla",
      role: "Co-founder and CFO",
      bio: "Driving marketing excellence and brand growth through innovative strategies and creative solutions.",
      icon: <TrendingUp className="w-12 h-12 text-primary" />
    },
    {
      name: "Nikhil Rai",
      role: "CMO & Digital Marketing Specialist",
      bio: "Expert in Meta & Google Ads, plus WhatsApp automation to boost growth and engagement.",
      icon: <PenTool className="w-12 h-12 text-primary" />
    },
    {
      name: "Riddhi Yadav",
      role: "Graphic Designer",
      bio: "Creating visually stunning designs that communicate brand messages effectively and creatively.",
      icon: <Palette className="w-12 h-12 text-primary" />
    },
    {
      name: "Aryan Narayan Thakur",
      role: "Web Developer",
      bio: "Building innovative and responsive web solutions with cutting-edge technologies.",
      icon: <Code className="w-12 h-12 text-primary" />
    },
    {
      name: "Kaushal Bharadwaj",
      role: "Video Editor",
      bio: "Crafting compelling visual stories through expert video editing and post-production.",
      icon: <Video className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Meet the talented individuals who make our digital agency a success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section 
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  {member.icon}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-muted/50 backdrop-blur-xl">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our team. If you're passionate about digital innovation and want to work in a collaborative and creative environment, we'd love to hear from you.
              </p>
              <p className="text-muted-foreground mb-6">
                At AuraEdge Studios, we value creativity, innovation, and a strong work ethic. We offer competitive compensation, flexible work arrangements, and opportunities for professional growth.
              </p>
              <Button asChild className="rounded-full">
                <Link to="/contact">See Open Positions</Link>
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              Principles that guide our work and team culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                  <span className="text-primary text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, pushing boundaries and exceeding expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                  <span className="text-primary text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe great ideas come from collaboration and diversity of thought and perspective.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center card-hover">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4">
                  <span className="text-primary text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches to solve complex problems in creative ways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Want to work with our <span className="text-gradient">amazing team</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Get in touch today to discuss your project needs and learn how our team can help you achieve your goals.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
