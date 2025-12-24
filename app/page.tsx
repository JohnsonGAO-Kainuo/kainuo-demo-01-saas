"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Introducing Novatrix V2.0 Engine
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
          >
            Create content <br/>
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              at the speed of thought.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Stop staring at a blank cursor. Novatrix uses advanced AI to generate SEO-optimized articles, emails, and ad copy that actually converts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-indigo-600 rounded-full font-bold text-lg text-white overflow-hidden shadow-2xl shadow-indigo-600/30 transition-all hover:scale-105 hover:shadow-indigo-600/50">
              <span className="relative z-10 flex items-center gap-2">
                Start Writing Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg text-slate-300 border border-white/10 hover:bg-white/5 transition hover:text-white group">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Dashboard Preview (Glassmorphism + Real Image) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-xl border border-white/10 bg-[#12121A]/80 backdrop-blur-md p-2 shadow-2xl ring-1 ring-white/10 overflow-hidden">
              <div className="rounded-lg overflow-hidden bg-[#0F0F16] aspect-[16/10] relative">
                {/* Real Dashboard Image from Unsplash */}
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                  alt="Dashboard Interface"
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for performance</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Most AI tools are clunky. We built Novatrix to be an extension of your mind.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Built on Next.js 14 for instant page loads and zero latency." },
              { icon: Shield, title: "Enterprise Secure", desc: "SOC2 compliant data handling with end-to-end encryption." },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Track how your content performs across all channels." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition duration-300 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">Trusted by modern teams at</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition duration-500">
             {/* Mock Logos - Text for now, but styled */}
             {['Acme Corp', 'Spherule', 'GlobalBank', 'Nietzsche', 'Bolt'].map((logo) => (
               <div key={logo} className="text-xl font-bold font-serif text-white/60 hover:text-white transition">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050508] text-slate-500 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <span className="text-xl font-bold text-white block mb-4">Novatrix.ai</span>
            <p className="max-w-xs">Empowering the next generation of content creators with ethical AI tools.</p>
            <div className="flex gap-4 mt-6">
              {/* Social Icons */}
              {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                <div key={social} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                  <span className="text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-indigo-400 transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">API</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-indigo-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t border-white/5 text-center">
          © 2024 KainuoTech Demo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
