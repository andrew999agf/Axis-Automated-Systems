'use client';

import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg border-2 border-dashed border-primary-600 bg-primary-900/30 flex items-center justify-center">
                <span className="text-xs font-black text-primary-400 tracking-tight">SVS</span>
              </div>
              <span className="font-bold text-base text-white">Shoal Valley Systems</span>
            </div>
            <p className="text-sm leading-relaxed">
              Texas-based software development LLC.<br />
              Building at the frontier of AI.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-white font-semibold mb-1">Navigate</p>
            <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
            <a href="#faq" className="hover:text-primary-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col gap-4 text-sm">
            <p className="text-white font-semibold">Get in touch</p>
            <a
              href="mailto:contact@shoalvalleysystems.com"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@shoalvalleysystems.com
            </a>
            <div className="flex gap-3 mt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} Shoal Valley Systems LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
