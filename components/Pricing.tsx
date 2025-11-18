'use client';

import { motion } from 'framer-motion';
import { Check, Globe, Cloud, Package, ArrowRight } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic Website',
    icon: Globe,
    description: 'Perfect for establishing your online presence',
    setupFee: 150,
    monthlyFee: 25,
    monthlyLabel: 'AWS Hosting',
    features: [
      'Custom website design',
      'Mobile responsive',
      'AWS Lightsail hosting',
      'SSL certificate included',
      'Basic SEO optimization',
      'Contact form integration',
      'Regular updates & maintenance'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    popular: false
  },
  {
    name: 'Complex Tool (Hosted)',
    icon: Cloud,
    description: 'Advanced automation with cloud hosting',
    setupFee: 400,
    monthlyFee: 45,
    monthlyLabel: 'Hosting',
    retainer: 500,
    retainerLabel: 'Development Retainer',
    features: [
      'Custom AI-coded automation',
      'Cloud-hosted solution',
      'Scalable infrastructure',
      'Regular updates & new features',
      'Priority support',
      'Data backup & security',
      'Performance monitoring',
      'API integrations'
    ],
    gradient: 'from-purple-500 to-pink-500',
    popular: true
  },
  {
    name: 'Complex Tool (Standalone)',
    icon: Package,
    description: 'Custom tool with full ownership',
    setupFee: 800,
    monthlyFee: null,
    retainer: 500,
    retainerLabel: 'Development Retainer',
    oneTime: true,
    features: [
      'Custom AI-coded automation',
      'Standalone application',
      'Full source code ownership',
      'Complete documentation',
      'Training & onboarding',
      'One-time delivery',
      'No recurring hosting fees',
      'Custom integrations'
    ],
    gradient: 'from-orange-500 to-red-500',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
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
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All pricing is customizable based on your requirements.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                  POPULAR
                </div>
              )}

              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${tier.gradient}`} />

              <div className="p-8">
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tier.gradient}`}>
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                </div>

                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="mb-4">
                    <span className="text-sm text-gray-600 font-medium">Setup Fee</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-gray-900">${tier.setupFee}</span>
                      <span className="text-gray-600">one-time</span>
                    </div>
                  </div>

                  {tier.retainer && (
                    <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <span className="text-sm text-amber-800 font-medium">{tier.retainerLabel}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-amber-900">${tier.retainer}</span>
                      </div>
                    </div>
                  )}

                  {tier.monthlyFee ? (
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-medium">{tier.monthlyLabel}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-gray-900">${tier.monthlyFee}</span>
                        <span className="text-gray-600">/month</span>
                      </div>
                    </div>
                  ) : tier.oneTime ? (
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm text-green-800 font-semibold">One-time delivery</span>
                      <p className="text-xs text-green-700 mt-1">No recurring fees</p>
                    </div>
                  ) : null}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? `bg-gradient-to-r ${tier.gradient} text-white hover:shadow-xl`
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
            <p className="text-gray-700 mb-2">
              <span className="font-bold text-gray-900">Note:</span> All pricing is customizable based on your specific requirements.
            </p>
            <p className="text-gray-600 text-sm">
              Contact us for a detailed quote tailored to your business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
