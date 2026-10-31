'use client';

import Image from "next/image";
import Link from 'next/link';
import FloatingNav from '@/components/FloatingNav';
import { useSound } from '@/hooks/useSound';
import ResearchSlider from '@/components/ResearchSlider';
import { useEffect } from "react";
import React from "react";
import { GanttChart, type Task } from '@/components/GanttChart';

const mySchedule: Task[] = [
  {
    id: 'task-1',
    name: 'Complete Plan of Action',
    start: '2026-10-25',
    end: '2026-10-30',
    progress: 100,
  },
  {
    id: 'task-2',
    name: 'Secondary Research',
    start: '2026-11-06',
    end: '2026-11-16',
    progress: 0,
    custom_class: 'bar-yellow'
  },
  {
    id: 'task-3',
    name: "Mach, Reynold's number, and Bernoulli's principle",
    start: '2026-11-06',
    end: '2026-11-10',
    progress: 15,
  },
  {
    id: 'task-4',
    name: "Exploring Lift, Drag, and Weight Equations and Coefficients",
    start: '2026-11-06',
    end: '2026-11-10',
    progress: 6,
    dependencies: 'task-3'
  },
  {
    id: 'task-5',
    name: 'Principles and Applications of Aerodynamic Simulation',
    start: '2026-11-10',
    end: '2026-11-14',
    progress: 7,
    dependencies: 'task-4'
  },
  {
    id: 'task-6',
    name: 'Tunnel Types & Scaling Laws',
    start: '2026-11-10',
    end: '2026-11-16',
    progress: 0,
    dependencies: 'task-5'
  },
  {
    id: 'task-7',
    name: 'Primary Research',
    start: '2026-11-16',
    end: '2026-11-26',
    progress: 0,
    custom_class: 'bar-yellow'
  },
  {
    id: 'task-8',
    name: 'Miniturized Wind Tunnel System Design',
    start: '2026-11-18',
    end: '2026-11-22',
    progress: 0,
  },
  {
    id: 'task-9',
    name: 'Wind Tunnel Prototyping',
    start: '2026-11-18',
    end: '2026-12-12',
    progress: 0,
    dependencies: 'task-8'
  },
  {
    id: 'task-10',
    name: 'Simulate Circuit System',
    start: '2026-11-22',
    end: '2026-11-30',
    progress: 0,
    dependencies: 'task-9'
  },
  {
    id: 'task-11',
    name: 'Gathering Materials & Fog Testing',
    start: '2026-11-30',
    end: '2026-12-05',
    progress: 0,
    dependencies: 'task-10'
  },
  {
    id: 'task-12',
    name: 'Implementation & Review',
    start: '2026-12-05',
    end: '2026-12-12',
    progress: 0,
    dependencies: 'task-11'
  },
  {
    id: 'task-13',
    name: 'Trials',
    start: '2026-12-12',
    end: '2026-12-18',
    progress: 0,
    dependencies: 'task-12'
  },
  {
    id: 'task-14',
    name: 'Complete Build / Experiment / Demonstration',
    start: '2026-11-06',
    end: '2026-12-18',
    progress: 0,
    custom_class: 'bar-yellow'
  },
  {
    id: 'task-15',
    name: 'Complete Build / Experiment / Demonstration',
    start: '2026-12-05',
    end: '2026-12-21',
    progress: 0,
  },
  {
    id: 'task-16',
    name: 'Complete Script & Trifold',
    start: '2026-11-06',
    end: '2027-01-04',
    progress: 0,
    custom_class: 'bar-yellow'
  },
  {
    id: 'task-17',
    name: 'Data Gathering',
    start: '2026-12-21',
    end: '2027-01-04',
    progress: 0,
    custom_class: 'bar-grey'
  },
  {
    id: 'task-18',
    name: 'Presentation',
    start: '2027-01-05',
    end: '2027-01-06',
    progress: 0,
    custom_class: 'bar-green'
  },
  {
    id: 'task-19',
    name: 'Collection',
    start: '2027-01-05',
    end: '2027-01-11',
    progress: 0,
  },
  {
    id: 'task-20',
    name: 'Final Reflection and Explanation',
    start: '2027-01-06',
    end: '2027-01-11',
    progress: 0,
    dependencies: 'task-19'
  },
  {
    id: 'task-21',
    name: 'Final Post',
    start: '2027-01-11',
    end: '2027-01-11',
    progress: 0,
    custom_class: 'bar-purple'
  },
];

export default function HomePage() {
  const { playHover } = useSound();

  useEffect(() => {
    if (window.location.hash) {
      const timer = setTimeout(() => {
        const id = window.location.hash.replace('#','');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior:'smooth',
            block:'start',
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    // "scroll-smooth" enables the smooth gliding motion when anchor links are clicked
    <main className="scroll-smooth bg-gray-50 min-h-screen relative text-gray-900">
      
      {/* Floating Oval Navigation */}
      <FloatingNav />

      {/* Section 1: Overview */}
      <section 
        id="1" 
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 text-center bg-gradient-to-b from-blue-50 to-white relative"
      >
        <div className="max-w-2xl flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">John Huynh</h1>
          <p className="text-lg text-gray-600 mb-8">
            SPH4U0, Physics Passion Project 2026 // John Huynh
          </p>
        </div>

        {/* 🎯 Bouncing Scroll Arrow Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <svg 
            className="w-6 h-6 text-gray-400 animate-bounce" 
            style={{ animationDuration: '2s' }} /* Slows down the default bounce to make it smooth */
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </div>
      </section>

      {/* Section 2: Features */}
      <section 
        id="2"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #1: Passions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          I am naturally curious and enjoy exploring new ideas and developing creative solutions to the challenges others face. Something about the nature of leadership, to empower others and multiplying one another has always been the fuel keeping me striving. Regardless of the role I am in, I'm passionate to positively influence those around me.
        </p>
        <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Context */}
        <div className="text-left mb-16 max-w-xl">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">___</span>
          <h3 className="text-4xl font-black text-gray-900 mt-2">My Passions</h3>
        </div>

        {/* 🧩 Unique Asymmetric 3-Column Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Tall / Portrait Focus */}
          <div onMouseEnter={playHover} className="group space-y-4 md:translate-y-4 transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-gray-100 border border-gray-200 aspect-[3/4] rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm relative group-hover:shadow-md transition-shadow">
              <Image 
                src="/twdpng.png"
                alt="Taekwondo Black Belt World"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Taekwondo</h4>
              <p className="text-sm text-gray-500 mt-1">Taekwondo became one of my first major physical interests during the pandemic, a period when many activities were unavailable and daily life often felt isolated. Although I was initially uncomfortable with the idea of fighting, I discovered after joining Black Belt World Taekwondo that martial arts involve much more than competition. It meant knowing the importance of protecting myself and the people I care about. Taekwondo has taught me discipline and also encouraged me to take greater responsibility for my physical health and personal development.
              </p>
            </div>
          </div>

          {/* Column 2: Classic Square / Lifted Center */}
          <div onMouseEnter={playHover} className="group space-y-4 md:-translate-y-6 transition-transform duration-500 hover:-translate-y-10">
            <div className="bg-gray-900 aspect-square rounded-3xl flex items-center justify-center text-gray-500 overflow-hidden shadow-lg relative">
              <Image 
                src="/calvinjohnmaxim.jpg"
                alt="Snow Show 2025"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Music</h4>
              <p className="text-sm text-gray-500 mt-1">The passion for music, more specifically, to play the flute, was something that I’ve picked up throughout my high school journey. When it comes to music, I entered grade 8 here at The Woodlands Secondary School with barely any musical experience compared to where I am today. I was so far as not knowing anything about orchestras and instruments, only picking my flute because it was the only instrument that rang a bell to me. Music awakened the harsh reality of what it takes to become a musician to me, but it also showed me that mastery beats perfection in every way. Music had me surrounded by amazing musicians with likeminded interests and presented me with memories that I will never forget.
</p>
            </div>
          </div>

          {/* Column 3: Wide / Landscape Focus */}
          <div onMouseEnter={playHover} className="group space-y-4 md:translate-y-12 transition-transform duration-500 hover:translate-y-8">
            <div className="bg-gray-100 border border-gray-200 aspect-[4/3] rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm relative group-hover:shadow-md transition-shadow">
              <Image 
                src="/unitycomp.png"
                alt="1016project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Computation</h4>
              <p className="text-sm text-gray-500 mt-1">The idea of computation has been my interest since I started getting into STEM. Unlike other subjects, the field of computer science explores possibilities and algorithms, but ultimately, it is to manifest things simplified and accessible for humans. Like Donald Knuth said, “Programming is the art of telling another human being what one wants the computer to do.” As a child, people always told me that I have a habit of breaking things down before using it. I usually play Minecraft, Roblox, and consume Youtube contents like no others. But I often admire how they were able to make something so unique, and made it my passion to try to make things like they do. It is when I stepped into the computing world that I was able to meet amazing people and give me unique memories. I recently made a car simulation project that uses a gyrosensor and an accelerator to fabricate the experience of driving as real as possible without costing too much money and it has taught me so much along the way that I don’t think I would know them all without trying out.
</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20">

        {/* 🗺️ Horizontal 2-Row Grid Container */}
        <div className="space-y-6"> {/* Unified row spacing */}
        
        {/* Row 1: Biking */}
        <div onMouseEnter={playHover} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch md:translate-y-1 transition-transform duration-500 hover:-translate-y-1">
          
          {/* Block 1 (Wide Image Box): Isolated inside md:col-span-2 */}
          <div className="md:col-span-2">
            <div className="w-full h-full min-h-[200px] md:min-h-[300px] aspect-[21/9] md:aspect-auto bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <Image 
                src="/20260628_094939.jpg"
                alt="biking with calvin to High Park"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Block 2 (Text Box) */}
          <div className="md:col-span-3 bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col justify-center text-left">
            <h4 className="font-bold text-lg text-gray-900 mb-3">Biking</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              On the contrary of early passions, biking became a hobby during quarantine, when I had more time to explore new activities. I was initially attracted to cycling because it was an efficient and environmentally friendly form of transportation, but it soon became much more than that. Cycling gives me an opportunity to stay active, clear my mind, and experience new places. Every time I rode on my bike it was always so refreshing and I was gifted upon such amazing sceneries. <br/><br/> My friend Calvin Holselth and I have completed several long-distance rides, including a 50-kilometre trip to High Park and a 20-kilometre trip to Jack Darling Memorial Park. These rides have strengthened my endurance and confidence while giving me the chance to enjoy memorable experiences with a close friend.
            </p>
          </div>
        </div>

        {/* Row 2: Math */}
        <div onMouseEnter={playHover} className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch md:translate-y-1 transition-transform duration-500 hover:-translate-y-1">
          
          {/* Block 3 (Text Box): Placed first in code for natural DOM rendering */}
          <div className="md:col-span-3 bg-gray-900 rounded-3xl p-8 flex flex-col justify-center text-left text-white order-2 md:order-1">
            <h4 className="font-bold text-lg text-white mb-3">Math</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mathematics appeals to me because it is not simply about working with numbers; it is about analyzing problems and developing effective solutions. I enjoy the process of considering different approaches, testing ideas, and using logic to reach a conclusion. For me, mathematics is a meaningful way to express creativity and persistence. Through mathematics was I able to meet so many like-minded and supportive people, in an open environment. They encouraged me to participate in contests like the Waterloo Euclid Mathematics contest, utilizing critical thinking into solving unfamiliar and challenging problems. These experiences have improved my logical thinking and shown me the value of approaching difficult questions with patience and curiosity.
            </p>
          </div>

          {/* Block 4 (Wide Image Box): Placed second in code, isolated inside md:col-span-2 */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="w-full h-full min-h-[200px] md:min-h-[300px] aspect-[21/9] md:aspect-auto bg-gray-100 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <Image 
                src="/maths.jpg"
                alt="a random picture of my board"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
</div>

      </div>
      </section>
      
      <ResearchSlider />


      <section
        id="4"
        className="bg-gray-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 px-2">
              Post #3: Plan of Action
            </h2>
            <p className="mt-2 text-gray-500 px-2">
              This plan presents a detailed timeline from October 2026 to January 2027 for the research, simulation, construction, and testing of a miniature wind tunnel system, leading up to the preparation of presentation materials. The initial two weeks will focus on researching the principles and forces related to aerodynamics, as well as examining how various shapes respond differently to air under diverse conditions. Furthermore, the main research phase will involve not only studying wind tunnel models but also understanding scaling laws to effectively replicate high-speed and varying altitude environments for small objects. A significant amount of remainder time will be dedicated to obtaining the necessary resources and conducting experiments to prevent any unforeseen delays, allowing for ample time to prepare the trifold and visuals.
            </p>
          </div>
          <GanttChart tasks={mySchedule} />
        </div>
      </section>
      <section 
        id="5" 
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #4: Topic Selection</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

    </main>
  );
}