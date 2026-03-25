'use client';

import { motion } from 'framer-motion';

const fade = { initial: { opacity: 0 }, animate: { opacity: 1 } };

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-white">

      {/* Banner image — place your file at public/banner.png to show it */}
      <div className="w-full h-48 md:h-64 bg-gray-100 border-b border-gray-200 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-cover"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <motion.div {...fade} transition={{ duration: 0.5 }} className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="w-8 h-8 rounded border-2 border-dashed border-primary-400 bg-primary-50 flex items-center justify-center">
                <span className="text-[10px] font-black text-primary-500 tracking-tight">SVS</span>
              </div>
              <span className="font-semibold text-gray-900 tracking-tight">Shoal Valley Systems</span>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }} className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a>
              <a href="#faq" className="text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
              <button
                onClick={scrollToContact}
                className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded hover:bg-primary-700 transition-colors"
              >
                Connect
              </button>
            </motion.div>

          </div>
        </div>
      </nav>

      {/* Hero body */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 md:py-0">

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-8"
          >
            Shoal Valley Systems &nbsp;·&nbsp; Texas
          </motion.p>

          <motion.h1
            {...fade}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[clamp(2.8rem,8vw,7rem)] font-black tracking-tight leading-[0.92] text-gray-900 max-w-4xl"
          >
            We build what<br />
            <span className="text-primary-600">AI makes possible.</span>
          </motion.h1>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 w-px h-12 bg-gray-300"
          />

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg text-gray-400 font-light max-w-md leading-relaxed"
          >
            No fixed catalog. No template solutions. Just the frontier.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary-600 text-white text-sm font-semibold tracking-wide rounded hover:bg-primary-700 transition-colors"
            >
              Get in Touch
              <span className="opacity-60">→</span>
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
