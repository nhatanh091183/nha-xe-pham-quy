"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle } from "lucide-react";

const PHONE = "0968153937";
const ZALO_LINK = `https://zalo.me/${PHONE}`;

// Bảng giá dịch vụ
const plans = [
  {
    name: "Ghép ghế",
    price: "300.000đ",
    unit: "/ người / chuyến",
    desc: "Đi chung, chia sẻ chi phí. Tiết kiệm nhất.",
    features: [
      "Xe 4 chỗ hoặc 7 chỗ",
      "Đón tận nơi trong nội thành",
      "Khởi hành đúng giờ",
      "Không thu thêm phụ phí",
    ],
    cta: "Đặt ghép ghế",
    href: `tel:${PHONE}`,
    highlight: false,
    badge: null,
  },
  {
    name: "Bao xe 4 chỗ",
    price: "800.000đ",
    unit: "/ chuyến",
    desc: "Xe riêng cho gia đình hoặc nhóm nhỏ 1–4 người.",
    features: [
      "Toàn bộ xe chỉ của bạn",
      "Chủ động thời gian khởi hành",
      "Đón trả tận địa chỉ",
      "Phù hợp gia đình, công tác",
    ],
    cta: "Đặt bao xe 4 chỗ",
    href: `tel:${PHONE}`,
    highlight: true,
    badge: "Phổ biến",
  },
  {
    name: "Bao xe 7 chỗ",
    price: "1.000.000đ",
    unit: "/ chuyến",
    desc: "Xe rộng rãi cho nhóm lớn 5–7 người.",
    features: [
      "Toàn bộ xe chỉ của bạn",
      "Nhiều chỗ để hành lý",
      "Chủ động thời gian khởi hành",
      "Phù hợp nhóm, công ty",
    ],
    cta: "Đặt bao xe 7 chỗ",
    href: `tel:${PHONE}`,
    highlight: false,
    badge: null,
  },
  {
    name: "Gửi đồ",
    price: "Liên hệ",
    unit: "theo kg / kích thước",
    desc: "Gửi hàng hóa, đồ dùng — giao tận nơi trong ngày.",
    features: [
      "Nhận hàng tại Thái Bình hoặc Hà Nội",
      "Giao tận tay người nhận",
      "An toàn, nguyên vẹn",
      "Xác nhận qua Zalo",
    ],
    cta: "Nhắn Zalo báo giá",
    href: ZALO_LINK,
    highlight: false,
    badge: null,
    isExternal: true,
  },
];

export function Pricing() {
  return (
    <section id="bang-gia" className="py-24 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Bảng giá
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Giá rõ ràng, không phát sinh
          </h2>
          <p className="text-zinc-500 text-sm mt-3">
            Biết trước chi phí trước khi lên xe. Không bị tính thêm phí ẩn.
          </p>
        </motion.div>

        {/* Grid bảng giá */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-xl border flex flex-col p-5 ${
                plan.highlight
                  ? "border-blue-500/40 bg-blue-500/5"
                  : "border-zinc-800 bg-zinc-900/40"
              }`}
            >
              {/* Badge phổ biến */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Tên và giá */}
              <div className="mb-4">
                <p className="text-zinc-400 text-xs font-medium uppercase tracking-wide mb-2">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-zinc-600 text-xs">{plan.unit}</p>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{plan.desc}</p>
              </div>

              {/* Tính năng */}
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-zinc-400">
                    <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Nút CTA */}
              {"isExternal" in plan && plan.isExternal ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 transition-all text-xs font-medium"
                >
                  <MessageCircle size={13} />
                  {plan.cta}
                </a>
              ) : (
                <a
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    plan.highlight
                      ? "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
                  }`}
                >
                  <Phone size={13} />
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ghi chú */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-xs mt-6"
        >
          * Giá có thể thay đổi theo dịp lễ, Tết. Liên hệ để xác nhận giá mới nhất.
        </motion.p>
      </div>
    </section>
  );
}
