import { profile } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-line/40 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.fullName}. Built with Next.js, Tailwind & Framer Motion.</p>
        <p className="text-line">// end of chain</p>
      </div>
    </footer>
  );
}
