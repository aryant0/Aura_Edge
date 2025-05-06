import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-aura-orange mb-2">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
            Let's Start a Project Together
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us today to discuss your project and discover how we can help you achieve your goals.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-background to-aura-orange/5 p-6">
                  <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name <span className="text-aura-orange">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-background/50 border-border/50 focus:border-aura-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address <span className="text-aura-orange">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="bg-background/50 border-border/50 focus:border-aura-orange"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <label htmlFor="message" className="text-sm font-medium">
                        Your Message <span className="text-aura-orange">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or ask us a question..."
                        className="bg-background/50 border-border/50 focus:border-aura-orange min-h-[150px]"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-aura-orange hover:bg-aura-orange/90 text-white hover:orange-glow transition-all duration-300 group"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="grid gap-4">
                <Button
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/your_whatsapp_number', '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Button
                  className="w-full bg-aura-orange hover:bg-aura-orange/90 text-white hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:contact@auraedgestudios.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send us an Email
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Location</h3>
              <motion.a
                href="https://maps.google.com/?q=123+Digital+Lane,+Tech+City,+CA+90210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-card border border-border rounded-lg hover:border-aura-orange/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="h-10 w-10 rounded-full bg-aura-orange/10 flex items-center justify-center mr-4 group-hover:bg-aura-orange/20 transition-colors">
                  <MapPin className="h-5 w-5 text-aura-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Visit Us</h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    123 Digital Lane, Tech City, CA 90210
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 left-0 w-64 h-64 bg-aura-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/3 right-0 w-80 h-80 bg-aura-orange/5 rounded-full blur-3xl"></div>
    </section>
  );
}
