"use client";

import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { ZaloIcon } from "@/components/ui/ZaloIcon";

const PHONE = "0968153937";
const PHONE_DISPLAY = "0968 153 937";
const ZALO_LINK = `https://zalo.me/${PHONE}`;

// Section CTA cuối trang — nút lớn, nổi bật, kêu gọi hành động mạnh
export function CTA() {
  return (
    <section id="lien-he" className="py-20 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 text-center px-6 py-16 md:py-20"
        >
          {/* Glow nền */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/8 blur-[90px] rounded-full" />
          </div>

          <div className="relative">
            {/* Tiêu đề */}
            <p className="text-xs text-blue-400 font-semibold tracking-widest uppercase mb-4">
              Đặt xe ngay
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Sẵn sàng lên đường?
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-sm mx-auto">
              Gọi hoặc nhắn Zalo — xác nhận chỗ ngay, khởi hành đúng giờ.
            </p>

            {/* Nút CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 active:scale-[0.97] text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-xl shadow-blue-500/20 w-full sm:w-auto min-w-[220px]"
              >
                <Phone size={20} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-75 leading-none mb-0.5">Gọi điện ngay</div>
                  <div className="leading-none">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#0068FF] hover:bg-[#0055dd] active:scale-[0.97] text-white font-bold px-8 py-4 rounded-xl text-base transition-all w-full sm:w-auto min-w-[220px]"
              >
                <ZaloIcon size={20} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-75 leading-none mb-0.5">Nhắn Zalo</div>
                  <div className="leading-none">{PHONE_DISPLAY}</div>
                </div>
              </a>
            </div>

            {/* Khu vực phục vụ */}
            <div className="inline-flex items-center gap-2 text-zinc-500 text-xs border border-zinc-800 rounded-full px-5 py-2">
              <MapPin size={12} className="text-blue-400" />
              Thái Bình · Hà Nội · Sân bay Nội Bài · Các điểm dọc tuyến
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
