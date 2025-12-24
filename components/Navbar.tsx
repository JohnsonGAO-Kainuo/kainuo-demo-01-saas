"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={cn(
        "fixed w-full z-50 top-0 backdrop-blur-xl",
        isHome
          ? "border-b border-white/5 bg-[#0A0A0F]/70"
          : "border-b border-slate-200 bg-white/80"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className={cn("text-xl font-bold tracking-tight", isHome ? "text-white" : "text-slate-900")}>
            Novatrix<span className="text-indigo-400">.ai</span>
          </span>
        </Link>

        <div className={cn("hidden md:flex gap-8 text-sm font-medium", isHome ? "text-slate-400" : "text-slate-600")}>
          {[
            { name: 'Features', path: '/#features' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link key={item.name} href={item.path} className={cn(
              "transition-colors relative group py-2",
              isHome ? "hover:text-white" : "hover:text-slate-900",
              pathname === item.path ? (isHome ? "text-white" : "text-slate-900") : ""
            )}>
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-indigo-500 transition-all duration-300",
                pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className={cn(
              "text-sm font-medium transition hidden md:block",
              isHome ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Sign In
          </Link>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

