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
  description: "Flashdisk hiburan mobil, promo hiburan musik mobil, hiburan musik mobil, flashdisk original isi ribuan lagu & video, flashdisk bisa karaoke.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full sscroll-smooth">
      <body className={cn(
        archivo.variable,
        dm_sans.variable,
        "w-full h-full bg-blue-500"
      )}>{children}</body>
    </html>
  );
}
