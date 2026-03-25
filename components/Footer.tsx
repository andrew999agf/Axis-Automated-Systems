'use client';

import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded border-2 border-dashed border-gray-700 flex items-center justify-center">
              <span className="text-[9px] font-black text-gray-600 tracking-tight">SVS</span>
            </div>
            <span className="text-sm text-gray-500">Shoal Valley Systems LLC</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-xs">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            <span className="text-gray-700">|</span>
            <a href="mailto:contact@shoalvalleysystems.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              contact@shoalvalleysystems.com
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-gray-300 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-700">
          <p>© {currentYear} Shoal Valley Systems LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
