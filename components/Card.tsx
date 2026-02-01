
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hasBeam?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hasBeam = false }) => {
  return (
    <div className={`
      relative group bg-surface border border-border p-8 rounded-2xl 
      transition-all duration-500 ease-out 
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40
      ${className}
    `}>
      {/* Content Reveal Overlay Background (subtle) */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      {/* Border Beam */}
      {hasBeam && (
        <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute h-[1px] w-[50%] top-0 left-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-beam" />
          <div className="absolute h-[50%] w-[1px] top-0 right-0 bg-gradient-to-b from-transparent via-accent to-transparent animate-beam delay-700" />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
