// components/SplashScreen.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useSound } from '@/hooks/useSound';

export default function SplashScreen() {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTriggered, setIsTriggered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const { playIntro } = useSound();

  // 1. Safe Client Mounting Check (Prevents Hydration Failures)
  useEffect(() => {
    setIsClient(true);
    
    // Read from session storage ONLY after we are sure we are safely running in the browser
    const sessionVisited = sessionStorage.getItem('splash_screen_entered');
    
    if (sessionVisited === 'true') {
      setIsVisible(false);
      document.body.style.overflow = 'unset'; // Fallback layout unlock
    } else {
      document.body.style.overflow = 'hidden'; // Lock layout scroll on fresh visit
    }

    // Cleanup: Make absolutely certain scrolling is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // 2. Mouse Glow Aura Tracker
  useEffect(() => {
    if (!isClient || isTriggered || !isVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient, isTriggered, isHovering, isVisible]);

  const handleGlobalClick = () => {
    if (isTriggered) return;
    setIsTriggered(true);

    // 🎵 Fire intro sound instantly on click
    playIntro();

    // 💾 Lock in session token so going back/forth page1 avoids this screen
    sessionStorage.setItem('splash_screen_entered', 'true');

    setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset'; // 🔓 Open the scroll bar gate!
    }, 800);
  };

  // Prevent server-side rendering mismatch or bail out if already visited
  if (!isClient || !isVisible) return null;

  return (
    <div
      onClick={handleGlobalClick}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-700 ease-in-out ${
        isTriggered 
          ? 'opacity-0 scale-110 blur-xl pointer-events-none' 
          : 'bg-gray-950/50 backdrop-blur-md opacity-100 scale-100' 
      }`}
    >
      {/* 🔮 Interactive Custom Mouse Glow Torch Aura */}
      {isHovering && !isTriggered && (
        <div
          className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500 ease-in-out"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Grid Network Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 💬 Typography Text Box */}
      <div className="relative z-20 pointer-events-none flex flex-col items-center gap-6 text-center px-6 mt-auto pb-20">
        <p 
          className={`text-sm md:text-base font-bold tracking-[0.4em] text-white transition-all duration-500 drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] uppercase ${
            isTriggered ? 'tracking-[0.6em] opacity-0 text-blue-400' : 'animate-pulse'
          }`}
        >
          Click anywhere to continue
        </p>
        
        {/* Neon blue separator line */}
        <div 
          className={`h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_8px_#3b82f6] transition-all duration-1000 ease-out ${
            isTriggered ? 'w-0' : 'w-36'
          }`} 
        />
      </div>
    </div>
  );
}
