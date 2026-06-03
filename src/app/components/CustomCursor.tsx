import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
            isHovering
              ? 'border-red-500 bg-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.6)]'
              : 'border-red-500 bg-red-500/10'
          }`}
        />
      </motion.div>
      
      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen hidden lg:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-50 blur-sm" />
      </motion.div>
    </>
  );
}
