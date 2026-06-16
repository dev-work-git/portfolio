"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line/40 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }}
        className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3">Block #02</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">Experience</h2>
      </motion.div>
      <div className="flex flex-col gap-6">
        {experience.map((item, i) => (
          <motion.div key={item.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:i*0.08 }}
            className="card p-6 group">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="font-display text-xl font-semibold text-paper">{item.role}</h3>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{item.duration}</span>
            </div>
            <div className="font-mono text-sm text-mint mb-3">{item.organization}</div>
            <p className="text-sm leading-relaxed text-muted mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
