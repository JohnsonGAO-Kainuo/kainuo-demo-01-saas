"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">We are building the brain for your content.</h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">
            Novatrix AI was founded with a simple mission: to help creators focus on creativity, not grunt work. We believe that AI shouldn't replace humans, but empower them to reach new heights of productivity.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
           <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-slate-400">To create a world where writer's block is a thing of the past, and quality content is accessible to everyone.</p>
           </div>
           <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Our Tech</h2>
              <p className="text-slate-400">Built on the latest LLM infrastructure, our proprietary engine understands context, tone, and SEO nuances better than generic tools.</p>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

