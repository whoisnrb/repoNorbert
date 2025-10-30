'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero({ content }) {
  const { badge, eyebrow, title, description, primaryCta, secondaryCta } = content;

  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-40 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.28),transparent_55%)]" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[180px]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-80 w-[28rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={container}
        className="glass-panel mx-auto max-w-4xl border-white/20 p-12 shadow-glow"
      >
        {badge && (
          <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
            {badge}
          </span>
        )}
        <p className="mt-8 text-sm uppercase tracking-[0.6em] text-slate-200">{eyebrow}</p>
        <motion.h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {title}
        </motion.h1>
        <motion.p className="mt-6 text-lg leading-relaxed text-slate-200">
          {description}
        </motion.p>
        <motion.div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryCta.href}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary via-cyan-300 to-secondary px-8 py-3 text-base font-semibold text-slate-900 shadow-xl shadow-cyan-500/40 transition hover:scale-105"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-base font-medium text-slate-100 transition hover:border-cyan-300/70 hover:text-white"
          >
            {secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
