"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

function Slider({ title, images }: { title: string; images: string[] }) {
  const imgs = images.length > 0 ? images : ["/projects/placeholder.svg"];
  const [idx, setIdx] = useState(0);
  const go = (d: 1 | -1) => setIdx(i => (i + d + imgs.length) % imgs.length);
  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden border-b border-line">
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={idx} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }} className="absolute inset-0">
          <Image src={imgs[idx]} alt={`${title} screenshot ${idx + 1}`} fill className="object-cover" sizes="(max-width:640px) 100vw, 50vw" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      {imgs.length > 1 && (
        <>
          <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-paper opacity-0 group-hover:opacity-100 hover:bg-mint hover:text-ink transition-all">
            <ChevronLeft size={17} />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-paper opacity-0 group-hover:opacity-100 hover:bg-mint hover:text-ink transition-all">
            <ChevronRight size={17} />
          </button>
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            {imgs.map((_, i) => (
              <button key={i} type="button" onClick={() => setIdx(i)} aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-4 bg-mint" : "w-1.5 bg-paper/40"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line/40 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }} className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3">Block #04</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">Projects</h2>
        <p className="mt-3 text-muted">Things I have built from smart contracts to full-stack apps.</p>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article key={project.id} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:i*0.08 }}
            whileHover={{ y:-6 }} className="card flex flex-col overflow-hidden">
            <Slider title={project.title} images={project.images} />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="font-display text-xl font-semibold text-paper">{project.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="mt-2 flex items-center gap-5 pt-1">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-paper hover:text-mint transition-colors">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-paper hover:text-mint transition-colors">
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
