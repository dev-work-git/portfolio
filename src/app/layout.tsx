import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets:["latin"],weight:["400","500","600","700"],variable:"--font-space-grotesk",display:"swap" });
const inter = Inter({ subsets:["latin"],weight:["400","500","600"],variable:"--font-inter",display:"swap" });
const jetbrainsMono = JetBrains_Mono({ subsets:["latin"],weight:["400","500"],variable:"--font-jetbrains-mono",display:"swap" });

export const metadata: Metadata = {
  title: "Dev Shishodia — Blockchain Engineer & Full-Stack Developer",
  description: "Portfolio of Dev Shishodia, a final-year CSE student specializing in blockchain engineering, smart contracts, DevOps, and full-stack web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
