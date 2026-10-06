import Image from "next/image";
import FloatingNav from '@/components/FloatingNav';

export default function HomePage() {
  return (
    // "scroll-smooth" enables the smooth gliding motion when anchor links are clicked
    <main className="scroll-smooth bg-gray-50 min-h-screen relative text-gray-900">
      
      {/* Floating Oval Navigation */}
      <FloatingNav />

      {/* Section 1: Overview */}
      <section 
        id="home" 
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
        id="features"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #1: Passions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          I’m always curious to explore new things and invent different solutions to other people's problems. Something about the nature of leadership, to empower others and multiply yourself has always been the fuel keeping me striving. I like to try to influence others no matter what position I’m in and I feel like that’s my innate passion.
        </p>
        <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header Context */}
        <div className="text-left mb-16 max-w-xl">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">#1</span>
          <h3 className="text-4xl font-black text-gray-900 mt-2">My Passions</h3>
        </div>

        {/* 🧩 Unique Asymmetric 3-Column Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Tall / Portrait Focus */}
          <div className="group space-y-4 md:translate-y-4 transition-transform duration-500 hover:-translate-y-1">
            <div className="bg-gray-100 border border-gray-200 aspect-[3/4] rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm relative group-hover:shadow-md transition-shadow">
              <Image 
                src="/twdpng.png"
                alt="Description of your image"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
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
              <Image 
                src="/calvinjohnmaxim.jpg"
                alt="Description of your image"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
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
              <Image 
                src="/unitycomp.png"
                alt="Description of your image"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
              <span className="text-xs uppercase font-medium tracking-wider">[ 4:3 Wide Image ]</span>
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
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch md:translate-y-1 transition-transform duration-500 hover:-translate-y-1">
            {/* Block 1 (Wide Image): Takes up 2 columns out of 5 */}
            <div className="md:col-span-2 bg-gray-100 border border-gray-200 aspect-[21/9] md:aspect-auto rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs uppercase font-medium tracking-wider">[ 21:9 Ultra-Wide Image ]</span>
            </div>

            {/* Block 2 (Text Context): Takes up 3 columns out of 5 */}
            <div className="md:col-span-3 bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col justify-center text-left">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Biking</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                I have a preposterous passion for biking. On the other hand from my other passions being adopted early on, biking as a hobby just came to me naturally. Back then, during quarantine times, I had all the time to myself staying at my old apartment. I also had on a bucket list of things I’d like to learn and I stumbled upon getting started on my bike. Fascinated by the vehicle’s fuel efficiency, none at all, I was determined to learn how to ride my bike as if it was the first thing I’d take up on. Fast forward to today, my bike to me was like faster-than-walking transportation, plus benefits. Every time I rode on my bike it was always so refreshing and I was gifted upon amazing sceneries. Me and my dear friend Calvin had done so many incredible feats like biking 50km to High Park and 20km to Jack Dorling Memorial Park.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch pt-6 md:translate-y-1 transition-transform duration-500 hover:-translate-y-1">
            {/* Block 3 (Text Context): Takes up 3 columns out of 5 */}
            <div className="md:col-span-3 bg-gray-900 rounded-3xl p-8 flex flex-col justify-center text-left text-white order-4 md:order-3">
              <h4 className="font-bold text-lg text-white mb-3">Math</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Math. I adore it as a passion because math isn’t just about doing the number work, it’s about problem-solving. And the privilege to brainstorm solutions to a problem for me is the way I want to express myself, to try and come up with solutions to problems at work, problems with numbers, problems that can generate meaningful solutions. Thanks to math, I was able to meet such amazing and like-minded people, in an open environment. They help encourage me to participate in contests like the Euclid contest, utilizing not only my knowledge on math, but also tackle the unique challenges that you would need to think logically to solve.
              </p>
            </div>

            {/* Block 4 (Wide Image): Takes up 2 columns out of 5 */}
            <div className="md:col-span-2 bg-gray-100 border border-gray-200 aspect-[21/9] md:aspect-auto rounded-3xl flex items-center justify-center text-gray-400 overflow-hidden shadow-sm hover:shadow-md transition-shadow order-3 md:order-4">
              <span className="text-xs uppercase font-medium tracking-wider">[ 21:9 Inverted Ultra-Wide Image ]</span>
            </div>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        
      </div>
      </section>

      {/* Section 4: Contact */}
      <section 
        id="contact" 
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-4">Post #3: Topic Selection</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </main>
  );
}
