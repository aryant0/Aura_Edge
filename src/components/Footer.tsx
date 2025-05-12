import { Link, useNavigate } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Github, Facebook, ArrowUpRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const navigate = useNavigate();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com" }
  ];
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services#web-development" },
        { name: "App Development", href: "/services#app-development" },
        { name: "Branding & Design", href: "/services#branding-design" },
        { name: "Digital Marketing", href: "/services#digital-marketing" },
        { name: "Business Strategy", href: "/services#business-strategy" }
      ]
    }
  ];
  
  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border w-full">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <h3 className="text-2xl font-display font-bold text-foreground">
                AURAEDGE<span className="text-aura-orange">STUDIOS</span>
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Creating exceptional digital experiences that drive growth and transform brands in the digital landscape.
            </p>
            
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background hover:bg-aura-orange/10 text-muted-foreground hover:text-aura-orange rounded-full border border-border hover:border-aura-orange/30 transition-all duration-300"
                  aria-label={`Follow on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-aura-orange transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-aura-orange transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-sm text-muted-foreground hover:text-aura-orange transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-aura-orange/10 flex items-center justify-center mr-3 group-hover:bg-aura-orange/20 transition-colors">
                  <Phone className="w-4 h-4 text-aura-orange" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (234) 567-890</p>
                </div>
              </a>
              <a 
                href="mailto:contact@auraedgestudios.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-aura-orange transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-aura-orange/10 flex items-center justify-center mr-3 group-hover:bg-aura-orange/20 transition-colors">
                  <Mail className="w-4 h-4 text-aura-orange" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p>contact@auraedgestudios.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AURAEDGESTUDIOS. All rights reserved.
            <div className="flex space-x-4 mt-2">
              <a href="#privacy" className="hover:text-aura-orange transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-aura-orange transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="text-right">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-background hover:bg-aura-orange/10 border border-border hover:border-aura-orange/30 rounded-full text-muted-foreground hover:text-aura-orange transition-all duration-300 inline-flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <path d="m18 15-6-6-6 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}