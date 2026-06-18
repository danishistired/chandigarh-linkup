import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { members as ringMembers } from "@/lib/webring";

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

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
  }, []);

  function toggle() {
    const switchTheme = () => document.documentElement.classList.toggle("dark");
    const apply = () => {
      switchTheme();
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    };
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    if (!doc.startViewTransition) apply();
    else doc.startViewTransition(apply);
  }

  if (!mounted) return <button className="opacity-0">.</button>;
  return (
    <button
      onClick={toggle}
      className="border border-foreground px-3 py-1 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
      aria-label="toggle theme"
    >
      [ flip ]
    </button>
  );
}

type Person = { name: string; gh: string; url: string };

function PersonCard({ p, index }: { p: Person; index?: number }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border border-foreground p-4 flex flex-col gap-3 hover:bg-foreground hover:text-background transition-colors"
    >
      <div className="flex items-center gap-3">
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
      <div className="text-xs opacity-70 truncate border-t border-dashed border-current/40 pt-2">
        {p.url.replace(/^https?:\/\//, "")} ↗
      </div>
    </a>
  );
}

function Home() {
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
        <ThemeToggle />
      </header>

      {/* tagline */}
      <section className="mt-8 space-y-3 text-sm md:text-base leading-relaxed max-w-3xl">
        <p>
          a dead-simple webring for the kids of <b>chandigarh university</b> who actually build
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

      {/* wire up */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">// wire up your site</h2>
        <p className="mt-2 text-sm">drop this anywhere on your page and replace <code>your-handle</code> with your exact name from the ring:</p>
        <pre className="mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted">
{`<a href="/redirect?from=your-handle&dir=prev">← prev</a>
<a href="/random">random</a>
<a href="/redirect?from=your-handle&dir=next">next →</a>`}
        </pre>
        <p className="mt-3 text-xs text-muted-foreground">
          prefix the hrefs with this site's base URL once it's deployed. full docs live on{" "}
          <Link to="/info" className="underline decoration-accent hover:text-foreground">
            /info
          </Link>
          .
        </p>
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
          <span>made in sector 17 ★ inspired by threadlocked</span>
        </div>
      </footer>
    </main>
  );
}
