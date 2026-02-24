'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Trophy,
  Wallet,
  TrendingUp,
  Bot,
  Shield,
  Smartphone,
  ChevronRight,
  Star,
  Flame,
  Target,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Financial Education',
    description:
      'Skill trees with 12+ lessons across 4 difficulty tiers. Three-phase lesson flow — Reading, Practice Quiz, and Final Test — with key-term tooltips and XP rewards.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: Bot,
    title: 'AI Tutor',
    description:
      'Chat-based financial education assistant with suggested starter questions. Strictly educational — no access to your private financial data.',
    color: 'text-accent-600',
    bg: 'bg-accent-50',
  },
  {
    icon: Trophy,
    title: 'Gamification & Leagues',
    description:
      'XP system, daily goals, streaks with Streak Freeze tokens, and 6-tier league rankings (Bronze → Legendary). Achievements, level-ups, and weekly leaderboards keep you motivated.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    icon: Wallet,
    title: 'Personal Finance Tracking',
    description:
      'Track accounts, transactions (16+ categories), monthly budgets, and savings goals — all stored locally on your device. Includes a Financial Health Score and Tax Center.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: TrendingUp,
    title: 'Markets & Paper Trading',
    description:
      'Live quotes for stocks and crypto refreshed every 15 seconds, a customizable watchlist, and ThryvnTrader — a risk-free simulated trading sandbox.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: '"Chinese Wall" Privacy',
    description:
      'A strict architectural separation keeps your financial data on-device only. The AI tutor never touches your private numbers — ever.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

const practiceTypes = [
  { icon: Flame, label: 'Quick Practice', desc: '5 min · random questions' },
  { icon: Target, label: 'Weak Skills', desc: '10 min · targeted review' },
  { icon: Star, label: 'Mastery Test', desc: '15 min · full understanding' },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold tracking-wide uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="gradient-text">StartThryvin</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A cross-platform mobile app that combines financial literacy education with real-time
            market data and personal finance tracking — all in one privacy-first experience.
          </p>
        </motion.div>

        {/* Hero Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white mb-16 shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-10 md:p-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-10 h-10 text-accent-300" />
                <div>
                  <h3 className="text-3xl font-bold">StartThryvin</h3>
                  <p className="text-primary-200 text-sm">Financial Literacy · Mobile App</p>
                </div>
              </div>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Learn personal finance through interactive lessons, practice modes, and an AI tutor
                while tracking your real accounts, budgets, and savings goals — all with a strict
                privacy wall keeping your data exclusively on your device.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React Native', 'TypeScript', 'Expo SDK 54', 'SQLite', 'Zustand'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {practiceTypes.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-lg bg-white/20">
                    <Icon className="w-5 h-5 text-accent-300" />
                  </div>
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-sm text-primary-200">{desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary-300 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group bg-white"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.bg} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100"
        >
          {[
            { value: '12+', label: 'Lessons' },
            { value: '5', label: 'Practice Modes' },
            { value: '6', label: 'League Tiers' },
            { value: '16+', label: 'Expense Categories' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
