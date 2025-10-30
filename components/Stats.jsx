'use client';

import { motion } from 'framer-motion';

export default function Stats({ content }) {
  const { label, stats } = content;

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-slate-300">{label}</p>
        <div className="mt-8 grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
