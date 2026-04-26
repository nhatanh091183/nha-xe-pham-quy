import { Phone, MapPin } from "lucide-react";
import { ZaloIcon } from "@/components/ui/ZaloIcon";
import { FacebookIcon } from "@/components/ui/FacebookIcon";

const PHONE = "0968153937";
const PHONE_DISPLAY = "0968 153 937";
const ZALO_LINK = `https://zalo.me/${PHONE}`;
const FB_LINK = "https://www.facebook.com/profile.php?id=61572620341776";

// Footer tối giản cho landing page
export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-base">
              Nhà xe <span className="text-blue-400">Phạm Quý</span>
            </p>
            <p className="text-zinc-600 text-xs mt-1">
              Xe ghép Thái Bình – Hà Nội · Hoạt động 24/7
            </p>
          </div>

          {/* Liên hệ */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-blue-400" />
              {PHONE_DISPLAY}
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ZaloIcon size={14} className="text-blue-400" />
              Zalo
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href={FB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <FacebookIcon size={14} className="text-blue-400" />
              Facebook
            </a>
            <span className="text-zinc-800">|</span>
            <span className="flex items-center gap-1 text-xs text-zinc-600">
              <MapPin size={11} className="text-zinc-700" />
              Thái Bình · Hà Nội
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 text-center text-xs text-zinc-700">
          © 2025 Nhà xe Phạm Quý · Mọi quyền được bảo lưu
        </div>
      </div>
    </footer>
  );
}
