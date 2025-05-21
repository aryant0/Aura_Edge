
import { useEffect, useRef, useState } from 'react';

type ScrollRevealOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
  origin?: 'top' | 'bottom' | 'left' | 'right';
  rotate?: number;
  scale?: number;
  opacity?: number;
  reset?: boolean;
};

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    once = true,
    delay = 0,
    duration = 0.6,
    distance = 30,
    origin = 'bottom',
    rotate = 0,
    scale = 1,
    opacity = 0,
    reset = false,
  } = options;
  
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (once && !reset) observer.unobserve(element);
        } else if (!once || reset) {
          setIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once, reset]);

  // Generate animation properties based on options
  const getInitialStyles = () => {
    let transform = '';
    let initialOpacity = opacity;
    
    switch (origin) {
      case 'top':
        transform += `translateY(-${distance}px) `;
        break;
      case 'bottom':
        transform += `translateY(${distance}px) `;
        break;
      case 'left':
        transform += `translateX(-${distance}px) `;
        break;
      case 'right':
        transform += `translateX(${distance}px) `;
        break;
    }
    
    if (rotate !== 0) {
      transform += `rotate(${rotate}deg) `;
    }
    
    if (scale !== 1) {
      transform += `scale(${scale}) `;
    }
    
    return {
      transform,
      opacity: initialOpacity,
      transition: `all ${duration}s ease ${delay}s`,
    };
  };

  const getAnimatedStyles = () => {
    return {
      transform: 'translateY(0) translateX(0) rotate(0) scale(1)',
      opacity: 1,
      transition: `all ${duration}s ease ${delay}s`,
    };
  };
  
  return {
    ref,
    isIntersecting,
    initialStyles: getInitialStyles(),
    animatedStyles: getAnimatedStyles(),
    styles: isIntersecting ? getAnimatedStyles() : getInitialStyles(),
  };
}
