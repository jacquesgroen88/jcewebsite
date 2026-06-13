import React from 'react';

/**
 * On-brand visual panel. With an `image` it frames a generated brand image
 * behind a subtle scrim + corner ticks; otherwise it renders an abstract
 * grid + accent glow + centred icon. Purely decorative.
 */
interface BrandVisualProps {
  icon?: React.ReactNode;
  image?: string;
  alt?: string;
  label?: string;
  className?: string;
  glowClass?: string;
}

const BrandVisual: React.FC<BrandVisualProps> = ({
  icon,
  image,
  alt = '',
  label,
  className = '',
  glowClass = 'bg-accent/25',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-surface group ${className}`}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)',
            }}
          />
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 ${glowClass} blur-[70px] rounded-full`} />
          {icon && (
            <div className="absolute inset-0 flex items-center justify-center text-accent/90">
              <div className="[&>svg]:w-16 [&>svg]:h-16 md:[&>svg]:w-20 md:[&>svg]:h-20">{icon}</div>
            </div>
          )}
        </>
      )}

      {label && (
        <div className="absolute bottom-5 left-6 z-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          {label}
        </div>
      )}

      {/* corner ticks */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/30 rounded-tl-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/30 rounded-br-3xl pointer-events-none" />
    </div>
  );
};

export default BrandVisual;
