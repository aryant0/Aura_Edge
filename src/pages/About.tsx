import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import { AnimatedShapes } from "@/components/animated-shapes";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

export default function About() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const { ref: refSection2, isIntersecting: isSection2Visible } = useScrollReveal();
  const { ref: refSection3, isIntersecting: isSection3Visible } = useScrollReveal();
  
  const team = [
    {
      name: "Dakshraj Makne",
      role: "Founder and CEO",
      image: "/rev.jpg"
    },
    {
      name: "Mayank Birla",
      role: "Co-founder and CMO",
      image: "/mayank.jpg"
    },
    {
      name: "Nikhil Rai",
      role: "Marketing Lead",
      image: "/nikhil.jpg"
    },
    {
      name: "Riddhi Yadav",
      role: "Graphic Designer",
      image: "/riddhi.jpg"
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from design to development."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Reliability",
      description: "We deliver on our promises and meet deadlines consistently."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              About <span className="text-gradient">AuraEdge</span> Studios
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Learn about our story, our team, and the values that drive us to create exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
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
              <div className="absolute -bottom-5 -right-5 bg-card p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold font-heading mb-1">2015</p>
                <p className="text-muted-foreground">Founded</p>
              </div>
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                AuraEdge Studios was founded in 2015 with a vision to bridge the gap between cutting-edge technology and beautiful design. What started as a small team of passionate professionals has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we've honed our skills and expanded our services to become a one-stop destination for all digital needs. Our team of experts combines creativity with technical prowess to deliver solutions that not only look great but also perform exceptionally well.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, AuraEdge Studios stands as a testament to our commitment to excellence and our passion for helping businesses succeed in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={200} suffix="+" title="Projects Completed" />
            <Counter end={150} suffix="+" title="Happy Clients" />
            <Counter end={15} suffix="+" title="Industry Awards" />
            <Counter end={8} title="Years of Experience" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={refSection2 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection2Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide our work and define our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section 
        ref={refSection3 as React.RefObject<HTMLDivElement>}
        className={`section-padding bg-muted ${isSection3Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented people behind our success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-hover">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="rounded-full">
              <Link to="/team">View Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Ready to <span className="text-gradient">transform</span> your digital presence?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's work together to turn your vision into reality with our expertise in design and development.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
