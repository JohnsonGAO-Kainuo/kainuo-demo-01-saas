import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novatrix AI | Next-Gen Content Generation Platform",
  description: "Create SEO-optimized articles, emails, and social posts 10x faster with our advanced LLM engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0A0A0F] text-white">
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
