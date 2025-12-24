"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">We are building the <span className="text-indigo-400">brain</span> for your content.</h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Novatrix AI was founded with a simple mission: to help creators focus on creativity, not grunt work. We believe that AI shouldn't replace humans, but empower them to reach new heights of productivity.
            </p>
            <div className="flex gap-4 text-sm font-bold text-white">
              <div className="px-4 py-2 rounded-full bg-white/10">Born in 2023</div>
              <div className="px-4 py-2 rounded-full bg-white/10">San Francisco</div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
          >
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
              alt="Team working"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Our Vision", desc: "To create a world where writer's block is a thing of the past." },
             { title: "Our Tech", desc: "Built on proprietary LLM infrastructure optimized for marketing nuances." },
             { title: "Our Promise", desc: "Your data is yours. We never train our models on customer private data." }
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5">
               <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
               <p className="text-slate-400">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
