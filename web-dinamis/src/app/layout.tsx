import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import SiteLayout from "@/components/SiteLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Taman Abadi Memorial Park | Tempat Peristirahatan Terakhir",
  description: "Taman Abadi Memorial Park menyediakan layanan pemakaman profesional, kavling pemakaman premium, dan perawatan taman makam yang terpercaya.",
  keywords: ["pemakaman", "memorial park", "taman makam", "layanan duka", "kavling makam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
