'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useSound } from '@/hooks/useSound';
import Link from 'next/link';

interface SlideItem {
  title: string;
  shortName: string;
  rawquestion: string;
  revisedquestion: string;
  AIcritique: string;
}

const slides: SlideItem[] = [
  {
    title: 'Math',
    shortName: 'Math',
    rawquestion: '- How to restrict the maximum speed of an object.',
    AIcritique:
      'It is currently phrased as a "how-to" engineering design problem rather than a scientific inquiry. It needs to focus on a specific physics mechanism (like fluid resistance or magnetic braking) to allow you to model and test variables.',
    revisedquestion:
      '"How does the effect of air resistance and eddy-current braking affect the motion of falling objects, as measured by the speed and fall times of coffee filters and a magnet moving through a conducting tube?"',
  },
  {
    title: 'Computation',
    shortName: 'Computation',
    rawquestion: '- Can recognition devices power an object to follow someone?',
    AIcritique:
      'The question as written is a binary "yes/no" engineering viability question. In a high school physics context, the core challenge here leans very heavily into coding and computer vision hardware rather than fundamental physics principles. Building a reliable computer-vision tracking system from scratch within a high school timeframe can also be a massive bottleneck.',
    revisedquestion:
      '"How do different ultrasonic or infrared sensor positioning configurations affect the response time and acceleration curves of an automated tracking vehicle during sudden directional changes?"',
  },
  {
    title: 'Biking',
    shortName: 'Biking',
    rawquestion: '- What do wind tunnels do, and why does it matter?',
    AIcritique:
      'It is currently a broad, factual lookup question ("What do they do?"). To make it a strong Grade 12 project, it needs to isolate a specific aerodynamic principle—such as drag coefficient or Reynolds number.',
    revisedquestion:
      'How does the shape of an object affect the airflow patterns and wake visualized using ultrasonic mist in a small wind tunnel at a constant fan speed?',
  },
];

export default function ResearchSlider() {
  const { playHover, playClick } = useSound();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    skipSnaps: false,
    axis: 'x',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [overflows, setOverflows] = useState<boolean[]>([]);
  const [expandedSlides, setExpandedSlides] = useState<boolean[]>([]);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect when a slide's content needs the Read More control.
  useEffect(() => {
    const checkOverflows = () => {
      setOverflows(
        slides.map((_, index) => {
          const container = containerRefs.current[index];
          const content = contentRefs.current[index];
          return Boolean(
            container && content && content.scrollHeight > container.clientHeight,
          );
        }),
      );
    };

    checkOverflows();
    window.addEventListener('resize', checkOverflows);
    return () => window.removeEventListener('resize', checkOverflows);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setExpandedSlides(new Array(slides.length).fill(false));
      containerRefs.current.forEach((box) => {
        if (box) box.scrollTop = 0;
      });
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', handleSelect);
    emblaApi.on('reInit', handleSelect);

    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi]);

  const toggleExpand = (index: number) => {
    playClick();
    setExpandedSlides((previous) => {
      const next = [...previous];
      next[index] = !next[index];
      return next;
    });
  };

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      playClick();
      emblaApi.scrollTo(index);
    },
    [emblaApi, playClick],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!emblaApi) return;

      if (event.key === 'ArrowRight' && emblaApi.canScrollNext()) {
        playClick();
        emblaApi.scrollNext();
      }
      if (event.key === 'ArrowLeft' && emblaApi.canScrollPrev()) {
        playClick();
        emblaApi.scrollPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi, playClick]);

  return (
    <section
      id="3"
      className="relative flex h-auto w-full flex-col justify-start space-y-12 bg-gray-950 px-[6vw] py-20 text-white select-none"
    >
      <div className="w-full text-center">
        <span className="block text-xs font-bold uppercase tracking-[0.4em] text-blue-400">
          Post #2: Driving Questions
        </span>
      </div>

      {/* Horizontal slide gallery */}
      <div
        className="w-full cursor-grab overflow-hidden active:cursor-grabbing"
        ref={emblaRef}
        aria-label="Research question slides"
      >
        <div className="flex w-full">
          {slides.map((slide, index) => {
            const isOverflowing = overflows[index];
            const isExpanded = expandedSlides[index];

            return (
              <div
                key={slide.shortName}
                onMouseEnter={playHover}
                className="flex w-full shrink-0 items-center justify-center transition-opacity duration-500"
                style={{ opacity: selectedIndex === index ? 1 : 0.12 }}
              >
                <div className="w-full max-w-6xl space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-2xl md:p-12">
                  <div className="space-y-1">
                    <span className="block font-mono text-xs font-bold uppercase tracking-widest text-blue-500">
                      Research Question {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl font-black leading-tight tracking-tight text-white md:text-4xl">
                      {slide.title}
                    </h2>
                  </div>

                  <div className="relative">
                    {isOverflowing && !isExpanded && (
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-gradient-to-t from-gray-950 to-transparent" />
                    )}

                    <div
                      ref={(element) => {
                        containerRefs.current[index] = element;
                      }}
                      className={`relative max-h-[36vh] space-y-5 pr-2 transition-all duration-300 ${
                        isExpanded
                          ? 'overflow-y-auto scrollbar-thin scrollbar-thumb-white/10'
                          : 'overflow-hidden'
                      }`}
                    >
                      <div
                        ref={(element) => {
                          contentRefs.current[index] = element;
                        }}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 md:text-sm">
                            Original Driving Question
                          </h3>
                          <p className="text-base font-light leading-relaxed text-white/80 md:text-lg">
                            {slide.rawquestion}
                          </p>
                        </div>
                        
                        <div className="space-y-2 border-t border-blue-400/20 pt-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 md:text-sm">
                            Revised Research Question
                          </h3>
                          <p className="text-base font-medium leading-relaxed text-white md:text-lg">
                            {slide.revisedquestion}
                          </p>
                        </div>
                        
                        <div className="space-y-2 border-t border-white/10 pt-4">
                          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 md:text-sm">
                            AI Critique
                          </h3>
                          <p className="text-base font-light leading-relaxed text-white/70 md:text-lg">
                            {slide.AIcritique}
                          </p>
                          <Link
                              href="https://share.google/aimode/T9Zc2iig37oefNo9q"
                              target="_blank" 
                              className="block py-4 text-sm text-white-700 hover:bg-gray-50 hover:text-black transition-colors"
                          >
                              AI Prompt and Citations
                          </Link>
                          <h1></h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isOverflowing && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(index)}
                      onMouseEnter={playHover}
                      aria-expanded={Boolean(isExpanded)}
                      className="flex cursor-pointer items-center gap-2 pt-1 text-xs font-bold uppercase tracking-wider text-blue-400 transition-colors hover:text-blue-300 focus:outline-none md:text-sm"
                    >
                      {isExpanded ? 'Collapse details ▲' : 'Read full question ▼'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide navigation timeline */}
      
      <div className="relative mx-auto flex w-full max-w-6xl items-start justify-between border-t border-white/5 pt-8">
        <div className="relative flex max-w-2xl flex-grow items-start pt-1.5">
          {/* Background timeline */}
          <div className="absolute left-0 right-0 top-[11px] z-0 h-[2px] rounded-full bg-white/10" />

          {/* Active progress line */}
          <div
            className="absolute left-0 top-[11px] z-0 h-[2px] rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] transition-all duration-500 ease-out"
            style={{
              width:
                scrollSnaps.length > 1
                  ? `${(selectedIndex / (scrollSnaps.length - 1)) * 100}%`
                  : '0%',
            }}
          />

          {/* Timeline steps */}
          <div className="relative z-10 flex w-full justify-between">
            {slides.map((slide, index) => {
              const isActive = selectedIndex === index;

              return (
                <button
                  key={slide.shortName}
                  type="button"
                  onClick={() => scrollTo(index)}
                  onMouseEnter={playHover}
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`Go to ${slide.title} slide`}
                  className={`group flex cursor-pointer flex-col items-center gap-4 text-center focus:outline-none ${
                    index === 0
                      ? 'items-start'
                      : index === slides.length - 1
                        ? 'items-end'
                        : 'items-center'
                  }`}
                >
                  {/* Timeline dot */}
                  <span
                    className={`relative z-10 h-3 w-3 shrink-0 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'scale-125 border-blue-500 bg-blue-500 shadow-[0_0_12px_#3b82f6]'
                        : 'border-white/20 bg-gray-950 group-hover:scale-110 group-hover:border-white/50'
                    }`}
                  />

                  {/* Step label */}
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 md:text-xs ${
                      isActive
                        ? 'text-white'
                        : 'text-white/30 group-hover:text-white/60'
                    }`}
                  >
                    {slide.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step counter */}
        <div className="mt-0.5 shrink-0 pl-4 font-mono text-xs font-bold tracking-widest text-white/40">
          {String(selectedIndex + 1).padStart(2, '0')} //{' '}
          {String(slides.length).padStart(2, '0')}
        </div>
      </div>

    </section>
  );
}
