import React from 'react';

interface GlassIconsProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassIcons: React.FC<GlassIconsProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-md flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:border-white/30 ${className}`}>
      {children}
    </div>
  );
};
