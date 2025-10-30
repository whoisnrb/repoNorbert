'use client';

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo.svg';

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 300], [0.1, 0.35]);
  const blurAmount = useTransform(scrollY, [0, 300], [4, 18]);
  const background = useMotionTemplate`rgba(15, 23, 42, ${backgroundOpacity})`;
  const blur = useMotionTemplate`blur(${blurAmount}px)`;

  return (
    <motion.nav
      style={{
        background,
        backdropFilter: blur
      }}
      className="fixed left-1/2 top-6 z-50 w-[90%] max-w-4xl -translate-x-1/2 rounded-full border border-white/10 px-6 py-3 shadow-lg shadow-blue-500/10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="WhoisAutomations logo" width={32} height={32} className="drop-shadow" />
          <span className="text-sm font-medium tracking-wide text-slate-100">WhoisAutomations</span>
        </div>
        <div className="hidden gap-6 text-sm text-slate-200 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
