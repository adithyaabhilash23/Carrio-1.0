import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rX = -(mouseY / (height / 2)) * 10; 
    const rY = (mouseX / (width / 2)) * 10;

    rotateX.set(rX);
    rotateY.set(rY);

    const px = ((e.clientX - rect.left) / width) * 100;
    const py = ((e.clientY - rect.top) / height) * 100;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(400px circle at ${x}% ${y}%, rgba(14, 124, 106, 0.08), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-100 transition-opacity"
        style={{ background: spotlightBg }}
      />
      <div style={{ transform: 'translateZ(10px)' }}>{children}</div>
    </motion.div>
  );
};
