import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
