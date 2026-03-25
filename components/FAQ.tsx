'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What does Shoal Valley Systems actually build?',
    answer: "AI-powered software — the kind that solves real problems and doesn't fit neatly into an off-the-shelf product. We don't publish a catalog because the work varies. What stays constant is the quality and the approach.",
  },
  {
    question: 'Do you specialize in a particular industry?',
    answer: "No. We specialize in the problem itself, not the sector it comes from. We've worked across domains that require deep domain expertise — legal, financial, operational — and we apply that breadth to whatever challenge is in front of us.",
  },
  {
    question: 'How is AI used in your work?',
    answer: "AI isn't a feature we bolt on — it's how we build. We use the latest models and tooling both in our development process and as the core engine of what we ship. We track the frontier closely because staying current is part of the job.",
  },
  {
    question: 'Where is SVS based?',
    answer: 'Texas. We work remotely and are not limited to local projects.',
  },
  {
    question: 'How do I get in touch?',
    answer: 'Email us at contact@shoalvalleysystems.com. If you think there's a fit, just say so — we'll take it from there.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Sticky label */}
          <div className="md:sticky md:top-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900">
                Common<br />questions
              </h2>
            </motion.div>
          </div>

          {/* Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="border-t border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 flex items-start justify-between text-left gap-6 group"
                >
                  <span className="font-medium text-gray-900 text-sm leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-gray-400 text-lg leading-none mt-0.5 group-hover:text-gray-700 transition-colors">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-gray-500 leading-relaxed max-w-prose">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            <div className="border-t border-gray-200" />
          </div>

        </div>
      </div>
    </section>
  );
}
