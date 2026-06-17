"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = Array.from(new Set(skills.map(s => s.category)));

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line/40 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }}
        className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3"><span className="text-muted">// </span>Block #03</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">Tech Stack</h2>
      </motion.div>
      <div className="flex flex-col gap-10">
        {categories.map((cat, ci) => (
          <div key={cat}>
            <motion.p initial={{ opacity:0,x:-10 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.4,delay:ci*0.05 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-coral mb-4">{cat}</motion.p>
            <div className="flex flex-wrap gap-3">
              {skills.filter(s => s.category === cat).map((skill, i) => (
                <motion.div key={skill.name} initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.3,delay:i*0.04 }}
                  whileHover={{ y:-4,borderColor:"rgba(0,217,163,0.6)" }}
                  className="card cursor-default px-4 py-2.5 text-sm text-paper transition-colors">
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
