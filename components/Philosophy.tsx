'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'We start at the frontier.',
    body: 'AI is moving fast. We track it obsessively — not to follow trends, but to recognize when a new capability changes what\'s buildable. Our work lives at that edge.',
  },
  {
    number: '02',
    title: 'We don\'t specialize in an industry.',
    body: 'We specialize in the problem. Constraints come from the challenge itself, not from a category we\'ve pre-decided to serve. If it can be solved with software and AI, it\'s in scope.',
  },
  {
    number: '03',
    title: 'Depth over breadth.',
    body: 'Founded by someone with real legal and financial domain expertise. We understand what it means when a system fails in the real world — and we build accordingly.',
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="py-28 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-primary-400 font-semibold tracking-widest uppercase text-xs mb-4">
            What we are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            A software company built for problems that{' '}
            <span className="text-primary-400">don't fit a template.</span>
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800 rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-gray-950 p-8 md:p-10"
            >
              <span className="text-5xl font-black text-gray-800 mb-6 block leading-none">
                {p.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 border-t border-gray-800 pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Shoal Valley Systems is a Texas-based software development LLC.
            We build AI-powered solutions — and we stay relentlessly ahead of what&rsquo;s possible.
          </p>
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-xl border-2 border-dashed border-primary-600 bg-primary-900/30 flex items-center justify-center">
              <span className="text-sm font-black text-primary-400 tracking-tight">SVS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
