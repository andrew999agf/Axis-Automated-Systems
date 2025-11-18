'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Michael Rodriguez',
    company: 'Rodriguez Construction',
    role: 'Owner',
    rating: 5,
    text: 'The job management system they built completely transformed how we run our business. What used to take hours now happens automatically. Best investment we\'ve made!',
    image: '👷'
  },
  {
    name: 'Sarah Chen',
    company: 'Chen Logistics',
    role: 'Operations Manager',
    rating: 5,
    text: 'Their route optimization tool saved us thousands in fuel costs within the first month. The AI integration is seamless and the support is outstanding.',
    image: '🚛'
  },
  {
    name: 'David Thompson',
    company: 'Thompson & Associates',
    role: 'Managing Partner',
    rating: 5,
    text: 'Working with Axis Automated Systems was a game-changer. They listened to our needs and delivered exactly what we asked for, on time and within budget.',
    image: '💼'
  },
  {
    name: 'Emily Watson',
    company: 'Watson Healthcare',
    role: 'Practice Administrator',
    rating: 5,
    text: 'The automated appointment and billing system reduced our no-shows by half and made our entire practice more efficient. Couldn\'t be happier!',
    image: '🏥'
  },
  {
    name: 'James Parker',
    company: 'Parker Real Estate',
    role: 'Broker',
    rating: 5,
    text: 'The lead management system they created helped us triple our conversion rate. The automated follow-ups ensure we never miss an opportunity.',
    image: '🏘️'
  },
  {
    name: 'Lisa Martinez',
    company: 'Martinez E-commerce',
    role: 'CEO',
    rating: 5,
    text: 'From inventory to order processing, everything is automated now. We\'ve eliminated errors and saved countless hours. Highly recommend their services!',
    image: '🛒'
  }
];

// Duplicate the reviews for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews];

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped transform
          </p>
        </motion.div>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        <div
          className="flex"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 pr-6"
            animate={{
              x: isPaused ? 0 : [0, -50 * reviews.length + '%']
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-[400px] bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary-200 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-2xl">
                    {review.image}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                    <p className="text-sm text-primary-600 font-medium">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Note about pausing */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 italic">Hover over a review to pause scrolling</p>
      </div>
    </section>
  );
}
