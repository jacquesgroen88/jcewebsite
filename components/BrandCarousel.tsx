
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const BrandCarousel: React.FC = () => {
    // Ensure we have enough logos to scroll smoothly by duplicating if necessary
    // If we only have 1 logo (as currently known), we repeat it many times
    const displayLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <div className="py-12 border-y border-white/5 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-text-secondary">Trusted By Industry Leaders</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-background to-transparent" />

                <div className="flex gap-16 animate-scroll whitespace-nowrap items-center hover:pause-animation">
                    {displayLogos.map((logo, idx) => (
                        <div key={idx} className="w-32 h-16 md:w-48 md:h-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 flex items-center justify-center">
                            <img src={logo} alt="Partner Brand" className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandCarousel;
