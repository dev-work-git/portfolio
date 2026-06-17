"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE — Blockchain Engg." },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Sparkles, label: "Focus", value: "Web3 · DevOps · Full-Stack" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }}
        className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3"><span className="text-muted">// </span>Block #01</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">About Me</h2>
      </motion.div>
      <div className="grid gap-14 md:grid-cols-[260px_1fr] md:gap-20">
        <motion.div initial={{ opacity:0,scale:0.95 }} whileInView={{ opacity:1,scale:1 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.6 }}
          className="relative mx-auto aspect-square w-52 overflow-hidden rounded-2xl border border-line md:mx-0 md:w-full">
          <Image src={profile.avatar} alt={profile.fullName} fill className="object-cover" sizes="260px" />
          <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-mint" />
          <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-mint" />
          <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-mint" />
          <span className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-mint" />
        </motion.div>
        <div className="flex flex-col gap-5">
          {profile.about.map((p, i) => (
            <motion.p key={i} initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:i*0.1 }}
              className="text-base leading-relaxed text-muted sm:text-lg">{p}</motion.p>
          ))}
          <motion.div initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:0.3 }}
            className="mt-2 grid gap-3 sm:grid-cols-3">
            {facts.map(f => (
              <div key={f.label} className="card p-4 flex flex-col gap-2">
                <f.icon size={17} className="text-mint" />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{f.label}</div>
                <div className="text-sm text-paper">{f.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
