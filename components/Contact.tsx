'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent-600 font-semibold tracking-widest uppercase text-xs mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            If you think we should{' '}
            <span className="gradient-text">talk, reach out.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light mb-14 max-w-xl mx-auto leading-relaxed">
            We don't have a standard intake form. The right conversations tend to start simply.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="mailto:contact@shoalvalleysystems.com"
            className="group flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all hover:scale-105 hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            contact@shoalvalleysystems.com
          </a>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>Texas, USA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
