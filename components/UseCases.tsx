'use client';

import { motion } from 'framer-motion';
import { Building2, Truck, ShoppingCart, Users, ClipboardList, TrendingUp } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    industry: 'Construction & Contractors',
    title: 'Job Management Suite',
    problem: 'Managing multiple projects, tracking materials, and coordinating teams was overwhelming',
    solution: 'Custom job management system with automated scheduling, material tracking, and team coordination',
    results: [
      'Reduced administrative time by 60%',
      'Improved project completion rate',
      'Better resource allocation'
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Truck,
    industry: 'Delivery & Logistics',
    title: 'Route Optimization System',
    problem: 'Inefficient routing led to wasted fuel and time',
    solution: 'AI-powered route optimization that considers traffic, priority, and vehicle capacity',
    results: [
      '40% reduction in fuel costs',
      'Increased daily deliveries by 30%',
      'Improved customer satisfaction'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    industry: 'E-commerce',
    title: 'Inventory & Order Automation',
    problem: 'Manual inventory tracking and order processing caused delays and errors',
    solution: 'Automated inventory management with real-time tracking and order processing',
    results: [
      'Zero stockout incidents',
      '90% faster order processing',
      'Eliminated manual data entry'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    industry: 'Professional Services',
    title: 'Client Management Portal',
    problem: 'Client communication and project tracking scattered across multiple tools',
    solution: 'Unified portal for client communication, project tracking, and automated reporting',
    results: [
      'Centralized client information',
      'Automated status reports',
      'Improved client retention by 25%'
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: ClipboardList,
    industry: 'Healthcare',
    title: 'Appointment & Billing System',
    problem: 'Manual scheduling and billing led to errors and no-shows',
    solution: 'Automated appointment reminders, scheduling, and invoice generation',
    results: [
      'Reduced no-shows by 50%',
      'Faster payment collection',
      'Staff time saved: 15 hours/week'
    ],
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    industry: 'Real Estate',
    title: 'Lead Management System',
    problem: 'Lost leads due to slow follow-up and disorganized tracking',
    solution: 'Automated lead capture, follow-up scheduling, and performance analytics',
    results: [
      'Instant lead response time',
      '3x increase in conversions',
      'Complete lead tracking history'
    ],
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
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
            Real-World <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across industries are transforming their operations with custom automation
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
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
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

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-red-600 mb-1">Challenge:</p>
                  <p className="text-gray-700 text-sm">{useCase.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-green-600 mb-1">Solution:</p>
                  <p className="text-gray-700 text-sm">{useCase.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <p className="text-sm font-semibold text-primary-600 mb-2">Results:</p>
                  <ul className="space-y-1.5">
                    {useCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Your industry not listed? We build custom solutions for any business need.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all hover:scale-105 hover:shadow-xl"
          >
            Discuss Your Custom Solution
          </button>
        </motion.div>
      </div>
    </section>
  );
}
