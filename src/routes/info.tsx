import { createFileRoute, Link } from "@tanstack/react-router";
import { members } from "@/lib/webring";

export const Route = createFileRoute("/info")({
  head: () => ({
    meta: [
      { title: "adda — how to join" },
      {
        name: "description",
        content: "how to join the adda webring and wire up your site.",
      },
    ],
  }),
  component: Info,
});

function Info() {
  return (
    <main className="min-h-screen px-5 py-10 md:px-10 md:py-16 max-w-4xl mx-auto">
      <header className="border-b border-foreground pb-4 flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            adda // docs
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-1">how it works</h1>
        </div>
        <Link
          to="/"
          className="border border-foreground px-3 py-1 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          ← back
        </Link>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">// joining</h2>
        <ol className="mt-3 space-y-2 list-decimal list-inside text-sm md:text-base">
          <li>
            fork{" "}
            <a className="underline decoration-accent" href="https://github.com/danishistired/chandigarh-linkup">
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
        <p className="mt-3 text-sm">open a pull request. once merged, the ring auto-deploys.</p>
      </section>

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
        <p className="mt-4 text-muted-foreground text-xs">
          current ring size: {members.length}
        </p>
      </section>
    </main>
  );
}
