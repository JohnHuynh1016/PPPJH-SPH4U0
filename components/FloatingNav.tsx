// components/FloatingNav.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSound } from '@/hooks/useSound'; 

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick} = useSound();

  const navItems = [
    { label: 'Home', target: '1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
        </svg>
      )
    },
    { label: 'Passions', target: '2',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
        </svg>
      )
    },
    { label: 'Research', target: '3',
      icon: (
        <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
          <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
        </svg>
      )
    },
    { label: 'Topic Selection', target: '4',
      icon: (
        <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
          <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
        </svg>
      )
    },
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

  const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  playClick();

  const element = document.getElementById(id);

    if (element) {
      // Update the URL hash without triggering an instant jump
      window.history.pushState(null, '', `#${id}`);

      // Smoothly scroll to the selected section
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
            onMouseEnter={playHover}
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
          >
            {/* If the item has an icon property, render it here */}
            {item.icon && <span className="text-gray-700 group-hover:text-black transition-colors">{item.icon}</span>}
            <span>{item.label}</span>
          </a>
        ))}


        {/* 🛠️ NEW WRAPPER: Grouping the separator and button together to create our layout anchor */}
        <div className="relative flex items-center h-full" ref={dropdownRef}>
        
        {/* Separator line */}
        <span className="h-4 w-px bg-gray-300 mr-6" aria-hidden="true" />

        {/* The Trigger Button */}
        <button
            onClick={() => { 
              playClick();
              setIsOpen(!isOpen);
            }}
            onMouseEnter={playHover}
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
                onClick={() => {
                  playClick();
                  setIsOpen(false);
                }}
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
                onClick={playClick}
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
