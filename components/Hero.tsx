'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Bot } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-teal-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {/* Logo placeholder */}
              <div className="w-9 h-9 rounded-lg border-2 border-dashed border-primary-400 bg-primary-50 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-500 tracking-tight">SVS</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Shoal Valley Systems</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors">How It Works</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">FAQ</a>
              <button
                onClick={scrollToContact}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-accent-500" />
          <span className="text-accent-600 font-semibold tracking-wide uppercase text-sm">
            Texas-Based Software Development LLC
          </span>
          <Sparkles className="w-5 h-5 text-accent-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Serious Tools for{' '}
          <span className="gradient-text">
            Serious Problems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          We build custom AI-powered software for businesses that need real solutions —
          grounded in legal and financial domain expertise, not generic dev-shop output.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#services"
            className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all hover:scale-105 hover:shadow-xl"
          >
            See What We Build
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl glass">
            <Zap className="w-8 h-8 text-accent-500" />
            <h3 className="font-bold text-2xl text-gray-900">AI-First</h3>
            <p className="text-gray-600">Built on the leading edge</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl glass">
            <Bot className="w-8 h-8 text-primary-500" />
            <h3 className="font-bold text-2xl text-gray-900">Domain Expertise</h3>
            <p className="text-gray-600">Legal & financial roots</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl glass">
            <Sparkles className="w-8 h-8 text-accent-500" />
            <h3 className="font-bold text-2xl text-gray-900">100% Custom</h3>
            <p className="text-gray-600">No templates, no shortcuts</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
