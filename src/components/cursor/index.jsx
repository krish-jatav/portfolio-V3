"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorRef.current.style.left = `${event.pageX}px`;
      cursorRef.current.style.top = `${event.pageY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <motion.div className="h-[1rem] z-[999] fixed w-[1rem] rounded-full  bg-slate-100"
      ref={cursorRef}
       transition={{  duration: 10 }}>
      </motion.div>
  );
};