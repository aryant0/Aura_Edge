
import React from "react";

export function FloatingShape({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-full bg-aura-orange/30 animate-float blur-3xl ${className}`}
    >
      {children}
    </div>
  );
}

export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={`v-${i}`}
            className="h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
          />
        ))}
      </div>
      
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={`h-${i}`}
            className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
          />
        ))}
      </div>
    </div>
  );
}

export function AnimatedBackground() {
  return (
    <>
      <GridBackground />
      <FloatingShape className="w-[400px] h-[400px] -top-20 -left-20 animate-pulse-glow" />
      <FloatingShape className="w-[300px] h-[300px] top-1/3 -right-20 animate-pulse-glow animation-delay-2000" />
      <FloatingShape className="w-[500px] h-[500px] -bottom-60 left-1/3 animate-pulse-glow animation-delay-4000" />
    </>
  );
}
