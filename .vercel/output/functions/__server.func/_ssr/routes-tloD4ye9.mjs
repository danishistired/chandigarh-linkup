import { r as __toESM } from "../_runtime.mjs";
import { t as members } from "./webring-uyjaPj_e.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-tloD4ye9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOUNDERS = [{
	name: "radish",
	gh: "danishistired",
	url: "https://danishv.me"
}];
var FOUNDER_GH_SET = new Set(FOUNDERS.map((f) => f.gh));
function GitHubIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" })
	});
}
function ThemeToggle() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		if (localStorage.getItem("theme") === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		} else setIsDark(document.documentElement.classList.contains("dark"));
	}, []);
	function toggle() {
		const apply = () => {
			document.documentElement.classList.toggle("dark");
			const dark = document.documentElement.classList.contains("dark");
			setIsDark(dark);
			localStorage.setItem("theme", dark ? "dark" : "light");
		};
		const doc = document;
		if (!doc.startViewTransition) apply();
		else doc.startViewTransition(apply);
	}
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "theme-toggle opacity-0",
		"aria-hidden": true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: toggle,
		className: "theme-toggle",
		"aria-label": "toggle theme",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: `theme-icon ${isDark ? "theme-icon--hidden" : "theme-icon--visible"}`,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "12",
					y1: "1",
					x2: "12",
					y2: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "12",
					y1: "21",
					x2: "12",
					y2: "23"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "4.22",
					y1: "4.22",
					x2: "5.64",
					y2: "5.64"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "18.36",
					y1: "18.36",
					x2: "19.78",
					y2: "19.78"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "1",
					y1: "12",
					x2: "3",
					y2: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "21",
					y1: "12",
					x2: "23",
					y2: "12"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "4.22",
					y1: "19.78",
					x2: "5.64",
					y2: "18.36"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "18.36",
					y1: "5.64",
					x2: "19.78",
					y2: "4.22"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: `theme-icon ${isDark ? "theme-icon--visible" : "theme-icon--hidden"}`,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" })
		})]
	});
}
function PersonCard({ p, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: p.url,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "group relative border border-foreground p-4 flex flex-col gap-3 hover:bg-foreground hover:text-background transition-colors overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, { className: "absolute top-2 right-2 w-8 h-8 opacity-[0.08] group-hover:opacity-[0.12] transition-opacity pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs opacity-70 truncate border-t border-dashed border-current/40 pt-2",
				children: [p.url.replace(/^https?:\/\//, ""), " ↗"]
			})
		]
	});
}
function Home() {
	const ringMembers = members.filter((m) => !FOUNDER_GH_SET.has(m.gh));
	const count = ringMembers.length;
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
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/danishistired/chandigarh-linkup",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "header-icon-btn",
						"aria-label": "GitHub repository",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})]
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
					children: ringMembers.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonCard, {
						p: m,
						index: i
					}, m.name))
				})]
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
