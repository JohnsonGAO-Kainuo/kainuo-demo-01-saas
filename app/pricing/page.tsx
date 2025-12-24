"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h1>
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
          <div className="relative p-8 rounded-3xl bg-indigo-900/10 border border-indigo-500/30 text-white transform md:scale-110 shadow-2xl shadow-indigo-900/20 z-10 backdrop-blur-xl">
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
    </div>
  );
}
