"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ChevronDown } from "lucide-react";
import { ZaloIcon } from "@/components/ui/ZaloIcon";

const PHONE = "0968153937";
const PHONE_DISPLAY = "0968 153 937";
const ZALO_LINK = `https://zalo.me/${PHONE}`;

const stats = [
  { value: "300K", label: "Ghép ghế / người" },
  { value: "800K", label: "Bao xe từ" },
  { value: "2h30", label: "Thái Bình → HN" },
  { value: "24/7", label: "Hoạt động" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Nền */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/4 blur-[100px] rounded-full" />
      </div>
      {/* Lưới nền */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 w-full pt-24 pb-12">

        {/* ── BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Hoạt động hằng ngày · Đưa đón tận nơi
          </span>
        </motion.div>

        {/* ── HEADLINE ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-5"
        >
          Xe Thái Bình
          <br />
          <span className="text-blue-400">– Hà Nội</span>
        </motion.h1>

        {/* ── SUBTEXT ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-center text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-9"
        >
          Ghép ghế <strong className="text-zinc-200">300K</strong> &nbsp;·&nbsp;
          Bao xe từ <strong className="text-zinc-200">800K</strong> &nbsp;·&nbsp;
          Nhận gửi đồ nhanh
        </motion.p>

        {/* ── CTA BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-2.5 bg-blue-500 hover:bg-blue-600 active:scale-[0.97] text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-blue-500/25 w-full sm:w-auto"
          >
            <Phone size={18} />
            Gọi đặt xe: {PHONE_DISPLAY}
          </a>
          <a
            href={ZALO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#0068FF] hover:bg-[#0055dd] active:scale-[0.97] text-white font-bold px-8 py-4 rounded-xl text-base transition-all w-full sm:w-auto"
          >
            <ZaloIcon size={18} />
            Nhắn Zalo ngay
          </a>
        </motion.div>

        {/* ── BANNER ẢNH ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/70 mb-10"
        >
          <Image
            src="/baner.jpg"
            alt="Nhà xe Phạm Quý – Xe ghép Thái Bình Hà Nội"
            width={1200}
            height={450}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        {/* ── STATS STRIP ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-4 gap-2 sm:gap-6 max-w-lg mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-white">{s.value}</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── SCROLL HINT ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-10"
        >
          <ChevronDown size={18} className="text-zinc-700 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
