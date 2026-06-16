"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import NetworkBg from "./NetworkBg";
import { profile, socials } from "@/lib/data";

const ROLES = ["Blockchain Engineer","Smart Contract Developer","Full-Stack Web Developer","DevOps Enthusiast","Web3 Builder"];

function TypedRole() {
  const [ri, setRi] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type"|"pause"|"delete">("type");
  useEffect(() => {
    const cur = ROLES[ri];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < cur.length) t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 55);
      else t = setTimeout(() => setPhase("pause"), 1600);
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("delete"), 800);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(cur.slice(0, text.length - 1)), 28);
      else { setRi(i => (i + 1) % ROLES.length); setPhase("type"); }
    }
    return () => clearTimeout(t);
  }, [text, phase, ri]);
  return (
    <span className="font-mono text-mint">
      {text}<span className="ml-0.5 inline-block w-[2px] h-[1em] bg-mint align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden border-b border-line/40">
      <NetworkBg />
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,217,163,0.12), transparent)"}} />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.5 }}
          className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-8 bg-mint inline-block" />
          <span className="text-mint">Genesis Block</span>
          <span className="h-px w-8 bg-mint inline-block" />
        </motion.div>
        <motion.h1 initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:0.1 }}
          className="font-display text-5xl font-semibold leading-tight tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}<span className="text-gradient">{profile.name}</span>
        </motion.h1>
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:0.22 }}
          className="mt-5 flex items-center gap-2 font-mono text-lg sm:text-xl md:text-2xl">
          <span className="text-muted">$</span>
          <span className="text-paper">whoami</span>
          <span className="text-muted">→</span>
          <TypedRole />
        </motion.div>
        <motion.p initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:0.32 }}
          className="mt-5 max-w-xl text-base text-muted sm:text-lg leading-relaxed">
          {profile.tagline}
        </motion.p>
        <motion.div initial={{ opacity:0,y:24 }} animate={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:0.42 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-ink transition-all hover:scale-105 hover:shadow-lg hover:shadow-mint/20">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-paper transition-all hover:border-mint hover:text-mint">
            Get in Touch
          </a>
          <div className="ml-2 flex items-center gap-4 text-muted">
            <a href={socials.github} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Github size={20} /></a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Linkedin size={20} /></a>
            <a href={socials.twitter} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors"><Twitter size={20} /></a>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1,delay:1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2,repeat:Infinity,ease:"easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
