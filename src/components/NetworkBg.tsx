"use client";
import { useEffect, useRef } from "react";

export default function NetworkBg() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let w = (c.width = c.offsetWidth);
    let h = (c.height = c.offsetHeight);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = Math.min(55, Math.floor((w * h) / 20000));
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
    }));
    let id: number;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      if (!reduced) nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(0,217,163,${(1 - d / 130) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,217,163,0.4)";
        ctx.fill();
      });
      id = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { if (!c) return; w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("resize", onResize); cancelAnimationFrame(id); };
  }, []);
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full opacity-50" />;
}
