
import React, { useEffect } from 'react';
import { X, Play, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';
import Button from './Button';

interface CaseStudyModalProps {
    isOpen: boolean;
    onClose: () => void;
    caseStudy: CaseStudy | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !caseStudy) return null;

    // Helper to get YouTube ID
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = caseStudy.video ? getYouTubeId(caseStudy.video) : null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            <div className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-scale-in">

                {/* Header / Close Button */}
                <div className="absolute top-4 right-4 z-10">
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 transition-colors backdrop-blur-sm"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="overflow-y-auto no-scrollbar flex-1">
                    {/* Hero Section of Modal */}
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Media Side */}
                        <div className="relative min-h-[300px] lg:h-auto bg-black">
                            {videoId ? (
                                <div className="w-full h-full flex items-center bg-black">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="aspect-video w-full"
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={caseStudy.image}
                                    alt={caseStudy.client}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 space-y-8 bg-surface">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-4">
                                    {caseStudy.category}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2">{caseStudy.client}</h2>
                                <div className="w-20 h-1 bg-accent mt-4 mb-6" />
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                {caseStudy.challenge && (
                                    <div>
                                        <h3 className="text-xl font-bold uppercase text-white mb-2">The Challenge</h3>
                                        <p className="text-text-secondary leading-relaxed">{caseStudy.challenge}</p>
                                    </div>
                                )}
                                {caseStudy.solution && (
                                    <div>
                                        <h3 className="text-xl font-bold uppercase text-white mb-2">The Solution</h3>
                                        <p className="text-text-secondary leading-relaxed">{caseStudy.solution}</p>
                                    </div>
                                )}
                            </div>

                            {caseStudy.features && caseStudy.features.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-bold uppercase text-white mb-3">Key Features</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.features.map((feature, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-text-secondary">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {caseStudy.results && (
                                <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                                    <h3 className="text-xl font-bold uppercase text-accent mb-2">The Results</h3>
                                    <p className="text-white leading-relaxed">{caseStudy.results}</p>
                                </div>
                            )}

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <p className="text-3xl font-bold text-white mb-1">{caseStudy.stat}</p>
                                    <p className="text-xs font-mono uppercase text-text-secondary">{caseStudy.statLabel}</p>
                                </div>
                                {/* Placeholder for generic stat if not available in data yet */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                    <p className="text-3xl font-bold text-accent">AI</p>
                                    <p className="text-xs font-mono uppercase text-text-secondary">Powered Engine</p>
                                </div>
                            </div>

                            {caseStudy.testimonial && (
                                <blockquote className="border-l-4 border-accent pl-6 italic text-text-secondary text-lg">
                                    "{caseStudy.testimonial}"
                                </blockquote>
                            )}

                            <div className="pt-4">
                                <Button variant="primary" glow className="w-full justify-center py-4 text-lg">
                                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Section */}
                    {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                        <div className="p-8 md:p-12 border-t border-white/10 bg-background/50">
                            <h3 className="text-2xl font-bold uppercase mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-accent block" />
                                Campaign Visuals
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {caseStudy.gallery.map((img, idx) => (
                                    <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 shadow-lg group cursor-pointer">
                                        <img
                                            src={img}
                                            alt={`Gallery ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
