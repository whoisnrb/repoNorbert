'use client';

import { motion } from 'framer-motion';

export default function Contact({ content }) {
  const { title, description, email } = content;

  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-10 text-center"
      >
        <h2 className="text-4xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-slate-200">{description}</p>
        <a
          href={`mailto:${email}`}
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 text-base font-medium text-slate-900 shadow-glow transition hover:scale-105"
        >
          {email}
        </a>
      </motion.div>
    </section>
  );
}
