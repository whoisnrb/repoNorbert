'use client';

import { motion } from 'framer-motion';

export default function Testimonials({ content }) {
  const { id, eyebrow, title, quotes } = content;

  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {quotes.map((quote) => (
            <motion.blockquote
              key={quote.author}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent p-10 text-left backdrop-blur-xl"
            >
              <p className="text-lg leading-relaxed text-slate-100">{quote.quote}</p>
              <footer className="mt-6 text-sm font-medium text-cyan-100">{quote.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
