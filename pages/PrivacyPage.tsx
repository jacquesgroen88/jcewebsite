
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Written against what the site actually does, not a template. As of Aug 2026
 * there are no analytics scripts, no advertising pixels and no cookie banner
 * because there are no tracking cookies to consent to. If a pixel or analytics
 * tag is ever added, the "What we do not do" section below has to change with
 * it — an inaccurate privacy policy is worse than none.
 */

const LAST_UPDATED = '5 August 2026';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{title}</h2>
    <div className="space-y-4 text-text-secondary font-body leading-relaxed">{children}</div>
  </section>
);

const PrivacyPage: React.FC = () => (
  <div className="pt-32 pb-24 px-6 animate-fade-in">
    <div className="max-w-3xl mx-auto">

      <span className="text-accent font-mono text-sm uppercase tracking-[0.3em]">Legal</span>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none mt-6 mb-4">
        PRIVACY POLICY
      </h1>
      <p className="text-sm text-text-secondary font-mono uppercase tracking-widest mb-16">
        Last updated {LAST_UPDATED}
      </p>

      <Section title="Who we are">
        <p>
          This website is operated by <span className="text-white font-semibold">Duel Digital (Pty) Ltd</span>,
          trading as JCE Media, a company registered in South Africa. We are the responsible party for the
          personal information described below, as that term is used in the Protection of Personal Information
          Act, 2013 (POPIA).
        </p>
        <p>
          For anything in this policy, contact us at{' '}
          <a
            href="mailto:jacques@jcemedia.com"
            className="text-accent hover:text-white transition-colors underline underline-offset-4"
          >
            jacques@jcemedia.com
          </a>
          .
        </p>
      </Section>

      <Section title="What we collect">
        <p>We collect personal information in one situation only: when you choose to send it to us.</p>
        <p>
          If you submit the contact form, we receive your <span className="text-white">name</span>, your{' '}
          <span className="text-white">email address</span>, the <span className="text-white">subject</span> you
          selected, and the <span className="text-white">message</span> you wrote. If you request a resource such
          as the AI Toolkit, we receive the details you enter on that form.
        </p>
        <p>
          Our web host records standard server logs, including IP addresses, as part of serving and securing the
          site. We do not use these logs to build a profile of you.
        </p>
      </Section>

      <Section title="What we do not do">
        <p>
          We do not run analytics scripts, advertising pixels or third-party tracking cookies on this website.
          There is no cookie consent banner because there are no tracking cookies to consent to.
        </p>
        <p>We do not sell your personal information, and we do not share it with data brokers.</p>
      </Section>

      <Section title="Why we use it and for how long">
        <p>
          We use what you send us to reply to you, to prepare a proposal if you have asked for one, and to keep a
          record of our correspondence. If you become a client, we use your details to deliver the work and to
          invoice you.
        </p>
        <p>
          We may send you follow-up email about the enquiry you made. Every marketing email includes an
          unsubscribe link, and you can ask us to stop at any time by replying or emailing us directly.
        </p>
        <p>
          We keep enquiry records for as long as there is a reasonable prospect of doing business together, and
          client records for as long as South African tax and company law requires us to.
        </p>
      </Section>

      <Section title="Who else touches your data">
        <p>
          We use a small number of service providers to run the business. The ones relevant to this website are
          our web host, which serves the site and processes form submissions, and our customer relationship
          management platform, where enquiries are stored so we can respond to them. Both process the
          information on our instructions.
        </p>
        <p>
          Some of these providers operate servers outside South Africa. Where that is the case, we rely on their
          contractual data protection commitments to keep the information protected to a comparable standard.
        </p>
      </Section>

      <Section title="Your rights">
        <p>Under POPIA you may ask us to:</p>
        <ul className="space-y-2 pl-1">
          {[
            'Tell you what personal information we hold about you',
            'Correct anything that is wrong or out of date',
            'Delete your information, where we are not required to keep it',
            'Stop sending you marketing communication',
            'Object to how we are using your information',
          ].map((right) => (
            <li key={right} className="flex gap-3">
              <span className="text-accent mt-2.5 shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
              {right}
            </li>
          ))}
        </ul>
        <p>
          Email{' '}
          <a
            href="mailto:jacques@jcemedia.com"
            className="text-accent hover:text-white transition-colors underline underline-offset-4"
          >
            jacques@jcemedia.com
          </a>{' '}
          and we will action it. If you are not satisfied with how we handled your request, you have the right to
          complain to the Information Regulator of South Africa.
        </p>
      </Section>

      <Section title="Security">
        <p>
          Form submissions are sent over an encrypted connection. Access to our customer records is restricted to
          people who need it to do the work. No system is perfect, and we will not pretend otherwise, but we do
          not hold payment card details on this website and we do not store passwords you have given us.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If we change how we handle personal information, we will update this page and change the date at the
          top. Material changes to how we use information you have already given us will be communicated
          directly.
        </p>
      </Section>

      <div className="pt-8 border-t border-border">
        <Link
          to="/contact"
          className="text-accent hover:text-white transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          Questions about any of this? Get in touch.
        </Link>
      </div>

    </div>
  </div>
);

export default PrivacyPage;
