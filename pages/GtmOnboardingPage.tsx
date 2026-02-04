
import React, { useEffect } from 'react';

const GtmOnboardingPage: React.FC = () => {
    useEffect(() => {
        // Load the external script for the form embed
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Onboarding</span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-none">
                        <span className="gradient-shimmer">GTM ONBOARDING</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-body leading-relaxed">
                        Please complete the survey below to help us understand your business goals and accelerate your GTM strategy.
                    </p>
                </div>

                <div className="bg-surface/30 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-4 md:p-8 shadow-2xl overflow-hidden relative">
                    {/* Border Beam Effect Overlay */}
                    <div className="absolute inset-0 pointer-events-none border-beam-container">
                        <div className="border-beam" />
                    </div>

                    <div className="relative z-10 w-full min-h-[600px]">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/survey/nqNphMiH7DAUkUhIQ2Zl"
                            style={{ border: 'none', width: '100%', minHeight: '800px' }}
                            scrolling="no"
                            id="nqNphMiH7DAUkUhIQ2Zl"
                            title="survey"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GtmOnboardingPage;
