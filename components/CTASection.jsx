'use client';

import { motion } from 'framer-motion';

export default function CTASection({ content }) {
  const { id, title, description, primaryCta, secondaryCta } = content;

  return (
    <section id={id} className="px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-white/10 to-transparent p-12 text-center shadow-glow backdrop-blur-xl"
      >
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        <p className="mt-6 text-lg text-slate-200">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={primaryCta.href}
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-xl shadow-cyan-500/40 transition hover:scale-105"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-white"
          >
            {secondaryCta.label}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
