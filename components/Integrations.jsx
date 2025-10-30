'use client';

import { motion } from 'framer-motion';

export default function Integrations({ content }) {
  const { id, eyebrow, title, description, categories, cta } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
            <p className="mt-6 text-lg text-slate-200">{description}</p>
          </div>
          <a
            href={cta.href}
            className="inline-flex items-center rounded-full border border-cyan-300/50 px-6 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
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
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
                {category.apps.map((app) => (
                  <span key={app} className="rounded-full border border-white/10 bg-white/5 px-4 py-1">
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
