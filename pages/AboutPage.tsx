
import React, { useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import TestimonialVideo from '../components/TestimonialVideo';
import { CLIENT_LOGOS } from '../constants';

const AboutPage: React.FC = () => {
  const pillarsRef = useRef<HTMLDivElement>(null);

  const scrollToPillars = () => {
    pillarsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em]">The JCE Story</span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
              REDEFINING <span className="chrome-text">GROWTH</span> THROUGH <span className="text-accent">SYSTEMS</span>
            </h1>
            <div className="space-y-6 text-xl text-text-secondary font-body leading-relaxed">
              <p>
                In a world drowning in noise, JCE Media was born from a singular realization: <span className="text-white font-semibold">Traditional marketing is broken.</span>
              </p>
              <p>
                Most agencies focus on vanity metrics. We focus on <span className="text-white font-semibold">Architecture.</span> We build autonomous, systems-driven engines that don't just "generate buzz"—they generate scalable, predictable ROI.
              </p>
              <p>
                From automating 949 Facebook leads in 60 days to moving 70,000 prospects into active pipelines, our mission is to eliminate the guesswork by engineering growth through robust systems.
              </p>
            </div>
            <div className="pt-6">
              <Button variant="primary" glow className="px-10 py-5" onClick={scrollToPillars}>Our Method</Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Systems Architecture"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />


              <div className="absolute bottom-8 left-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-xs">
                <p className="text-xs font-mono uppercase text-accent mb-2 tracking-widest">Philosophy</p>
                <p className="text-sm italic text-white/80">"Efficiency is the only true competitive advantage in the 21st century."</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Pillars */}
        <div className="mb-32" ref={pillarsRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase">OUR CORE <span className="text-accent">PILLARS</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hasBeam className="p-10 space-y-6">
              <div className="text-4xl">01</div>
              <h3 className="text-2xl font-bold uppercase text-accent">SYSTEMS-ENGINEERED</h3>
              <p className="text-text-secondary leading-relaxed font-body">
                We don't just "run ads"—we build autonomous growth architectures. Our systems leverage AI to ensure maximum speed and hyper-personalization at scale.
              </p>
            </Card>

            <Card hasBeam className="p-10 space-y-6">
              <div className="text-4xl">02</div>
              <h3 className="text-2xl font-bold uppercase text-accent">DATA OBSESSION</h3>
              <p className="text-text-secondary leading-relaxed font-body">
                Decisions aren't made on "gut feelings." We monitor every point of the funnel with rigorous analytics to ensure continuous optimization.
              </p>
            </Card>

            <Card hasBeam className="p-10 space-y-6">
              <div className="text-4xl">03</div>
              <h3 className="text-2xl font-bold uppercase text-accent">ROI DRIVEN</h3>
              <p className="text-text-secondary leading-relaxed font-body">
                If it doesn't move the needle on revenue, we don't build it. Our systems are precision-engineered for financial impact.
              </p>
            </Card>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-32">
          <div className="mb-16">
            <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              Meet The <span className="chrome-text">Leadership</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"> {/* 3. Change Leadership grid max-width to max-w-6xl */}
            {/* Jacques */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface mb-4">
                <img
                  src="/assets/case-studies/jacques.jpg"
                  alt="Jacques Groenewald"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transpose to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-4xl md:text-5xl font-bold uppercase mb-1">Jacques Groenewald</h3> {/* 4. Increase overlay text size */}
                  <p className="text-accent font-mono text-xs tracking-widest uppercase">Chief Executive Officer</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed text-center md:text-left">
                Visionary leader focused on leveraging AI to disrupt traditional marketing models.
              </p>
            </div>

            {/* Diane */}
            <div className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface mb-4">
                <img
                  src="/assets/case-studies/diane.png"
                  alt="Diane Colquhoun"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transpose to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-4xl md:text-5xl font-bold uppercase mb-1">Diane Colquhoun</h3> {/* 4. Increase overlay text size */}
                  <p className="text-accent font-mono text-xs tracking-widest uppercase">Chief Operating Officer</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed text-center md:text-left">
                The operational backbone of JCE Media. Diane ensures that our complex AI systems integrate seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Global Testimonial */}
        <TestimonialVideo />

        {/* Global Impact Grid */}
        <div className="py-24 border-y border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold chrome-text mb-2">12+</p>
              <p className="text-xs font-mono uppercase tracking-widest text-text-secondary">Countries</p>
            </div>
            <div>
              <p className="text-5xl font-bold chrome-text mb-2">50M+</p>
              <p className="text-xs font-mono uppercase tracking-widest text-text-secondary">Ad Spend Managed</p>
            </div>
            <div>
              <p className="text-5xl font-bold chrome-text mb-2">98%</p>
              <p className="text-xs font-mono uppercase tracking-widest text-text-secondary">Client Retention</p>
            </div>
            <div>
              <p className="text-5xl font-bold chrome-text mb-2">24/7</p>
              <p className="text-xs font-mono uppercase tracking-widest text-text-secondary">System Monitoring</p>
            </div>
          </div>
        </div>

        {/* Closing Vision */}
        <div className="mt-32 text-center max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">JOIN THE <span className="text-accent">REVOLUTION</span></h2>
          <p className="text-2xl text-text-secondary leading-relaxed">
            We are looking for partners, not just clients. Businesses who are ready to abandon the old ways and embrace the future of autonomous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button variant="primary" glow className="px-12 py-6 text-xl">Let's Build Together</Button>
            <Button variant="outline" className="px-12 py-6 text-xl">View Case Studies</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
