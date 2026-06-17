"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Twitter, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/lib/data";

const links = [
  { label:"Email", href:socials.email, Icon:Mail, value:profile.email },
  { label:"GitHub", href:socials.github, Icon:Github, value:"@dev-work-git" },
  { label:"LinkedIn", href:socials.linkedin, Icon:Linkedin, value:"devvvvv-shishodia" },
  { label:"Twitter / X", href:socials.twitter, Icon:Twitter, value:"@DVil0p" },
  { label:"LeetCode", href:socials.leetcode, Icon:Code2, value:"@Devvvv21" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line/40 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }} className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3"><span className="text-muted">// </span>Block #06</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">Contact</h2>
        <p className="mt-3 text-muted">Open to internships, collaborations, and interesting Web3 conversations.</p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l, i) => (
          <motion.a key={l.label} href={l.href} target={l.href.startsWith("mailto")?"_self":"_blank"} rel="noreferrer"
            initial={{ opacity:0,y:12 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.4,delay:i*0.06 }}
            whileHover={{ y:-4 }}
            className="card group flex items-center justify-between gap-4 p-5 transition-all">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mint group-hover:bg-mint group-hover:text-ink transition-all">
                <l.Icon size={17} />
              </span>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{l.label}</div>
                <div className="text-sm text-paper">{l.value}</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-muted group-hover:text-mint transition-colors" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
