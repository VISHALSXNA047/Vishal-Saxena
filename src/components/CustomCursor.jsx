'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-indigo-600/50 pointer-events-none z-[9999] hidden md:block" />);


}
