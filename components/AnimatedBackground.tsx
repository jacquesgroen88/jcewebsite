import React from 'react';

/**
 * Ambient background glow. Deliberately restrained — two low-opacity tones in
 * the brand's blue family (not the old four-hue blue/purple/pink/green mesh
 * that read as a generic "AI" gradient).
 */
const AnimatedBackground: React.FC = () => {
  return (
    <div className="mesh-gradient" aria-hidden="true">
      <div
        className="mesh-ball bg-accent animate-mesh-slow"
        style={{ width: '620px', height: '620px', top: '4%', left: '-12%', opacity: 0.22 }}
      />
      <div
        className="mesh-ball bg-indigo-700 animate-mesh-slow"
        style={{ width: '560px', height: '560px', bottom: '4%', right: '-8%', animationDelay: '-20s', opacity: 0.2 }}
      />
      <div
        className="mesh-ball bg-blue-900 animate-mesh-slow"
        style={{ width: '480px', height: '480px', top: '48%', left: '38%', animationDelay: '-38s', opacity: 0.18 }}
      />
    </div>
  );
};

export default AnimatedBackground;
