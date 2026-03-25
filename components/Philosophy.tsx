'use client';

import { motion } from 'framer-motion';

const principles = [
  {
    number: '01',
    title: 'We start at the frontier.',
    body: "AI is moving fast. We track it obsessively — not to follow trends, but to recognize when a new capability changes what's buildable. Our work lives at that edge.",
  },
  {
    number: '02',
    title: "We don't specialize in an industry.",
    body: "We specialize in the problem. Constraints come from the challenge itself, not from a category we've pre-decided to serve. If it can be solved with software and AI, it's in scope.",
  },
  {
    number: '03',
    title: 'Depth over breadth.',
    body: 'Founded by someone with real legal and financial domain expertise. We understand what it means when a system fails in the real world — and we build accordingly.',
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="bg-gray-950 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-primary-500 mb-5">What we are</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl">
            Built for problems that<br />don't fit a template.
          </h2>
        </motion.div>

        {/* Principles — vertical stacked list */}
        <div>
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-gray-800 py-10 md:py-12 grid md:grid-cols-[8rem_1fr] gap-6"
            >
              <span className="text-5xl font-black text-gray-800 leading-none">{p.number}</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{p.body}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Footer statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
            Shoal Valley Systems is a Texas-based software development LLC.
            We build AI-powered solutions — and we stay relentlessly ahead of what&rsquo;s possible.
          </p>
          <div className="w-12 h-12 rounded border-2 border-dashed border-gray-700 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-black text-gray-600 tracking-tight">SVS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
