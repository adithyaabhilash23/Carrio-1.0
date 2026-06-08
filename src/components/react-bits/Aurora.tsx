import React from 'react';

interface AuroraProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
}

export const Aurora: React.FC<AuroraProps> = ({
  className = '',
  color1 = 'rgba(14, 124, 106, 0.12)', // teal
  color2 = 'rgba(11, 31, 58, 0.08)',   // navy
  color3 = 'rgba(245, 166, 35, 0.03)',  // gold
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <div 
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full filter blur-[100px] opacity-70 animate-aurora-slow"
        style={{ backgroundColor: color1 }}
      />
      <div 
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full filter blur-[100px] opacity-60 animate-aurora-slow"
        style={{ backgroundColor: color2, animationDelay: '-5s' }}
      />
      <div 
        className="absolute top-[25%] left-[30%] w-[40%] h-[40%] rounded-full filter blur-[80px] opacity-50 animate-aurora-slow"
        style={{ backgroundColor: color3, animationDelay: '-10s' }}
      />
    </div>
  );
};
