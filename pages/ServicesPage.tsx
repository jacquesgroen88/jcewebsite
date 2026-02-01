
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  const detailedServices = [
    {
      title: "AI-Powered Marketing",
      subtitle: "Hyper-Personalized Growth Engines",
      description: "Stop guessing and start predicting. We build AI systems that analyze user behavior in real-time to deliver the right message at the perfect moment.",
      features: ["Predictive Analytics", "Dynamic Content Personalization", "Automated Ad Optimization", "Sentiment Analysis"],
      icon: "⚡",
      color: "bg-blue-500/10"
    },
    {
      title: "Intelligent Sales",
      subtitle: "Close Faster with AI CRM",
      description: "Bridge the gap between lead generation and revenue. Our AI-driven sales systems identify your highest-value prospects and automate follow-ups that sound human.",
      features: ["AI Lead Scoring", "Automated Outreach Sequences", "CRM Data Enrichment", "Predictive Forecasting"],
      icon: "🚀",
      color: "bg-green-500/10"
    },
    {
      title: "Business Automation",
      subtitle: "Operational Excellence at Scale",
      description: "Free your team from repetitive tasks. We automate cross-departmental workflows, reducing human error and boosting efficiency by up to 80%.",
      features: ["Internal Process Mapping", "Cross-Platform Integrations", "AI Document Processing", "Custom Slack/Teams Bots"],
      icon: "⚙️",
      color: "bg-purple-500/10"
    },
    {
      title: "Content Automation",
      subtitle: "Human Creativity, AI Speed",
      description: "Scale your content without losing your brand voice. We integrate Gen-AI workflows that produce months of high-quality content in minutes.",
      features: ["Brand Voice Training", "Multi-Channel Scheduling", "Automated Video Generation", "SEO Topic Clustering"],
      icon: "🎨",
      color: "bg-pink-500/10"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <span className="text-accent font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
            SYSTEMS FOR <span className="chrome-text">SCALE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-body leading-relaxed">
            We don't just provide services; we build autonomous engines that power your business growth while you sleep.
          </p>
        </div>

        {/* Detailed Grid */}
        <div className="grid gap-12">
          {detailedServices.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center py-12 border-b border-border last:border-0`}
            >
              <div className="flex-1 space-y-6">
                <div className={`w-16 h-16 rounded-2xl ${service.color} border border-white/5 flex items-center justify-center text-4xl shadow-2xl`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 uppercase">{service.title}</h2>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest">{service.subtitle}</p>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="px-8">Discuss this Solution</Button>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-video rounded-3xl overflow-hidden border border-border bg-surface shadow-2xl group">
                   <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1460925895917-afdab827c52f' : index === 1 ? '1551288049-bebda4e38f71' : index === 2 ? '1518770660439-4636190af475' : '1551288049-bebda4e38f71'}?q=80&w=2070&auto=format&fit=crop`} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                   <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/40 tracking-widest">
                      SYSTEM_MODULE_{index + 1}.EXE
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Card */}
        <div className="mt-32">
          <Card hasBeam className="text-center p-20 bg-accent overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50" />
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
               READY TO AUTOMATE?
             </h2>
             <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">
               Our consultants are ready to audit your current systems and show you where AI can unlock hidden growth.
             </p>
             <div className="flex justify-center gap-4">
                <Button variant="secondary" className="px-12 py-5 text-accent bg-white hover:bg-black hover:text-white">Book Your Audit</Button>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
