'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo.svg';

export default function FloatingNav({ nav, languageLabel, languages, language, onLanguageChange }) {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.1, 0.35]);
  const blurAmount = useTransform(scrollY, [0, 300], [4, 18]);
  const background = useMotionTemplate`rgba(15, 23, 42, ${backgroundOpacity})`;
  const blur = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.nav
      style={{
        background,
        backdropFilter: blur
      }}
      className="fixed left-1/2 top-6 z-50 w-[90%] max-w-4xl -translate-x-1/2 rounded-full border border-white/10 px-6 py-3 shadow-lg shadow-blue-500/10"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="WhoisAutomations logo" width={32} height={32} className="drop-shadow" />
          <span className="text-sm font-medium tracking-wide text-slate-100">WhoisAutomations</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
            <a href="#features" className="transition hover:text-white">
              {nav.features}
            </a>
            <a href="#pricing" className="transition hover:text-white">
              {nav.pricing}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {nav.contact}
            </a>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <span className="hidden md:inline">{languageLabel}</span>
            <div className="relative">
              <select
                value={language}
                onChange={(event) => onLanguageChange?.(event.target.value)}
                className="appearance-none rounded-full border border-white/10 bg-white/10 px-4 py-1.5 pr-8 text-sm text-slate-100 shadow-inner shadow-white/5 transition focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                aria-label={languageLabel}
              >
                {languages.map(({ code, label }) => (
                  <option key={code} value={code} className="text-slate-900">
                    {label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-200">▾</span>
            </div>
          </label>
        </div>
      </div>
    </motion.nav>
  );
}
