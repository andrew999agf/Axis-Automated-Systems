'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with businesses of all sizes across various industries including construction, logistics, e-commerce, healthcare, professional services, and more. Our solutions are custom-built to fit your specific needs, regardless of your industry.'
  },
  {
    question: 'How long does it take to build a custom automation tool?',
    answer: 'Timeline varies based on complexity. Basic websites typically take 1-2 weeks, while complex automation tools can take 4-8 weeks. We provide a detailed timeline during the consultation phase and keep you updated throughout the development process.'
  },
  {
    question: 'What is the difference between hosted and standalone solutions?',
    answer: 'Hosted solutions run on our cloud servers with monthly hosting fees and ongoing maintenance. Standalone solutions are delivered as complete applications that you own and run on your own infrastructure, with no recurring hosting costs.'
  },
  {
    question: 'Do you provide training and support?',
    answer: 'Absolutely! All projects include comprehensive training and documentation. Hosted solutions include ongoing support and updates. Standalone solutions come with initial training and optional support packages.'
  },
  {
    question: 'Can you integrate with our existing software?',
    answer: 'Yes! We specialize in API integrations and can connect your new automation tools with existing software, databases, and third-party services. We\'ll assess your current tech stack during the consultation.'
  },
  {
    question: 'What if we need changes or updates later?',
    answer: 'For hosted solutions, updates and changes are included in your monthly retainer. For standalone solutions, we offer flexible maintenance packages. You can also request new features at any time.'
  },
  {
    question: 'How is AI used in your development process?',
    answer: 'We leverage cutting-edge AI coding tools to accelerate development while maintaining high quality. This allows us to build sophisticated automation tools faster and more cost-effectively than traditional development methods.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. All hosted solutions use encrypted connections (SSL/HTTPS), secure databases, and follow industry best practices. We can also sign NDAs and provide detailed security documentation upon request.'
  },
  {
    question: 'What happens if I want to cancel my hosted solution?',
    answer: 'We offer flexible month-to-month agreements for hosted solutions. You can cancel anytime with 30 days notice. We\'ll provide you with all your data in a usable format.'
  },
  {
    question: 'Do you offer custom quotes?',
    answer: 'Yes! While we have standard pricing tiers, every business is unique. Contact us for a free consultation and custom quote tailored to your specific requirements and budget.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
            Everything you need to know about our services
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

        {/* Still have questions CTA */}
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
            We're here to help! Get in touch and we'll answer all your questions.
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
