"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Choose your plan</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Scale your content production without breaking the bank. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 text-slate-300 hover:border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-white mb-6">$0</div>
              <ul className="space-y-4 mb-8">
                {['5,000 words/mo', 'Basic templates', '1 user'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-semibold">Get Started</button>
            </motion.div>

            {/* Card 2 (Highlight) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-8 rounded-3xl bg-indigo-900/10 border border-indigo-500/30 text-white shadow-2xl shadow-indigo-900/20 z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-500 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Pro</h3>
              <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-indigo-200/50 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {['Unlimited words', 'Advanced SEO Mode', '5 users', 'Priority Support'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold shadow-lg shadow-indigo-500/25">Start Free Trial</button>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 text-slate-300 hover:border-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8">
                {['API Access', 'Custom LLM Models', 'SSO & Audit Logs'].map(item => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-500"/> {item}</li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition font-semibold">Contact Sales</button>
            </motion.div>
        </div>
      </div>
    </div>
  );
}

