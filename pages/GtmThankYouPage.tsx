
import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const GtmThankYouPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 px-6 animate-fade-in flex items-center justify-center min-h-[80vh]">
            <div className="max-w-3xl w-full mx-auto">
                <Card hasBeam className="text-center p-12 md:p-24 bg-surface/40 backdrop-blur-3xl border-white/5 rounded-[3rem] shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-40" />

                    <div className="relative z-10 space-y-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border border-accent/20 text-accent mb-4">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                            <span className="gradient-shimmer">THANK YOU</span>
                        </h1>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl text-white font-medium">
                                Submission Received.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed font-body">
                                Our team will review your feedback immediately. A dedicated strategist will reach out shortly to schedule your high-performance <span className="text-accent">onboarding call</span>.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Button
                                variant="primary"
                                glow
                                className="px-10 py-4"
                                onClick={() => window.location.hash = ''}
                            >
                                Return to Command Center
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default GtmThankYouPage;
