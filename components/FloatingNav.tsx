// components/FloatingNav.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Passions', target: 'features' },
    { label: 'Research', target: 'tech' },
    { label: 'Topic Selection', target: 'contact' },
  ];

  // Close dropdown if clicking anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
        
        {/* Main Section Links */}
        {navItems.map((item) => (
        <a
            key={item.label}
            href={`#${item.target}`}
            onClick={(e) => handleScroll(e, item.target)}
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
        >
            {item.label}
        </a>
        ))}

        {/* 🛠️ NEW WRAPPER: Grouping the separator and button together to create our layout anchor */}
        <div className="relative flex items-center h-full" ref={dropdownRef}>
        
        {/* Separator line */}
        <span className="h-4 w-px bg-gray-300 mr-6" aria-hidden="true" />

        {/* The Trigger Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 whitespace-nowrap focus:outline-none"
        >
            Explore More <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▾</span>
        </button>

        {/* Floating Dropdown Window: "absolute left-0" now snaps exactly flush to the separator line */}
        {isOpen && (
            <div className="absolute left-0 top-full mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 origin-top-left z-50">
            <Link
                href="/page1"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
            >
                📄 Conference Journal
            </Link>
            <div className="border-t border-gray-100 my-1"></div>
            <span className="block px-4 py-1 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                External Link
            </span>
            <a
                href="https://github.com/JohnHuynh1016/PPPJH-SPH4U0"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
            >
                🐙 Website Repository
            </a>
            </div>
        )}
        </div>

      </nav>
    </div>
  );
}
