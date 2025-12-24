"use client";

import { motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20, scale: isOpen ? 1 : 0.9, pointerEvents: isOpen ? 'auto' : 'none' }}
        className="w-80 bg-[#1A1A24] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="font-bold text-sm text-white">Novatrix Assistant</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 h-64 flex flex-col gap-4 overflow-y-auto">
          <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 max-w-[85%]">
            Hi there! 👋 How can I help you generate better content today?
          </div>
          <div className="bg-indigo-600/20 border border-indigo-500/30 p-3 rounded-2xl rounded-tr-none text-xs text-indigo-200 max-w-[85%] self-end">
            I'm looking for pricing information.
          </div>
          <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-xs text-slate-300 max-w-[85%]">
            Great! Our Pro plan starts at $29/mo. Would you like to start a free trial?
          </div>
        </div>
        <div className="p-3 border-t border-white/5">
          <input type="text" placeholder="Type a message..." className="w-full bg-[#0A0A0F] border border-white/10 rounded-full px-4 py-2 text-xs text-white outline-none focus:border-indigo-500 transition" />
        </div>
      </motion.div>

      {/* Toggle Button */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}

