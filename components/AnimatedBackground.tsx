
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="mesh-gradient">
      <div 
        className="mesh-ball bg-accent animate-mesh-slow"
        style={{ width: '600px', height: '600px', top: '10%', left: '-10%' }}
      />
      <div 
        className="mesh-ball bg-purple-600 animate-mesh-slow"
        style={{ width: '500px', height: '500px', bottom: '10%', right: '-5%', animationDelay: '-10s' }}
      />
      <div 
        className="mesh-ball bg-pink-500 animate-mesh-slow"
        style={{ width: '400px', height: '400px', top: '40%', left: '30%', animationDelay: '-20s' }}
      />
      <div 
        className="mesh-ball bg-accent-green animate-mesh-slow"
        style={{ width: '550px', height: '550px', top: '60%', right: '20%', animationDelay: '-30s' }}
      />
    </div>
  );
};

export default AnimatedBackground;
