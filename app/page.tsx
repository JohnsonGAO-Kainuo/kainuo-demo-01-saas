import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            KainuoAI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="#features" className="hover:text-white transition">Features</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#about" className="hover:text-white transition">About</Link>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-medium transition shadow-lg shadow-indigo-500/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            v2.0 is now live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Write content <span className="text-indigo-400">10x faster</span> <br/>
            with AI-powered workflow.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Stop struggling with writer's block. KainuoAI helps you generate high-quality blog posts, emails, and social media content in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition flex items-center justify-center gap-2">
              Start Writing for Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg text-slate-300 border border-slate-700 hover:bg-slate-800 transition">
              View Demo
            </button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-2 shadow-2xl">
              <div className="aspect-[16/9] bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center text-slate-600">
                [Dashboard Interface Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-slate-900 bg-slate-950/50">
        <div className="container mx-auto text-center">
          <p className="text-slate-500 text-sm font-medium mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
             {/* Mock Logos */}
             {['Acme', 'Spherule', 'GlobalBank', 'Nietzsche', 'Bolt'].map((logo) => (
               <div key={logo} className="text-xl font-bold font-serif text-slate-400">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-600 text-sm">
        © 2024 KainuoTech. All rights reserved.
      </footer>
    </div>
  );
}
