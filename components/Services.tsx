'use client';

import { motion } from 'framer-motion';
import { Cloud, Download, Wrench, Calendar, Route, FileText, Cog, Database } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Hosted Web Applications',
    description: 'Cloud-hosted solutions with continuous maintenance and updates',
    features: [
      'Full cloud deployment and hosting',
      'Regular updates and maintenance',
      'Scalable infrastructure',
      'Secure data management'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Download,
    title: 'Standalone Software',
    description: 'Custom-built tools delivered as standalone applications for your business',
    features: [
      'One-time delivery',
      'Full ownership',
      'Custom integrations',
      'Complete documentation'
    ],
    color: 'from-purple-500 to-pink-500'
  }
];

const automationExamples = [
  {
    icon: Calendar,
    title: 'Job Management Systems',
    description: 'Track projects, deadlines, and team assignments automatically',
    example: 'Perfect for contractors managing multiple projects'
  },
  {
    icon: Route,
    title: 'Route Optimization',
    description: 'AI-powered routing for efficient job scheduling and navigation',
    example: 'Reduce travel time and fuel costs significantly'
  },
  {
    icon: FileText,
    title: 'Automatic Invoicing',
    description: 'Generate and send invoices automatically based on completed work',
    example: 'Save hours on billing and get paid faster'
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Automate data entry, analysis, and reporting workflows',
    example: 'Transform manual processes into automated systems'
  },
  {
    icon: Wrench,
    title: 'Custom Workflows',
    description: 'Build automation tailored to your unique business processes',
    example: 'From inventory to customer management'
  },
  {
    icon: Cog,
    title: 'API Integrations',
    description: 'Connect your tools and automate data flow between systems',
    example: 'Seamless integration with existing software'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the deployment model that fits your business needs
          </p>
        </motion.div>

        {/* Service Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${service.color}`} />

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Automation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Can <span className="gradient-text">Automate</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world automation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationExamples.map((example, index) => (
            <motion.div
              key={example.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100">
                  <example.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h4 className="font-bold text-lg text-gray-900">{example.title}</h4>
              </div>
              <p className="text-gray-700 mb-3">{example.description}</p>
              <p className="text-sm text-accent-600 font-medium italic">{example.example}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
