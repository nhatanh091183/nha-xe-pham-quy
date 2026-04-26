"use client";

import { Phone } from "lucide-react";
import { ZaloIcon } from "@/components/ui/ZaloIcon";

const PHONE = "0968153937";
const PHONE_DISPLAY = "0968 153 937";
const ZALO_LINK = `https://zalo.me/${PHONE}`;

// Nút nổi cố định ở dưới màn hình — hiển thị trên mobile
export function FloatingButtons() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="grid grid-cols-2 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-sm">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-colors border-r border-blue-600"
        >
          <Phone size={17} />
          Gọi ngay
        </a>
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm bg-[#0068FF] hover:bg-[#0057d9] active:bg-[#0046b8] transition-colors"
        >
          <ZaloIcon size={17} />
          Nhắn Zalo
        </a>
      </div>
    </div>
  );
}
