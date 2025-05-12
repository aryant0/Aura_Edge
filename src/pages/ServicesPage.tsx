import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";
import { AnimatedLines } from "@/components/AnimatedLines";

const ServicesPage = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <AnimatedLines />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-32 pb-16"
        >
          <Services />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ServicesPage;
