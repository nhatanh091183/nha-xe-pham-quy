"use client";

import { motion } from "framer-motion";
import { Users, Car, Package } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Ghép ghế",
    price: "300.000đ / người",
    desc: "Đi chung xe, chia sẻ chi phí. Khởi hành đúng lịch, đón tận nơi.",
    color: "blue",
  },
  {
    icon: Car,
    title: "Bao xe riêng",
    price: "Từ 800.000đ / chuyến",
    desc: "Xe 4 chỗ hoặc 7 chỗ chỉ của bạn. Chủ động thời gian, không chờ đợi.",
    color: "green",
  },
  {
    icon: Package,
    title: "Gửi đồ",
    price: "Liên hệ báo giá",
    desc: "Gửi hàng theo chuyến, giao tận tay người nhận. Trong ngày có mặt.",
    color: "violet",
  },
];

const colors = {
  blue:   { wrap: "border-blue-500/20 bg-blue-500/5",   icon: "bg-blue-500/10 text-blue-400",   price: "text-blue-400" },
  green:  { wrap: "border-emerald-500/20 bg-emerald-500/5", icon: "bg-emerald-500/10 text-emerald-400", price: "text-emerald-400" },
  violet: { wrap: "border-violet-500/20 bg-violet-500/5",  icon: "bg-violet-500/10 text-violet-400",  price: "text-violet-400" },
};

export function HowItWorks() {
  return (
    <section id="dich-vu" className="py-20 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3">Dịch vụ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            3 dịch vụ, 1 số điện thoại
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => {
            const c = colors[svc.color as keyof typeof colors];
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-6 flex flex-col gap-4 ${c.wrap}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-lg ${c.icon}`}>
                    <svc.icon size={18} />
                  </div>
                  <span className={`text-xs font-bold ${c.price}`}>{svc.price}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{svc.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
