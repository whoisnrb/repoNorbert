'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo.svg';

export default function FloatingNav({ nav, languageLabel, languages, language, onLanguageChange }) {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.12, 0.45]);
  const blurAmount = useTransform(scrollY, [0, 300], [12, 24]);
  const background = useMotionTemplate`rgba(15, 23, 42, ${backgroundOpacity})`;
  const blur = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.nav
      style={{ background, backdropFilter: blur }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 px-6 py-3 shadow-2xl shadow-cyan-500/20"
    >
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <Image src={logo} alt="WhoisAutomations logo" width={36} height={36} className="drop-shadow" />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-100">
            {nav.brand}
          </span>
        </a>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
            {nav.items.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <label className="hidden items-center gap-2 text-sm text-slate-200 md:flex">
            <span className="hidden xl:inline">{languageLabel}</span>
            <div className="relative">
              <select
                value={language}
                onChange={(event) => onLanguageChange?.(event.target.value)}
                className="appearance-none rounded-full border border-white/10 bg-white/10 px-4 py-1.5 pr-8 text-sm text-slate-100 shadow-inner shadow-white/5 transition focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
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
          {nav.secondary && (
            <a
              href={nav.secondary.href}
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300/60 hover:text-white md:inline-flex"
            >
              {nav.secondary.label}
            </a>
          )}
          {nav.primary && (
            <a
              href={nav.primary.href}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary via-cyan-400 to-secondary px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:scale-105"
            >
              {nav.primary.label}
            </a>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
