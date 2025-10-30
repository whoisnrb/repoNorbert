'use client';

import { motion } from 'framer-motion';

export default function Resources({ content }) {
  const { id, eyebrow, title, items } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200">{item.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm text-slate-200">{item.description}</p>
              <a
                href={item.cta.href}
                className="mt-auto inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-white"
              >
                {item.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
