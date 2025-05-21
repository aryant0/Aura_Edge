import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    }, 1500);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to hear from you. Contact us today to discuss your project or any questions you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full gaming-border bg-primary hover:bg-primary/90 text-white"
                onClick={() => window.location.href = 'tel:+919309252279'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
              <Button 
                size="lg" 
                className="rounded-full gaming-border bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/919309252279', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section 
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to discuss a project? Reach out to us using any of the methods below, and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-heading">Our Location</h3>
                      <p className="text-muted-foreground">
                        Maharashtra
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-heading">Phone Number</h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-primary hover:underline">
                          <a href="tel:+919309252279">+91 93092 52279</a>
                        </p>
                        <p className="text-primary hover:underline">
                          <a href="tel:+917558723316">+91 75587 23316</a>
                        </p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-fit"
                          onClick={() => window.location.href = 'tel:+919309252279'}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-heading">WhatsApp</h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-primary">Chat with us on WhatsApp</p>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-fit bg-green-600 hover:bg-green-700 text-white border-none"
                          onClick={() => window.open('https://wa.me/919309252279', '_blank')}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-heading">Email Address</h3>
                      <p className="text-primary hover:underline">
                        <a href="mailto:auraedgedesigns@gmail.com">auraedgedesigns@gmail.com</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-3xl font-bold font-heading mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="What is this regarding?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project or question..." 
                                className="min-h-32"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full rounded-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about working with us.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">How do I get started with a project?</h3>
                  <p className="text-muted-foreground">
                    Simply fill out our contact form or give us a call. We'll schedule an initial consultation to discuss your needs, goals, and budget. After this, we'll provide you with a proposal outlining the scope, timeline, and cost of your project.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">What information should I prepare before contacting you?</h3>
                  <p className="text-muted-foreground">
                    It's helpful if you can provide a general overview of your project, your goals, your target audience, any design preferences, and your approximate budget and timeline. Don't worry if you don't have all the details - we can help you figure things out.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-heading">How long does it take to complete a typical project?</h3>
                  <p className="text-muted-foreground">
                    Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while more complex applications can take 3-6 months. During our initial consultation, we'll provide a detailed timeline estimate for your specific project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Let's build something amazing together</h2>
            <p className="text-white/90 mb-8 max-w-lg mx-auto">
              Ready to transform your digital presence? Contact us today and take the first step towards realizing your vision.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="tel:+919309252279">Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
