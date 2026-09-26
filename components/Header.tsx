'use client';

import Link from 'next/link';
import { Rocket, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
            Hackathon Starter
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:inline"
          >
            Docs
          </a>
          <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm transition-all hover:shadow">
            <Sparkles size={14} />
            <span>New Project</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
