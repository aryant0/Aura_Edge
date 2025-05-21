
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full backdrop-blur-sm hover:bg-background/80 relative overflow-hidden gaming-border"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#F97316]/30 opacity-0 hover:opacity-100"
        initial={false}
        animate={{ opacity: theme === "light" ? 0 : 0.7 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: theme === "light" 
            ? "0 0 0 rgba(139, 92, 246, 0)" 
            : "0 0 20px rgba(139, 92, 246, 0.8)"
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : 180,
          scale: [1, 1.4, 1],
        }}
        transition={{
          rotate: { duration: 0.6, ease: "easeInOut" },
          scale: { duration: 0.4, times: [0, 0.5, 1] }
        }}
        className="h-5 w-5 relative"
      >
        <motion.div
          initial={{ scale: theme === "light" ? 1 : 0 }}
          animate={{ scale: theme === "light" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 transition-all text-[#8B5CF6]" />
        </motion.div>
        
        <motion.div
          initial={{ scale: theme === "light" ? 0 : 1 }}
          animate={{ scale: theme === "light" ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 transition-all text-[#F97316]" />
        </motion.div>
        
        {/* Animated particles */}
        {theme === "dark" && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#F97316] rounded-full"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                  y: [0, (Math.random() - 0.5) * 30],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 0.2 + (i * 0.1),
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />
            ))}
          </>
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
