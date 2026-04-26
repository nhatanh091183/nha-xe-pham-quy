"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Banknote, Headphones, Users } from "lucide-react";

// Strip cam kết — hiển thị ngang, gọn
const reasons = [
  { icon: MapPin,       title: "Đón tận nơi",         desc: "Trong nội thành Thái Bình & Hà Nội" },
  { icon: Clock,        title: "Đúng giờ mỗi ngày",   desc: "Lịch cố định, không bắt khách chờ" },
  { icon: Shield,       title: "Xe sạch, lái xe lịch", desc: "Vệ sinh trước mỗi chuyến" },
  { icon: Banknote,     title: "Giá cố định",          desc: "Báo giá trước, không phụ phí" },
  { icon: Headphones,   title: "Hỗ trợ Zalo 24/7",    desc: "Xác nhận chỗ trong vài phút" },
  { icon: Users,        title: "Không nhồi nhét",      desc: "Đủ chỗ mới chạy, thoải mái suốt hành trình" },
];

export function Testimonials() {
  return (
    <section id="cam-ket" className="py-20 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3">Cam kết</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tại sao khách chọn chúng tôi?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-3 items-start p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 mt-0.5">
                <r.icon size={14} className="text-blue-400" />
              </div>
              <div>
                <p className="text-zinc-100 text-sm font-semibold leading-snug">{r.title}</p>
                <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
