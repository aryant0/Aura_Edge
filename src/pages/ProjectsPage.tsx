
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-32 pb-16"
        >
          <Projects />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;
