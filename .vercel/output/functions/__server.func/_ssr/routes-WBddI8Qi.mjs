import { r as __toESM } from "../_runtime.mjs";
import { t as members } from "./webring-uyjaPj_e.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-WBddI8Qi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOUNDERS = [{
	name: "radish",
	gh: "danishistired",
	url: "https://danishv.me"
}];
function ThemeToggle() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");
	}, []);
	function toggle() {
		const switchTheme = () => document.documentElement.classList.toggle("dark");
		const apply = () => {
			switchTheme();
			localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
		};
		const doc = document;
		if (!doc.startViewTransition) apply();
		else doc.startViewTransition(apply);
	}
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "opacity-0",
		children: "."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		className: "border border-foreground px-3 py-1 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors",
		"aria-label": "toggle theme",
		children: "[ flip ]"
	});
}
function PersonCard({ p, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: p.url,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group border border-foreground p-4 flex flex-col gap-3 hover:bg-foreground hover:text-background transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: `https://github.com/${p.gh}.png?size=120`,
				alt: `${p.gh} avatar`,
				loading: "lazy",
				className: "w-14 h-14 border border-foreground group-hover:border-background object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					typeof index === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] uppercase tracking-widest opacity-60 tabular-nums",
						children: ["#", String(index + 1).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold truncate",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs opacity-70 truncate",
						children: ["@", p.gh]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-xs opacity-70 truncate border-t border-dashed border-current/40 pt-2",
			children: [p.url.replace(/^https?:\/\//, ""), " ↗"]
		})]
	});
}
function Home() {
	const count = members.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen px-5 py-10 md:px-10 md:py-16 max-w-6xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-end justify-between border-b border-foreground pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "chandigarh university // est. 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl md:text-7xl font-bold mt-1 caret",
					children: "adda"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 space-y-3 text-sm md:text-base leading-relaxed max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"a dead-simple webring for the kids of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "chandigarh university" }),
					" who actually build things. personal sites, blogs, weird experiments — string yours into the ring and bounce around."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "no algorithm. no feed. just a circle of people, one click away from each other."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 marquee border-y border-foreground py-2 text-sm uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track",
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						count,
						" site",
						count === 1 ? "" : "s",
						" in the ring ✦ keep it weird ✦ build something ✦ merge the pr ✦ ↻ ✦ adda //"
					] }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track",
					"aria-hidden": true,
					children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						count,
						" site",
						count === 1 ? "" : "s",
						" in the ring ✦ keep it weird ✦ build something ✦ merge the pr ✦ ↻ ✦ adda //"
					] }, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-bold",
					children: ["// founders ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"(",
							FOUNDERS.length,
							")"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
					children: FOUNDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, { p }, p.gh))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-bold",
					children: ["// the ring ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"(",
							count,
							")"
						]
					})]
				}), count === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground border border-dashed border-foreground p-6 text-center",
					children: "empty for now. open a PR and be the first."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
					children: members.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
						p: m,
						index: i
					}, m.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "// wire up your site"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm",
						children: [
							"drop this anywhere on your page and replace ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "your-handle" }),
							" with your exact name from the ring:"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted",
						children: `<a href="/redirect?from=your-handle&dir=prev">← prev</a>
<a href="/random">random</a>
<a href="/redirect?from=your-handle&dir=next">next →</a>`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							"prefix the hrefs with this site's base URL once it's deployed. full docs live on",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/info",
								className: "underline decoration-accent hover:text-foreground",
								children: "/info"
							}),
							"."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 pt-6 border-t border-foreground space-y-2 text-xs text-muted-foreground uppercase tracking-widest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-x-6 gap-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"→",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/info",
							className: "underline decoration-accent hover:text-foreground",
							children: "how to join + wire up your site"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"→",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://en.wikipedia.org/wiki/Webring",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "underline decoration-accent hover:text-foreground",
							children: "what is a webring?"
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["adda © ", (/* @__PURE__ */ new Date()).getFullYear()] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "made in sector 17 ★ inspired by threadlocked" })]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
