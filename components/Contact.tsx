'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-primary-500 mb-6">Contact</p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-10 max-w-2xl">
            If you think we should talk, reach out.
          </h2>

          <p className="text-gray-500 text-sm mb-12 max-w-sm leading-relaxed">
            We don't have a standard intake form. The right conversations tend to start simply.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="mailto:contact@shoalvalleysystems.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white text-sm font-semibold rounded hover:bg-primary-700 transition-colors"
            >
              contact@shoalvalleysystems.com
            </a>
            <span className="text-gray-600 text-sm">Texas, USA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
