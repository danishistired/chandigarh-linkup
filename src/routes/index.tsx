import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { members } from "@/lib/webring";

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
        content: "a tiny webring for students, hackers and tinkerers from Chandigarh University.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

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

function Home() {
  const count = members.length;

  return (
    <main className="min-h-screen px-5 py-10 md:px-10 md:py-16 max-w-3xl mx-auto">
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
      <section className="mt-8 space-y-3 text-sm md:text-base leading-relaxed">
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

      {/* how to join */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">// joining</h2>
        <ol className="mt-3 space-y-2 list-decimal list-inside text-sm md:text-base">
          <li>
            fork{" "}
            <a className="underline decoration-accent" href="https://github.com/">
              this repo
            </a>
          </li>
          <li>
            append your entry to <code className="bg-muted px-1">webring.json</code>:
          </li>
        </ol>
        <pre className="mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted">
{`{
  "name": "your-handle",
  "gh":   "your-github-username",
  "url":  "https://your-site.com"
}`}
        </pre>
        <p className="mt-3 text-sm">
          open a pull request. once merged, the ring auto-deploys.
        </p>
      </section>

      {/* snippet */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">// wiring up your site</h2>
        <p className="mt-2 text-sm">drop this anywhere on your page:</p>
        <pre className="mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted">
{`<a href="/redirect?from=your-handle&dir=prev">← prev</a>
<a href="/random">random</a>
<a href="/redirect?from=your-handle&dir=next">next →</a>`}
        </pre>
        <p className="mt-3 text-xs text-muted-foreground">
          prefix the hrefs with this site's base URL once it's deployed.
        </p>
      </section>

      {/* members */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          // the ring <span className="text-muted-foreground">({count})</span>
        </h2>
        <ul className="mt-4 divide-y divide-foreground border-y border-foreground">
          {members.map((m, i) => (
            <li
              key={m.name}
              className="flex items-baseline justify-between gap-4 py-3 text-sm md:text-base"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold truncate hover:text-accent"
                >
                  {m.name}
                </a>
                <a
                  href={`https://github.com/${m.gh}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-xs truncate hover:underline"
                >
                  @{m.gh}
                </a>
              </div>
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground truncate hover:text-foreground hidden sm:inline"
              >
                {m.url.replace(/^https?:\/\//, "")} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* endpoints */}
      <section className="mt-12 text-sm">
        <h2 className="text-2xl font-bold">// endpoints</h2>
        <ul className="mt-3 space-y-1 font-mono text-xs md:text-sm">
          <li>
            <span className="text-accent">GET</span> /redirect?from=&lt;name&gt;&amp;dir=prev|next
          </li>
          <li>
            <span className="text-accent">GET</span> /random
          </li>
          <li>
            <span className="text-accent">GET</span> /members
          </li>
        </ul>
      </section>

      {/* footer */}
      <footer className="mt-16 pt-6 border-t border-foreground flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground uppercase tracking-widest">
        <span>adda © {new Date().getFullYear()}</span>
        <span>made in sector 17 ★ inspired by threadlocked</span>
      </footer>
    </main>
  );
}
