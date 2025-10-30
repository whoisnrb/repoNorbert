'use client';

import { motion } from 'framer-motion';

export default function Templates({ content }) {
  const { id, eyebrow, title, categories, cta } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
          </div>
          <a
            href={cta.href}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-white"
          >
            {cta.label}
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              <p className="mt-4 text-slate-200">{category.description}</p>
              <div className="mt-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                120+ templates
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
