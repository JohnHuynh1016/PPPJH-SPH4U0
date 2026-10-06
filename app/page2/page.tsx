import Image from "next/image";
import FloatingNav from '@/components/FloatingNav';

export default function page2() {
  return (
    // "scroll-smooth" enables the smooth gliding motion when anchor links are clicked
    <main className="scroll-smooth bg-gray-50 min-h-screen relative text-gray-900">
      
      {/* Floating Oval Navigation */}
      <FloatingNav />

      {/* Section 1: Overview */}
      <section 
        id="overview" 
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 text-center bg-gradient-to-b from-blue-50 to-white relative"
      >
        <div className="max-w-2xl flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Project Overview</h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to our project main page. This section introduces what we are building, who it is for, and the core problem it solves.
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
        id="features"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #1: Passions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          As a person I am, I’m always curious to explore new things and invent different solutions to other people's problems. Something about the nature of leadership, to empower others and multiply yourself has always been the fuel keeping me striving. I like to try to influence others no matter what position I’m in and I feel like that’s my innate passion.
        </p>
        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">⚡ Fast Performance</div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">🎨 Modern UI</div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">🔒 Highly Secure</div>
        </div>*/}
        {/**TEMPD */}
        <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Context */}
        <div className="text-left mb-16 max-w-xl">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Visual Portfolio</span>
          <h3 className="text-4xl font-black text-gray-900 mt-2">My Passions</h3>
        </div>

        {/* 🧩 Unique Asymmetric 3-Column Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Tall / Portrait Focus */}
          <div className="group space-y-4 md:translate-y-4 transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-gray-100 border border-gray-200 aspect-[3/4] rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm relative group-hover:shadow-md transition-shadow">
              {/* Replace with your <Image /> */}
              <span className="text-xs uppercase font-medium tracking-wider">[ 3:4 Tall Image ]</span>
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Taekwondo</h4>
              <p className="text-sm text-gray-500 mt-1">Learning martial arts is more of a physical passion for me. I first started learning martial arts during the pandemic, where everything feels isolated, and nothing was available for me at the time. I never liked the idea of fighting other people, but ever since enrolling in Black Belts World Taekwondo, I learnt that doing martial arts brings more than glory and violence. It meant knowing how to protect your loved ones and flexibility over my health
</p>
            </div>
          </div>

          {/* Column 2: Classic Square / Lifted Center */}
          <div className="group space-y-4 md:-translate-y-6 transition-transform duration-500 hover:-translate-y-10">
            <div className="bg-gray-900 aspect-square rounded-3xl flex items-center justify-center text-gray-500 overflow-hidden shadow-lg relative">
              {/* Dark contrasting background placeholder */}
              <span className="text-xs uppercase font-medium tracking-wider text-gray-400">[ 1:1 Square Image ]</span>
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Music</h4>
              <p className="text-sm text-gray-500 mt-1">The passion for music, more specifically, to play the flute, was something that I’ve picked up throughout my high school journey. When it comes to music, I entered grade 8 here at The Woodlands Secondary School with barely any musical experience compared to where I am today. I was so far as not knowing anything about orchestras and instruments, only picking my flute because it was the only instrument that rang a bell to me. Music awakened the harsh reality of what it takes to become a musician to me, but it also showed me that mastery beats perfection in every way. Music had me surrounded by amazing musicians with likeminded interests and presented me with memories that I will never forget.
</p>
            </div>
          </div>

          {/* Column 3: Wide / Landscape Focus */}
          <div className="group space-y-4 md:translate-y-12 transition-transform duration-500 hover:translate-y-8">
            <div className="bg-gray-100 border border-gray-200 aspect-[4/3] rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm relative group-hover:shadow-md transition-shadow">
              {/* Replace with your <Image /> */}
              <span className="text-xs uppercase font-medium tracking-wider">[ 4:3 Wide Image ]</span>
            </div>
            <div className="px-2">
              <h4 className="font-bold text-lg text-gray-900">Computation</h4>
              <p className="text-sm text-gray-500 mt-1">The idea of computation has been my interest since I started getting into STEM. Unlike other subjects, the field of computer science explores possibilities and algorithms, but ultimately, it is to manifest things simplified and accessible for humans. Like Donald Knuth said, “Programming is the art of telling another human being what one wants the computer to do.” As a child, people always told me that I have a habit of breaking things down before using it. I usually play Minecraft, Roblox, and consume Youtube contents like no others. But I often admire how they were able to make something so unique, and made it my passion to try to make things like they do. It is when I stepped into the computing world that I was able to meet amazing people and give me unique memories. I recently made a car simulation project that uses a gyrosensor and an accelerator to fabricate the experience of driving as real as possible without costing too much money and it has taught me so much along the way that I don’t think I would know them all without trying out.
</p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Section 3: Tech Stack */}
      <section 
        id="tech" 
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 text-center bg-gray-50"
      >
        <h2 className="text-4xl font-bold mb-4">Post #2: Research</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Built using modern, reliable technologies like Next.js, React, Tailwind CSS, and TypeScript for absolute stability.
        </p>
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        {/* TEMPA */}
        {/* Text Side */}
        <div>
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Seamless Integration</span>
          <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">Built to adapt to your current workflow</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our layout system reads directly from your architecture parameters, eliminating manual pipeline configurations. Simply drop in your structural hooks and watch the data synchronize immediately.
          </p>
          <ul className="space-y-3 font-medium text-gray-700">
            <li className="flex items-center gap-2">🟢 Zero configuration required</li>
            <li className="flex items-center gap-2">🟢 Hot-reloading module changes</li>
          </ul>
        </div>
        
        {/* Image Side */}
        <div className="bg-gray-100 border border-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-400 shadow-inner relative overflow-hidden">
          {/* Replace this div/text with your actual <Image src="..." /> component */}
          <span>[ Feature Preview / Graphic Asset ]</span>
        </div>
      </div>

      {/*TEMPB*/}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-2">Fast Setup</h4>
            <p className="text-gray-500 text-sm leading-relaxed"> Initialize code parameters locally within seconds with zero environmental lockouts or container installations.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg mb-4">🔒</div>
            <h4 className="text-xl font-bold mb-2">Secure Isolation</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Rest easy knowing system modules process securely inside isolated memory boundaries natively without data leaks.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg mb-4">📈</div>
            <h4 className="text-xl font-bold mb-2">Infinite Scaling</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Built right on global edge caches to handle arbitrary volume spikes seamlessly across every major global sector region.</p>
          </div>
        </div>
      </div>

      {/*TEMPC*/}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
      {/* Image Side */}
      <div className="bg-gray-100 border border-gray-200 aspect-video rounded-2xl flex items-center justify-center text-gray-400 shadow-inner order-2 md:order-1">
        <span>[ Performance Graph / Analytics Illustration ]</span>
      </div>

      {/* Text Side */}
      <div className="order-1 md:order-2">
        <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Lightning Performance</span>
        <h3 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">Optimized Core Rendering</h3>
        <p className="text-gray-600 leading-relaxed">
          By offloading presentation layout layers down to server-side static frameworks, your visitors fetch zero bloated client-side JavaScript packages. Experience pure speed on any cellular connection interface instantly.
        </p>
      </div>
    </div>



      </section>

      {/* Section 4: Contact */}
      <section 
        id="contact" 
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #3: Topic Selection</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Have questions about the project? Reach out to our team or check our open-source repositories.
        </p>
      </section>
      <section id="x" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white">Hi</section>

    </main>
  );
}
