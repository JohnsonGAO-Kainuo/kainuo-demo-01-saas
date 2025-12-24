"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Shield, 
  BarChart3,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will create it inline if needed, let's keep it safe by defining inline for now.

// Inline utility for class merging if not present
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0A0A0F]/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Novatrix<span className="text-indigo-400">.ai</span>
            </span>
          </motion.div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get Started Free
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 overflow-hidden">
        <div className="container mx-auto text-center max-w-5xl">
          
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

          {/* Dashboard Preview (Glassmorphism) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-5xl perspective-1000"
          >
            {/* Glow behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            
            <div className="relative rounded-xl border border-white/10 bg-[#12121A]/80 backdrop-blur-md p-2 shadow-2xl ring-1 ring-white/10">
              <div className="rounded-lg overflow-hidden bg-[#0F0F16] aspect-[16/10] relative">
                {/* Mock UI Header */}
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="ml-4 h-5 w-64 bg-white/5 rounded-full"></div>
                </div>
                {/* Mock UI Body */}
                <div className="p-8 grid grid-cols-4 gap-6 h-full">
                   <div className="col-span-1 border-r border-white/5 space-y-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="h-8 bg-white/5 rounded-md w-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                   </div>
                   <div className="col-span-3 space-y-6">
                      <div className="h-12 w-3/4 bg-white/5 rounded-lg"></div>
                      <div className="h-4 w-full bg-white/5 rounded"></div>
                      <div className="h-4 w-full bg-white/5 rounded"></div>
                      <div className="h-4 w-2/3 bg-white/5 rounded"></div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-8">
                         <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 p-4">
                            <div className="w-8 h-8 rounded-md bg-indigo-500/20 mb-3"></div>
                            <div className="h-4 w-20 bg-white/10 rounded mb-2"></div>
                         </div>
                         <div className="h-32 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-4">
                            <div className="w-8 h-8 rounded-md bg-cyan-500/20 mb-3"></div>
                            <div className="h-4 w-20 bg-white/10 rounded mb-2"></div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 relative">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#08080C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
               <span className="text-slate-400">Monthly</span>
               <div className="w-12 h-6 rounded-full bg-indigo-600 p-1 cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-white translate-x-6"></div>
               </div>
               <span className="text-white">Yearly (Save 20%)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-slate-300 hover:border-white/10 transition">
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-white mb-6">$0</div>
              <ul className="space-y-4 mb-8">
                {['5,000 words/mo', 'Basic templates', '1 user'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-semibold">Get Started</button>
            </div>

            {/* Card 2 (Highlight) */}
            <div className="relative p-8 rounded-3xl bg-indigo-900/10 border border-indigo-500/30 text-white transform md:scale-110 shadow-2xl shadow-indigo-900/20 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-500 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-indigo-200/50 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {['Unlimited words', 'Advanced SEO Mode', '5 users', 'Priority Support'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold shadow-lg shadow-indigo-500/25">Start Free Trial</button>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5 text-slate-300 hover:border-white/10 transition">
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                {['API Access', 'Custom LLM Models', 'SSO & Audit Logs'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-semibold">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050508] text-slate-500 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <span className="text-xl font-bold text-white block mb-4">Novatrix.ai</span>
            <p className="max-w-xs">Empowering the next generation of content creators with ethical AI tools.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">Features</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Integrations</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-indigo-400 transition">About</Link></li>
              <li><Link href="#" className="hover:text-indigo-400 transition">Blog</Link></li>
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
