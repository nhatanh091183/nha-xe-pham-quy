"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const routes = [
  {
    direction: "Thái Bình → Hà Nội",
    trips: [
      { time: "05:30", pickup: "Bến xe Thái Bình", duration: "2h30", seats: 3 },
      { time: "08:00", pickup: "Bến xe Thái Bình", duration: "2h30", seats: 5 },
      { time: "13:00", pickup: "Bến xe Thái Bình", duration: "2h30", seats: 2 },
      { time: "17:00", pickup: "Bến xe Thái Bình", duration: "2h30", seats: 4 },
    ],
  },
  {
    direction: "Hà Nội → Thái Bình",
    trips: [
      { time: "07:00", pickup: "Mỹ Đình / Giáp Bát", duration: "2h30", seats: 4 },
      { time: "11:00", pickup: "Mỹ Đình / Giáp Bát", duration: "2h30", seats: 2 },
      { time: "15:30", pickup: "Mỹ Đình / Giáp Bát", duration: "2h30", seats: 5 },
      { time: "19:00", pickup: "Mỹ Đình / Giáp Bát", duration: "2h30", seats: 3 },
    ],
  },
];

export function Routes() {
  return (
    <section id="tuyen-duong" className="py-28 border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-blue-400 font-medium tracking-widest uppercase mb-4">
            Lịch trình
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Tuyến đường &amp; giờ khởi hành
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route, ri) => (
            <motion.div
              key={route.direction}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ri * 0.1 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden"
            >
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center gap-2">
                <MapPin size={14} className="text-blue-400" />
                <span className="text-white font-semibold text-sm">{route.direction}</span>
              </div>
              <div className="divide-y divide-zinc-800">
                {route.trips.map((trip) => (
                  <div
                    key={trip.time}
                    className="px-6 py-4 flex items-center justify-between hover:bg-zinc-800/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-white font-mono font-bold text-lg w-12">
                        {trip.time}
                      </span>
                      <div>
                        <p className="text-zinc-300 text-sm">{trip.pickup}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Clock size={11} className="text-zinc-600" />
                          <span className="text-zinc-600 text-xs">{trip.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={trip.seats <= 2 ? "default" : "green"}>
                      {trip.seats} chỗ trống
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-sm mt-8"
        >
          Lịch trình có thể thay đổi theo ngày lễ. Liên hệ để xác nhận chỗ.
        </motion.p>
      </div>
    </section>
  );
}
