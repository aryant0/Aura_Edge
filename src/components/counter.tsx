
import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  title?: string;
  className?: string;
}

export function Counter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  title,
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useScrollReveal({ threshold: 0.5, once: true });
  const countingDone = useRef(false);
  
  useEffect(() => {
    if (isIntersecting && !countingDone.current) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
          countingDone.current = true;
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isIntersecting, end, duration]);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`text-center ${className}`}
    >
      <div className="text-4xl font-bold font-heading mb-2">
        {prefix}{count}{suffix}
      </div>
      {title && <div className="text-muted-foreground">{title}</div>}
    </div>
  );
}
