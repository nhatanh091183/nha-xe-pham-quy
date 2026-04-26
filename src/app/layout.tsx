import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FiveMinutes AI — Xe ghép Thái Bình – Hà Nội",
  description:
    "Dịch vụ xe ghép tiện chuyến tuyến Thái Bình – Hà Nội. Đặt chỗ trong 5 phút, giá cố định, khởi hành đúng giờ.",
  keywords: "xe ghép, Thái Bình, Hà Nội, xe tiện chuyến, đặt xe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
