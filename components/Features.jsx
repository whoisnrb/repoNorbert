'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI Automation',
    description: 'Build automations without code using n8n and AI agents.'
  },
  {
    title: 'Business Growth',
    description: 'Save hours daily by automating repetitive tasks.'
  },
  {
    title: 'Client Integrations',
    description: 'Seamless integration with Google, Slack, and more.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-white">Features</h2>
        <p className="mt-4 text-slate-300">
          Designed to deliver seamless, intelligent automation for modern teams.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel group relative p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="absolute inset-0 rounded-3xl border border-transparent transition group-hover:border-cyan-400/40 group-hover:shadow-glow" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-200">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
