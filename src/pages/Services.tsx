
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { 
  Monitor, Phone, PenTool, TrendingUp, 
  Code, Database, Layout, Search, 
  Settings, Users, HelpCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Services() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const { ref: refSection2, isIntersecting: isSection2Visible } = useScrollReveal();
  
  // All services
  const allServices = [
    {
      icon: <Monitor />,
      title: "Web Development",
      description: "Custom websites and web applications that engage visitors and drive conversions.",
      features: [
        "Responsive design for all devices",
        "User-friendly interfaces",
        "Fast loading speeds and optimization",
        "SEO-friendly structure",
        "Integration with third-party services"
      ]
    },
    {
      icon: <Phone />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "User experience focused design",
        "Regular updates and maintenance",
        "App Store optimization"
      ]
    },
    {
      icon: <PenTool />,
      title: "Branding & Design",
      description: "Visual identity systems that elevate your brand's presence.",
      features: [
        "Logo design and brand guidelines",
        "Visual identity systems",
        "Marketing materials",
        "Packaging design",
        "Brand strategy consulting"
      ]
    },
    {
      icon: <Layout />,
      title: "UI/UX Design",
      description: "User-centered design that enhances user satisfaction and engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Usability testing",
        "Interactive prototypes",
        "Accessibility optimization"
      ]
    },
    {
      icon: <TrendingUp />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that deliver measurable results.",
      features: [
        "SEO optimization",
        "Social media marketing",
        "PPC campaigns",
        "Content marketing",
        "Analytics and reporting"
      ]
    },
    {
      icon: <Code />,
      title: "Custom Development",
      description: "Tailored software solutions addressing your specific business needs.",
      features: [
        "Enterprise software development",
        "API integration and development",
        "Legacy system modernization",
        "Database design and optimization",
        "Cloud-based solutions"
      ]
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and requirements through detailed consultations."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy and roadmap for your project."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We create and build your solution with regular feedback and iterations."
    },
    {
      number: "04",
      title: "Testing",
      description: "Thorough testing ensures everything works perfectly before launch."
    },
    {
      number: "05",
      title: "Launch",
      description: "Your project goes live with our support to ensure a smooth deployment."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "We provide continued maintenance and updates to keep everything running smoothly."
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive digital solutions tailored to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-2xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="app">App</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((service, index) => (
                  <Card key={index} className="border-none shadow-md card-hover">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="text-primary mt-1">✓</div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="outline" className="w-full rounded-full">
                        <Link to="/contact">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.title === "Web Development" || service.title === "UI/UX Design")
                  .map((service, index) => (
                    <Card key={index} className="border-none shadow-md card-hover">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-primary mt-1">✓</div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Similar structure for other tabs */}
            <TabsContent value="app" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.title === "App Development")
                  .map((service, index) => (
                    <Card key={index} className="border-none shadow-md card-hover">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-primary mt-1">✓</div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.title === "Branding & Design" || service.title === "UI/UX Design")
                  .map((service, index) => (
                    <Card key={index} className="border-none shadow-md card-hover">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-primary mt-1">✓</div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.title === "Digital Marketing")
                  .map((service, index) => (
                    <Card key={index} className="border-none shadow-md card-hover">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-primary mt-1">✓</div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices
                  .filter(service => service.title === "Custom Development")
                  .map((service, index) => (
                    <Card key={index} className="border-none shadow-md card-hover">
                      <CardContent className="p-6">
                        <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-primary mt-1">✓</div>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button asChild variant="outline" className="w-full rounded-full">
                          <Link to="/contact">Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={refSection2 as React.RefObject<HTMLDivElement>}
        className={`section-padding bg-muted ${isSection2Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              How we work with you to bring your project to life from concept to completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-md relative card-hover">
                <div className="text-5xl font-bold font-heading opacity-10 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <span className="text-primary font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 font-heading">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">How long does a typical project take?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline estimate for your specific project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">What's your pricing structure?</h3>
                  <p className="text-muted-foreground">
                    We offer customized pricing based on your project requirements. We can work on a fixed-price model for well-defined projects or a time-and-materials basis for more flexible engagements. Contact us for a detailed quote tailored to your needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">Do you provide ongoing support after project completion?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally. Our support services include regular updates, security patches, content updates, and technical assistance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">What technologies do you work with?</h3>
                  <p className="text-muted-foreground">
                    We work with a wide range of modern technologies including React, Angular, Vue.js, Node.js, PHP/Laravel, Python/Django, WordPress, iOS/Swift, Android/Kotlin, and many more. Our team selects the most appropriate technology stack based on your project requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button asChild className="rounded-full">
                <Link to="/contact">Ask Us a Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Ready to discuss your project?</h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Contact us today for a free consultation and let's explore how we can help you achieve your goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
