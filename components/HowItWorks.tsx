'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We discuss your business challenges and automation needs in detail',
    details: 'Share your pain points, workflows, and goals. We listen and ask the right questions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Strategy & Design',
    description: 'We design a custom solution tailored to your specific requirements',
    details: 'Receive a detailed plan with features, timeline, and transparent pricing.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our AI-assisted development team builds your automation tool',
    details: 'Fast, efficient development using cutting-edge AI coding technology.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'Deploy your solution and receive ongoing support and updates',
    details: 'Training, deployment assistance, and continuous optimization.',
    color: 'from-green-500 to-emerald-500'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial conversation to launched solution in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200"
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative p-6 rounded-2xl bg-gradient-to-r ${step.color} shadow-xl z-10`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg text-gray-900 shadow-lg border-4 border-white">
                      {index + 1}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-2 font-medium">{step.description}</p>
                  <p className="text-sm text-gray-600">{step.details}</p>
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-200 rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Your Automation Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
