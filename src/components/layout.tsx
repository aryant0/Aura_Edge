
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import { ScrollTop } from "./scroll-top";
import { Preloader } from "./preloader";
import { AnimatedShapes } from "./animated-shapes";
import { MovingGridlines } from "./moving-gridlines";
import { SpaceBackground } from "./space-background";
import { CustomCursor } from "./custom-cursor";
import { motion } from "framer-motion";

export function Layout() {
  return (
    <>
      <Preloader />
      <motion.div 
        className="min-h-screen flex flex-col relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      >
        <CustomCursor />
        <SpaceBackground />
        <MovingGridlines />
        <AnimatedShapes />
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
        >
          <Outlet />
        </motion.main>
        <Footer />
        <ScrollTop />
      </motion.div>
    </>
  );
}
