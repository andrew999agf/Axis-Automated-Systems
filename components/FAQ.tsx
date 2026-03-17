'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does Shoal Valley Systems actually build?',
    answer: 'AI-powered software — the kind that solves real problems and doesn\'t fit neatly into an off-the-shelf product. We don\'t publish a catalog because the work varies. What stays constant is the quality and the approach.'
  },
  {
    question: 'Do you specialize in a particular industry?',
    answer: 'No. We specialize in the problem itself, not the sector it comes from. We\'ve worked across domains that require deep domain expertise — legal, financial, operational — and we apply that breadth to whatever challenge is in front of us.'
  },
  {
    question: 'How is AI used in your work?',
    answer: 'AI isn\'t a feature we bolt on — it\'s how we build. We use the latest models and tooling both in our development process and as the core engine of what we ship. We track the frontier closely because staying current is part of the job.'
  },
  {
    question: 'Where is SVS based?',
    answer: 'Texas. We work remotely and are not limited to local projects.'
  },
  {
    question: 'How do I get in touch?',
    answer: 'Email us at contact@shoalvalleysystems.com. If you think there\'s a fit, just say so — we\'ll take it from there.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Common questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-xl border border-gray-200 hover:border-primary-300 transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
