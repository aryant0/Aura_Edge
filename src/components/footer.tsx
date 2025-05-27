import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Github, MessageCircle, X } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/auraedgedesigns", label: "Instagram" },
    { icon: <X size={20} />, href: "https://twitter.com/auraedgestudios", label: "X (formerly Twitter)" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/company/auraedgestudios", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://facebook.com/auraedgestudios", label: "Facebook" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@auraedgestudios", label: "YouTube" },
  ];
  
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold font-heading">
                <span className="text-primary">Aura</span> Edge Studios
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Creating digital experiences that captivate, engage, and convert since 2015.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/packages" className="text-muted-foreground hover:text-primary transition-colors">Packages</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">App Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Branding & Design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919309252279" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 93092 52279
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:auraedgedesigns@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  auraedgedesigns@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aura Edge Studios. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
