import React from 'react';
import Card from './Card';

const TestimonialVideo: React.FC = () => {
    return (
        <div className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] block reveal opacity-100 translate-y-0 transition-all duration-700">Testimonial</span>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter reveal opacity-100 translate-y-0 transition-all duration-700 delay-100">
                        What it's like <span className="chrome-text">Working</span> with us
                    </h2>
                </div>

                <Card hasBeam className="bg-surface/30 border-white/5 backdrop-blur-2xl p-4 md:p-8 rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            preload="metadata"
                            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                        >
                            <source
                                src="/assets/testimonialvideo/JCE-Media-Digital-Ad-Campaign-Specialists.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                        {/* Decoractive Y2K Corner Elements */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-xl pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-xl pointer-events-none" />
                    </div>


                </Card>
            </div>
        </div>
    );
};

export default TestimonialVideo;
