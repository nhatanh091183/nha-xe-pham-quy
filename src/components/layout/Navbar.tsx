"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const PHONE = "0968153937";
const PHONE_DISPLAY = "0968 153 937";

// Navbar tối giản cho landing page — chỉ logo + nút gọi
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-white text-base tracking-tight">
          Nhà xe <span className="text-blue-400">Phạm Quý</span>
        </a>

        {/* Nút gọi — luôn hiển thị */}
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-[0.97] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-500/20"
        >
          <Phone size={14} />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Gọi ngay</span>
        </a>
      </div>
    </header>
  );
}
