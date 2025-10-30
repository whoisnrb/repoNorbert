'use client';

import { motion } from 'framer-motion';

export default function ProductSection({ content }) {
  const { id, eyebrow, title, description, features, highlight } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
          <p className="mt-6 text-lg text-slate-200">{description}</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-glow"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.35),transparent_65%)]" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">{highlight.title}</h3>
              <p className="mt-4 text-slate-200">{highlight.description}</p>
              <div className="mt-10 grid gap-3 text-sm text-slate-200/90">
                {highlight.points?.map((point) => (
                  <span key={point} className="inline-flex items-center gap-2 text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
