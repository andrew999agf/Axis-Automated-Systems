'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes across industries including construction, logistics, e-commerce, healthcare, professional services, real estate, and more. If your business has a manual or inefficient process, we can likely automate it.'
  },
  {
    question: 'How long does it take to build a custom tool?',
    answer: 'It depends on the complexity. Simpler tools and websites typically take 1–2 weeks, while more complex automation platforms can take 4–8 weeks. We provide a clear timeline during the consultation and keep you updated throughout.'
  },
  {
    question: 'What is the difference between a hosted solution and a standalone application?',
    answer: 'Hosted solutions run on cloud servers with ongoing maintenance included. Standalone applications are delivered as complete software you own outright and run on your own infrastructure — no recurring hosting costs.'
  },
  {
    question: 'How is AI used in your development process?',
    answer: 'We use cutting-edge AI coding tools to accelerate development while maintaining high code quality. This lets us build sophisticated software faster and more cost-effectively than traditional development methods — and it\'s core to how we stay on the leading edge.'
  },
  {
    question: 'Can you integrate with software we already use?',
    answer: 'Yes. We specialize in API integrations and can connect new tools with your existing software, databases, and third-party services. We assess your current tech stack during the consultation phase.'
  },
  {
    question: 'Do you provide training and documentation?',
    answer: 'Absolutely. All projects include training and documentation tailored to your team. Hosted solutions include ongoing support. Standalone deliverables come with full documentation and optional support packages.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is a priority. All hosted solutions use encrypted connections (SSL/HTTPS), secure databases, and industry best practices. We can provide detailed security documentation and sign NDAs upon request.'
  },
  {
    question: 'What happens if we need changes after delivery?',
    answer: 'For hosted solutions, updates are part of ongoing maintenance. For standalone applications, we offer flexible maintenance packages and can scope new features at any time.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Reach out and we'll get back to you promptly.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
