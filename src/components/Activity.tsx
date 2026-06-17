"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, GitFork, ExternalLink } from "lucide-react";
import { githubUsername, socials } from "@/lib/data";

type GHEvent = { id:string; type:string; repo:{name:string}; created_at:string; payload?:{commits?:{message:string}[];action?:string} };
const ICONS: Record<string, React.ElementType> = { PushEvent:GitCommit, PullRequestEvent:GitPullRequest, WatchEvent:Star, ForkEvent:GitFork };

function describe(e: GHEvent) {
  switch(e.type) {
    case "PushEvent": { const n=e.payload?.commits?.length??1; return `Pushed ${n} commit${n>1?"s":""} to ${e.repo.name}`; }
    case "PullRequestEvent": return `${e.payload?.action==="opened"?"Opened":"Updated"} a pull request in ${e.repo.name}`;
    case "WatchEvent": return `Starred ${e.repo.name}`;
    case "ForkEvent": return `Forked ${e.repo.name}`;
    case "CreateEvent": return `Created a new ref in ${e.repo.name}`;
    case "IssuesEvent": return `${e.payload?.action??"Updated"} an issue in ${e.repo.name}`;
    default: return `${e.type.replace("Event","")} on ${e.repo.name}`;
  }
}

function timeAgo(d:string) {
  const m=Math.floor((Date.now()-new Date(d).getTime())/60000);
  if(m<60) return `${m}m ago`;
  const h=Math.floor(m/60); if(h<24) return `${h}h ago`;
  return `${Math.floor(h/24)}d ago`;
}

export default function Activity() {
  const [events, setEvents] = useState<GHEvent[]|null>(null);
  const [err, setErr] = useState(false);
  useEffect(()=>{
    fetch(`https://api.github.com/users/${githubUsername}/events/public?per_page=6`)
      .then(r=>{ if(!r.ok) throw new Error("fail"); return r.json(); })
      .then(setEvents).catch(()=>setErr(true));
  },[]);

  return (
    <section id="activity" className="border-t border-line/40 mx-auto max-w-6xl px-6 py-24 md:py-32">
      <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-80px" }} transition={{ duration:0.5 }} className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint mb-3"><span className="text-muted">// </span>Block #05</p>
        <h2 className="font-display text-4xl font-semibold text-paper md:text-5xl">Live Activity</h2>
        <p className="mt-3 text-muted">Pulled directly from GitHub — updates automatically every visit.</p>
      </motion.div>
      <div className="flex flex-col gap-6">
        <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5 }} className="card p-5 overflow-x-auto">
          <div className="flex items-center justify-between mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span>Contribution Graph</span>
            <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-mint hover:underline">
              @{githubUsername} <ExternalLink size={11} />
            </a>
          </div>
          <img src={`https://ghchart.rshah.org/00D9A3/${githubUsername}`} alt="GitHub contribution chart" className="w-full min-w-[580px]" />
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:0.1 }} className="card p-5 overflow-hidden">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">GitHub Stats</p>
            <img src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&bg_color=0F1520&title_color=00D9A3&icon_color=00D9A3&text_color=E8E6E1&border_color=1E2A3D&hide_border=true`} alt="GitHub stats" className="w-full" />
          </motion.div>
          <motion.div initial={{ opacity:0,y:16 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true,margin:"-60px" }} transition={{ duration:0.5,delay:0.15 }} className="card p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">Latest Activity</p>
            {err && <p className="text-sm text-muted">Could not load activity. <a href={socials.github} target="_blank" rel="noreferrer" className="text-mint hover:underline">View on GitHub</a>.</p>}
            {!err && !events && (
              <div className="flex flex-col gap-3">
                {[...Array(4)].map((_,i)=>(
                  <div key={i} className="h-4 animate-pulse rounded bg-surface2" style={{width:`${72-i*12}%`}} />
                ))}
              </div>
            )}
            {events && events.length === 0 && <p className="text-sm text-muted">No public activity yet.</p>}
            {events && events.length > 0 && (
              <ul className="flex flex-col gap-4">
                {events.map(e=>{
                  const Icon = ICONS[e.type] ?? GitCommit;
                  return (
                    <li key={e.id} className="flex items-start gap-3">
                      <Icon size={15} className="mt-0.5 shrink-0 text-mint" />
                      <div>
                        <p className="text-sm text-paper">{describe(e)}</p>
                        <p className="font-mono text-xs text-muted">{timeAgo(e.created_at)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
