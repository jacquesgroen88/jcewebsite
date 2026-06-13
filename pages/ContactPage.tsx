
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Globe, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import BrandVisual from '../components/BrandVisual';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState(''); // honeypot
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setSubject(service);
      setMessage(`I'm interested in learning more about ${service}...`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message, company_website: company }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please try again or email us directly.');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Get in touch</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-none">
            LET'S TALK <span className="gradient-shimmer">GROWTH</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-body leading-relaxed">
            Tell us where you want to grow. We'll audit your current setup and show you the fastest path to more leads and less busywork.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card hasBeam className="p-8 md:p-12 bg-surface/40 backdrop-blur-xl border-white/5">
              {status === 'success' ? (
                <div className="text-center py-10 space-y-5">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Message sent</h3>
                  <p className="text-text-secondary font-body max-w-md mx-auto">
                    Thanks{name ? `, ${name.split(' ')[0]}` : ''} — we've got it. A strategist will be in touch within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setStatus('idle'); setMessage(''); }}
                    className="text-accent text-sm font-mono uppercase tracking-widest hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20"
                    />
                  </div>
                  <div className="group space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20"
                    />
                  </div>
                </div>

                <div className="group space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">How can we help?</label>
                  <div className="relative">
                    <select
                      id="contact-subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all appearance-none cursor-pointer"
                    >
                      <option value="AI-Powered Marketing">AI-Powered Marketing</option>
                      <option value="Intelligent Sales">Intelligent Sales</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Content Automation">Content Automation</option>
                      <option value="Go To Market Strategy">Go To Market Strategy</option>
                      <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                      <option value="Ecommerce Systems">Ecommerce Systems</option>
                      <option value="International Scaling">International Scaling</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                  </div>
                </div>

                <div className="group space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-mono uppercase tracking-widest text-text-secondary group-focus-within:text-accent transition-colors">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current setup and what you'd like to improve..."
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all hover:border-white/20 resize-none"
                  ></textarea>
                </div>

                {/* Honeypot — hidden from users, catches bots */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="hidden"
                />

                {status === 'error' && (
                  <p className="text-sm text-red-400 font-body" role="alert">{error}</p>
                )}

                <Button variant="primary" glow disabled={status === 'submitting'} className="w-full py-5 text-lg shadow-2xl shadow-accent/20">
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  {status !== 'submitting' && (
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </Button>
              </form>
              )}
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-background/40 border-accent-green/20 p-6">
              <div className="flex items-center gap-4">
                <div className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-accent-green">Accepting new clients</p>
                  <p className="text-xs text-text-secondary">We reply within 1 business day.</p>
                </div>
              </div>
            </Card>

            <a
              href="mailto:jacques@jcemedia.com"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
            >
              <Card className="p-6 group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">Prefer email?</p>
                    <p className="text-white font-medium group-hover:text-accent transition-colors">jacques@jcemedia.com</p>
                  </div>
                </div>
              </Card>
            </a>

            <a
              href="https://wa.me/27795124292"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
            >
              <Card className="p-6 group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-secondary">Message us on WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-accent-green transition-colors">+27 79 512 4292</p>
                  </div>
                </div>
              </Card>
            </a>

            <div className="relative">
              <BrandVisual
                icon={<Globe />}
                label="Global Reach"
                className="aspect-video"
              />
              <p className="mt-3 text-sm text-text-secondary font-body">
                Working with clients across <span className="text-white">12+ countries</span> — from local South African businesses to international brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
