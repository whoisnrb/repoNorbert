'use client';

import { motion } from 'framer-motion';

export default function Pricing({ content }) {
  const { id, eyebrow, title, plans, footnote } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`flex h-full flex-col rounded-[2rem] border ${
                plan.highlighted ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 via-white/10 to-transparent shadow-glow' : 'border-white/10 bg-white/5'
              } p-8 backdrop-blur-xl`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1 text-white">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-slate-300">{plan.cadence}</span>
                </div>
                <p className="mt-4 text-sm text-slate-200">{plan.description}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.cta.href}
                className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-slate-900 shadow-lg shadow-cyan-500/40 hover:scale-105'
                    : 'border border-white/20 text-slate-100 hover:border-cyan-300/60 hover:text-white'
                }`}
              >
                {plan.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-300">{footnote}</p>
      </div>
    </section>
  );
}
