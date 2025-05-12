import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if user is scrolling up or down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past the threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 0);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-aura-orange/10 via-aura-orange/15 to-aura-orange/10 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-aura-orange/20 via-aura-orange/10 to-aura-orange/20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-aura-orange/20 blur-xl rounded-full"></div>
              <motion.img
                src="/AES MONOGRAM PNG WHITE.png"
                alt="AuraEdge Studios Logo"
                className="h-14 w-14 relative z-10"
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.span 
              className="text-xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-aura-orange to-aura-orange/80 group-hover:text-aura-orange transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              AURAEDGE<span className="text-foreground">STUDIOS</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.ul 
              className="flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-medium transition-all duration-300 hover:scale-105 inline-block relative ${
                      location.pathname === link.href
                        ? "text-aura-orange hover:orange-glow" 
                        : "text-muted-foreground hover:text-aura-orange"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.href && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-aura-orange rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <ThemeToggle />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <Button 
                className="bg-aura-orange hover:bg-aura-orange/90 text-white hover:orange-glow transition-all duration-300 hover:scale-105"
                onClick={() => {
                  window.location.href = '/contact';
                  handleNavClick('/contact');
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-aura-orange transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md border-t border-border md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container h-full flex flex-col">
                <motion.ul 
                  className="flex flex-col space-y-6 pt-8 px-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.name} 
                      className="border-b border-border pb-2"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
                      }}
                    >
                      <Link
                        to={link.href}
                        className={`font-subheading text-xl font-medium transition-all duration-300 inline-block ${
                          location.pathname === link.href
                            ? "text-aura-orange" 
                            : "text-foreground hover:text-aura-orange"
                        }`}
                        onClick={() => {
                          handleNavClick(link.href);
                          setIsMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div 
                  className="mt-auto p-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.6 } }
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to="/contact">
                    <Button
                      className="w-full bg-aura-orange hover:bg-aura-orange/90 text-white transition-all duration-300 hover:scale-105"
                      onClick={() => {
                        handleNavClick('/contact');
                        setIsMenuOpen(false);
                      }}
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
