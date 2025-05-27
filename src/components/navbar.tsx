import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  
  // Ref for the logo image element
  const logoRef = useRef<HTMLImageElement>(null);
  
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Projects", href: "/projects" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (logoRef.current) {
      const newSrc = theme === 'dark' ? "/AES MONOGRAM PNG WHITE.png" : "/Logoblack.png";
      logoRef.current.src = `${newSrc}?v=${Date.now()}`;
    }
  }, [theme]); // Rerun effect when theme changes
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-primary/30" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <img 
              ref={logoRef}
              src={`${theme === 'dark' ? "/AES MONOGRAM PNG WHITE.png" : "/Logoblack.png"}?v=${Date.now()}`}
              alt="Aura Edge Studios Logo" 
              className="h-16 w-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-xl -z-10 animate-pulse" />
          </div>
          <span className="text-xl md:text-2xl font-bold font-heading neon-text tracking-wider">
            <span className="text-primary"></span> Aura Edge Studios
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-heading font-medium tracking-wide uppercase text-sm transition-all hover:text-primary relative overflow-hidden group",
                location.pathname === link.href 
                  ? "text-primary" 
                  : "text-foreground"
              )}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="rounded-md gaming-border font-heading uppercase tracking-wider text-sm">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="relative z-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center transition-opacity duration-300 md:hidden z-40",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-6 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-heading font-medium uppercase transition-colors hover:text-primary py-2",
                location.pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 gaming-border font-heading uppercase tracking-wider">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
