// app/page1/page.tsx
import Link from 'next/link';

export default function Page1() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Custom, Dedicated Navigation Bar unique to Page 1 */}
      <header className="sticky top-0 bg-gray-900 text-white z-40 shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">Conferencce Journal</div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <a href="#metrics" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Metrics
            </a>
          </nav>
        </div>
      </header>

      {/* Main Page 1 Container Body Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Subpage /page1</span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4">Conference Journal</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus leo, consequat nec sagittis ac, tincidunt at diam. Aliquam eget.
          </p>
        </div>

        {/* Section block examples */}
        <section id="metrics" className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Place holder #1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 uppercase font-medium"></div>
              <div className="text-3xl font-black text-emerald-500 mt-1"></div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 uppercase font-medium"></div>
              <div className="text-3xl font-black text-blue-600 mt-1">&lt; </div>
            </div>
          </div>
        </section>

        <p className="text-gray-500 text-sm">
          Want to return to the floating panel dashboard style presentation layer? Click on the 
          <Link href="/" className="text-blue-600 font-medium underline mx-1 hover:text-blue-800">Back to Home</Link> 
          link inside the structural top layout header menu banner bar anytime.
        </p>
      </main>
    </div>
  );
}
