
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Connect with JCE</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-none">
            LET'S BUILD THE <span className="chrome-text">FUTURE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-body leading-relaxed">
            Ready to integrate autonomous systems into your business? Our team is standing by to audit your current workflows and identify massive growth opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card hasBeam className="p-8 md:p-12 bg-surface/40 backdrop-blur-xl border-white/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="group space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="group space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="group space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">How can we help?</label>
                  <select className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none cursor-pointer">
                    <option>AI Marketing Automation</option>
                    <option>Sales Flow Optimization</option>
                    <option>Enterprise Integration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="group space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Your Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your current systems and scaling goals..." 
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20 resize-none"
                  ></textarea>
                </div>

                <Button variant="primary" glow className="w-full py-5 text-lg shadow-2xl shadow-accent/20">
                  Initialize Transmission
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-accent">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-text-secondary uppercase">Email</p>
                    <p className="text-lg font-bold">hello@jcemedia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-text-secondary uppercase">Location</p>
                    <p className="text-lg font-bold">London | New York | Remote</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-accent">System Status</h3>
              <Card className="bg-background/40 border-accent-green/20 p-6">
                <div className="flex items-center gap-4">
                   <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                   </div>
                   <div>
                     <p className="text-sm font-bold uppercase tracking-widest text-accent-green">Operating Normally</p>
                     <p className="text-xs text-text-secondary">AI Optimization Core: ONLINE</p>
                   </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-accent">Global Network</h3>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-surface group">
                 <img 
                    src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2000&auto=format&fit=crop" 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
                    alt="World Map Network"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping shadow-[0_0_20px_rgba(59,130,246,1)]" style={{ top: '30%', left: '45%' }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping shadow-[0_0_20px_rgba(59,130,246,1)]" style={{ top: '40%', left: '20%', animationDelay: '1s' }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-ping shadow-[0_0_20px_rgba(59,130,246,1)]" style={{ top: '60%', left: '70%', animationDelay: '2s' }} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
