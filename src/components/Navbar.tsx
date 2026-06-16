"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import { profile, socials } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#activity", label: "Activity" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-line/50 bg-ink/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-[0.2em] text-paper hover:text-mint transition-colors">
          {"<"}{profile.name}{"/>"}
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-mint transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-muted">
          <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Github size={17} /></a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Linkedin size={17} /></a>
          <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Twitter size={17} /></a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-paper hover:border-mint hover:text-mint transition-colors">
            <FileText size={13} /> Resume
          </a>
        </div>
      </div>
    </motion.header>
  );
}
