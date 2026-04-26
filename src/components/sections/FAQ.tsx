"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Câu hỏi thường gặp về dịch vụ xe Thái Bình - Hà Nội
const faqs = [
  {
    q: "Làm sao để đặt xe?",
    a: "Gọi điện hoặc nhắn Zalo theo số 0968 153 937. Cho biết ngày đi, giờ đi và điểm đón — chúng tôi xác nhận chỗ ngay trong vài phút.",
  },
  {
    q: "Xe đón tôi ở đâu?",
    a: "Đón tận nơi trong nội thành Thái Bình hoặc Hà Nội. Ngoài khu vực trung tâm có thể hẹn điểm đón gần nhất — liên hệ để xác nhận.",
  },
  {
    q: "Ghép ghế và bao xe khác nhau thế nào?",
    a: "Ghép ghế: bạn ngồi chung xe với hành khách khác, giá 300.000đ/người, khởi hành theo lịch cố định. Bao xe: thuê cả xe cho riêng bạn, chủ động 100% thời gian, từ 800.000đ/chuyến.",
  },
  {
    q: "Tôi có thể gửi đồ mà không cần đi cùng không?",
    a: "Được. Gửi hàng hóa, đồ dùng theo chuyến xe mà không cần có mặt. Nhắn Zalo để báo kích thước, trọng lượng — chúng tôi báo giá ngay.",
  },
  {
    q: "Có thể hủy vé không?",
    a: "Có. Hủy trước 2 giờ khởi hành được hoàn tiền đầy đủ. Hủy gần giờ vui lòng liên hệ trực tiếp để thỏa thuận.",
  },
  {
    q: "Mang được bao nhiêu hành lý?",
    a: "Mỗi người được mang 1 túi hoặc vali cỡ vừa (tối đa 15kg) miễn phí. Hành lý cồng kềnh hoặc nhiều kiện vui lòng báo trước khi đặt.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="text-zinc-200 text-sm font-medium group-hover:text-white transition-colors">
          {q}
        </span>
        <ChevronDown
          size={15}
          className={`text-zinc-600 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-zinc-400" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-zinc-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 border-t border-zinc-800/60">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Câu hỏi thường gặp
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6"
        >
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
