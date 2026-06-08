import React, { useRef, useEffect } from 'react';

interface PixelTrailProps {
  className?: string;
  color?: string;
  pixelSize?: number;
  delay?: number;
}

export const PixelTrail: React.FC<PixelTrailProps> = ({
  className = '',
  color = '#0E7C6A', // teal
  pixelSize = 8,
  delay = 24, // maxAge in frames
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; age: number; maxAge: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      pointsRef.current.push({
        x: Math.floor(x / pixelSize) * pixelSize,
        y: Math.floor(y / pixelSize) * pixelSize,
        age: 0,
        maxAge: delay,
      });
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.age++;

        const alpha = Math.max(0, 1 - p.age / p.maxAge);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fillRect(p.x, p.y, pixelSize, pixelSize);
      }

      pointsRef.current = points.filter((p) => p.age < p.maxAge);
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationId);
    };
  }, [color, pixelSize, delay]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-10 w-full h-full ${className}`}
    />
  );
};
