'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: 49,
    description: 'Perfect for small teams starting with automation.',
    features: ['Email support', '3 automation workflows', 'Workflow analytics']
  },
  {
    name: 'Pro',
    price: 149,
    description: 'Advanced automation for growing businesses.',
    features: ['Priority support', 'Unlimited workflows', 'Custom integrations']
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'Tailored automation for complex operations.',
    features: ['Dedicated success manager', 'SLA guarantees', 'On-premise options']
  }
];

export default function Pricing() {
  const [active, setActive] = useState('Pro');

  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-white">Pricing</h2>
        <p className="mt-4 text-slate-300">
          Choose the setup package that matches your automation ambition.
        </p>
      </div>
      <div className="flex justify-center pb-12">
        <div className="glass-panel inline-flex rounded-full p-1">
          {plans.map((plan) => (
            <button
              key={plan.name}
              onClick={() => setActive(plan.name)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                active === plan.name
                  ? 'bg-gradient-to-r from-primary to-secondary text-slate-900 shadow-glow'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass-panel relative p-8 transition-transform duration-300 hover:-translate-y-3 hover:shadow-glow ${
              active === plan.name ? 'border border-cyan-400/40 shadow-glow' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <span className="text-3xl font-bold text-primary">€{plan.price}</span>
            </div>
            <p className="mt-4 text-slate-200">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
