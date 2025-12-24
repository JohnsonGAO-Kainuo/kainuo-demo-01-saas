"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Get in touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-[#0A0A0F] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none transition" />
                  <input type="email" placeholder="Email" className="w-full bg-[#0A0A0F] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none transition" />
                </div>
                <textarea rows={4} placeholder="How can we help?" className="w-full bg-[#0A0A0F] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 outline-none transition"></textarea>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-indigo-600/20">
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <Mail className="w-6 h-6 text-indigo-400 mb-3" />
                <div className="text-sm font-bold">Email</div>
                <div className="text-xs text-slate-400">hello@novatrix.ai</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <Phone className="w-6 h-6 text-indigo-400 mb-3" />
                <div className="text-sm font-bold">Phone</div>
                <div className="text-xs text-slate-400">+1 (555) 123-4567</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="h-full min-h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative"
          >
            {/* Dark Mode Map Style */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.097732865922!2d-122.39568768468202!3d37.78768297975765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f6a746561%3A0x63765a0755562057!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1645564658295!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-[#0A0A0F]/90 backdrop-blur p-4 rounded-xl border border-white/10 max-w-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
                <div>
                  <div className="font-bold text-sm">Novatrix HQ</div>
                  <div className="text-xs text-slate-400 mt-1">456 Tech Boulevard, Suite 800<br/>San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

