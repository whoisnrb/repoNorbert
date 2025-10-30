'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import FloatingNav from '../components/FloatingNav';
import Stats from '../components/Stats';
import LogoTicker from '../components/LogoTicker';
import ProductSection from '../components/ProductSection';
import AutomationShowcase from '../components/AutomationShowcase';
import Solutions from '../components/Solutions';
import Templates from '../components/Templates';
import Integrations from '../components/Integrations';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Resources from '../components/Resources';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import translations from '../lib/translations';

const languageOptions = Object.entries(translations).map(([code, value]) => ({
  code,
  label: value.languageName
}));

export default function Home() {
  const [language, setLanguage] = useState('en');
  const content = translations[language];

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.35),transparent_60%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_10%_80%,rgba(56,189,248,0.2),transparent_65%)]" />
      <FloatingNav
        nav={content.nav}
        languageLabel={content.languageLabel}
        languages={languageOptions}
        language={language}
        onLanguageChange={setLanguage}
      />
      <Hero content={content.hero} />
      <Stats content={content.metrics} />
      <LogoTicker content={content.logos} />
      <ProductSection content={content.product} />
      <AutomationShowcase content={content.automations} />
      <Solutions content={content.solutions} />
      <Templates content={content.templates} />
      <Integrations content={content.integrations} />
      <Testimonials content={content.testimonials} />
      <Pricing content={content.pricing} />
      <Resources content={content.resources} />
      <CTASection content={content.cta} />
      <Footer content={content.footer} />
    </main>
  );
}
