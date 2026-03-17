'use client';

import { motion } from 'framer-motion';
import { Building2, Truck, ShoppingCart, Users, ClipboardList, TrendingUp } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    industry: 'Construction & Contractors',
    title: 'Job Management Suites',
    description: 'Custom platforms for scheduling projects, tracking materials, coordinating crews, and auto-generating invoices — so the business runs even when you\'re on-site.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Truck,
    industry: 'Delivery & Logistics',
    title: 'Route Optimization Systems',
    description: 'AI-powered routing that accounts for traffic, priority, and vehicle load. Cut fuel costs and fit more stops into every driver\'s day.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    title: 'Inventory & Order Automation',
    description: 'Real-time inventory tracking, automatic reorder triggers, and streamlined order processing — eliminating manual data entry and fulfillment delays.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    industry: 'Professional Services',
    title: 'Client & Project Portals',
    description: 'Unified platforms for client communication, project milestones, document management, and automated status reporting — all in one place.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: ClipboardList,
    industry: 'Healthcare & Wellness',
    title: 'Scheduling & Billing Tools',
    description: 'Automated appointment reminders, intake workflows, and invoice generation — reducing no-shows and administrative overhead for small practices.',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    industry: 'Real Estate',
    title: 'Lead Management Systems',
    description: 'Automated lead capture, follow-up sequences, and pipeline analytics that ensure no opportunity falls through the cracks.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-white">
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
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every business runs differently. We build software that fits your operations — not the other way around.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${useCase.gradient}`} />

              <div className="p-6">
                {/* Icon & Industry */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${useCase.gradient}`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {useCase.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-lg text-gray-600">
            Don't see your industry? We build for any business that has a process worth automating.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
