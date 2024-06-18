import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import { cn } from "@/main/utils";

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

export const metadata: Metadata = {
  title: "Flashsdisk Hiburan Mobil",
  description: "Flashdisk hiburan mobil, promo flashdisk hiburan mobil, hiburan mobil, flashdisk original, ribuan lagu & video dalam satu flashdisk, flashdisk mobil bisa karaoke, COD (Bayar Saat Barang Sampai).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={cn(
        archivo.variable,
        dm_sans.variable,
        "w-full h-full text-white bg-white"
      )}>{children}</body>
    </html>
  );
}
