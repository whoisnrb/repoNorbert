'use client';

import { motion } from 'framer-motion';

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero({ content }) {
  const { title, subtitle, cta } = content;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="glass-panel mx-auto max-w-3xl p-10 shadow-glow"
      >
        <motion.h1 variants={heroVariant} className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {title}
        </motion.h1>
        <motion.p variants={heroVariant} className="mt-6 text-lg leading-relaxed text-slate-200">
          {subtitle}
        </motion.p>
        <motion.div variants={heroVariant} className="mt-10">
          <a
            href="#features"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 text-base font-medium text-slate-900 shadow-lg shadow-cyan-500/40 transition hover:scale-105"
          >
            {cta}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
