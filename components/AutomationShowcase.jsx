'use client';

import { motion } from 'framer-motion';

export default function AutomationShowcase({ content }) {
  const { id, eyebrow, title, flows, caption } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {flows.map((flow) => (
            <motion.div
              key={flow.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-transparent p-8 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-white">{flow.title}</h3>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {flow.steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.7)]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs uppercase tracking-[0.3em] text-cyan-200">
                Flow builder
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-300">{caption}</p>
      </div>
    </section>
  );
}
