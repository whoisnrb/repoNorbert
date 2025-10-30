'use client';

import { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import FloatingNav from '../components/FloatingNav';
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
      <FloatingNav
        nav={content.nav}
        languageLabel={content.languageLabel}
        languages={languageOptions}
        language={language}
        onLanguageChange={setLanguage}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-900" />
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
      </div>
      <Hero content={content.hero} />
      <Features content={content.features} />
      <Pricing content={content.pricing} />
      <Contact content={content.contact} />
      <footer className="py-8 text-center text-sm text-slate-300">{content.footer}</footer>
    </main>
  );
}
