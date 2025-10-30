'use client';

import { motion } from 'framer-motion';

export default function Solutions({ content }) {
  const { id, eyebrow, title, cards, cta } = content;

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
            className="inline-flex items-center rounded-full border border-cyan-300/50 px-6 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
          >
            {cta.label}
          </a>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 text-slate-200">{card.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 flex-none rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
