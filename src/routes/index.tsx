import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { members as allRingMembers } from "@/lib/webring";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "adda — a webring for chandigarh university" },
      {
        name: "description",
        content:
          "adda is a tiny webring for students, hackers and tinkerers from Chandigarh University. pull-request your site to join.",
      },
      { property: "og:title", content: "adda — a CU webring" },
      {
        property: "og:description",
        content:
          "a tiny webring for students, hackers and tinkerers from Chandigarh University.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const FOUNDERS = [
  { name: "radish", gh: "danishistired", url: "https://danishv.me" },
];

const FOUNDER_GH_SET = new Set(FOUNDERS.map((f) => f.gh));

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  function toggle() {
    const apply = () => {
      document.documentElement.classList.toggle("dark");
      const dark = document.documentElement.classList.contains("dark");
      setIsDark(dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
    };
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    if (!doc.startViewTransition) apply();
    else doc.startViewTransition(apply);
  }

  if (!mounted) return <button className="theme-toggle opacity-0" aria-hidden />;
  return (
    <button
      onClick={toggle}
      className="theme-toggle"
      aria-label="toggle theme"
    >
      {/* sun */}
      <svg
        className={`theme-icon ${isDark ? "theme-icon--hidden" : "theme-icon--visible"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      {/* moon */}
      <svg
        className={`theme-icon ${isDark ? "theme-icon--visible" : "theme-icon--hidden"}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

type Person = { name: string; gh: string; url: string };

function PersonCard({ p, index }: { p: Person; index?: number }) {
  return (
    <div
      className="group relative border border-foreground p-4 flex flex-col gap-3 hover:bg-foreground hover:text-background transition-colors overflow-hidden"
    >
      {/* full-card website link (stretched) */}
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        aria-label={`Visit ${p.name}'s site`}
      />
      {/* clickable github icon */}
      <a
        href={`https://github.com/${p.gh}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 z-10 w-5 h-5 text-muted-foreground opacity-30 hover:text-accent hover:opacity-80 transition-all duration-200"
        aria-label={`${p.gh} on GitHub`}
        onClick={(e) => e.stopPropagation()}
      >
        <GitHubIcon className="w-full h-full" />
      </a>
      <div className="relative z-[1] flex items-center gap-3 pointer-events-none">
        <img
          src={`https://github.com/${p.gh}.png?size=120`}
          alt={`${p.gh} avatar`}
          loading="lazy"
          className="w-14 h-14 border border-foreground group-hover:border-background object-cover"
        />
        <div className="min-w-0">
          {typeof index === "number" && (
            <div className="text-[10px] uppercase tracking-widest opacity-60 tabular-nums">
              #{String(index + 1).padStart(2, "0")}
            </div>
          )}
          <div className="font-bold truncate">{p.name}</div>
          <div className="text-xs opacity-70 truncate">@{p.gh}</div>
        </div>
      </div>
      <div className="relative z-[1] text-xs opacity-70 truncate border-t border-dashed border-current/40 pt-2 pointer-events-none">
        {p.url.replace(/^https?:\/\//, "")} ↗
      </div>
    </div>
  );
}

function Home() {
  const ringMembers = allRingMembers.filter((m) => !FOUNDER_GH_SET.has(m.gh));
  const count = ringMembers.length;

  return (
    <main className="min-h-screen px-5 py-10 md:px-10 md:py-16 max-w-6xl mx-auto">
      {/* header */}
      <header className="flex items-end justify-between border-b border-foreground pb-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            chandigarh university // est. 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mt-1 caret">adda</h1>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/danishistired/chandigarh-linkup"
            target="_blank"
            rel="noopener noreferrer"
            className="header-icon-btn"
            aria-label="GitHub repository"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <ThemeToggle />
        </div>
      </header>

      {/* tagline */}
      <section className="mt-8 space-y-3 text-sm md:text-base leading-relaxed max-w-3xl">
        <p>
          a dead-simple <a className="underline decoration-accent" href="https://en.wikipedia.org/wiki/Webring">webring</a> for the kids of <b>chandigarh university</b> who actually build
          things. personal sites, blogs, weird experiments — string yours into the ring and bounce
          around.
        </p>
        <p className="text-muted-foreground">
          no algorithm. no feed. just a circle of people, one click away from each other.
        </p>
      </section>

      {/* marquee count */}
      <section className="mt-10 marquee border-y border-foreground py-2 text-sm uppercase tracking-widest">
        <div className="marquee-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>
              {count} site{count === 1 ? "" : "s"} in the ring ✦ keep it weird ✦ build something ✦
              merge the pr ✦ ↻ ✦ adda //
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>
              {count} site{count === 1 ? "" : "s"} in the ring ✦ keep it weird ✦ build something ✦
              merge the pr ✦ ↻ ✦ adda //
            </span>
          ))}
        </div>
      </section>

      {/* founders */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          // founders <span className="text-muted-foreground">({FOUNDERS.length})</span>
        </h2>
        <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {FOUNDERS.map((p) => (
            <PersonCard key={p.gh} p={p} />
          ))}
        </div>
      </section>

      {/* members */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          // the ring <span className="text-muted-foreground">({count})</span>
        </h2>
        {count === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground border border-dashed border-foreground p-6 text-center">
            empty for now. open a PR and be the first.
          </p>
        ) : (
          <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ringMembers.map((m, i) => (
              <PersonCard key={m.name} p={m} index={i} />
            ))}
          </div>
        )}
      </section>
      {/* footer */}
      <footer className="mt-16 pt-6 border-t border-foreground space-y-2 text-xs text-muted-foreground uppercase tracking-widest">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <span>
            →{" "}
            <Link to="/info" className="underline decoration-accent hover:text-foreground">
              how to join + wire up your site
            </Link>
          </span>
          <span>
            →{" "}
            <a
              href="https://en.wikipedia.org/wiki/Webring"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent hover:text-foreground"
            >
              what is a webring?
            </a>
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span>adda © {new Date().getFullYear()}</span>
          <span>made out of boredome and love by danish</span>
        </div>
      </footer>
    </main>
  );
}
