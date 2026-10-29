// hooks/useSound.ts
'use client';

import { useCallback, useRef } from 'react';

export function useSound() {
  const hoverAudio = useRef<HTMLAudioElement | null>(null);
  const clickAudio = useRef<HTMLAudioElement | null>(null);
  const introAudio = useRef<HTMLAudioElement | null>(null);

  // Reusable function to initialize and play a sound safely
  const playSound = useCallback((audioRef: React.MutableRefObject<HTMLAudioElement | null>, path: string, volume = 0.4) => {
    if (typeof window === 'undefined') return; // Don't run on server side

    // Initialize audio instance if it doesn't exist yet
    if (!audioRef.current) {
      audioRef.current = new Audio(path);
    }

    const audio = audioRef.current;
    audio.volume = volume;
    
    // Reset track to start so rapid clicks/hovers trigger immediately
    audio.currentTime = 0; 
    
    // Catch standard browser autoplay blocking errors safely
    audio.play().catch(() => {
      // Silently catch browser autoplay block rules
    });
  }, []);

  const playHover = useCallback(() => playSound(hoverAudio, '/sounds/hover2.mp3', 0.2), [playSound]);
  const playClick = useCallback(() => playSound(clickAudio, '/sounds/click1.wav', 0.5), [playSound]);
  const playIntro = useCallback(() => playSound(introAudio, '/sounds/loadin.mp3', 0.6), [playSound]);

  return { playHover, playClick, playIntro };
}
