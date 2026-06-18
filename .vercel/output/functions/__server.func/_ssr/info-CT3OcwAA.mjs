import { t as members } from "./webring-uyjaPj_e.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/info-CT3OcwAA.js
var import_jsx_runtime = require_jsx_runtime();
function Info() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen px-5 py-10 md:px-10 md:py-16 max-w-4xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-foreground pb-4 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "adda // docs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-bold mt-1",
					children: "how it works"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "border border-foreground px-3 py-1 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors",
					children: "← back"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "// joining"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-3 space-y-2 list-decimal list-inside text-sm md:text-base",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"fork",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-accent",
								href: "https://github.com/",
								children: "this repo"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"append your entry to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "bg-muted px-1",
								children: "webring.json"
							}),
							":"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted",
						children: `{
  "name": "your-handle",
  "gh":   "your-github-username",
  "url":  "https://your-site.com"
}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "open a pull request. once merged, the ring auto-deploys."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "// wiring up your site"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "drop this anywhere on your page:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-3 border border-foreground p-4 text-xs md:text-sm overflow-x-auto bg-muted",
						children: `<a href="/redirect?from=your-handle&dir=prev">← prev</a>
<a href="/random">random</a>
<a href="/redirect?from=your-handle&dir=next">next →</a>`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "prefix the hrefs with this site's base URL once it's deployed."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "// endpoints"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-1 font-mono text-xs md:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "GET"
							}), " /redirect?from=<name>&dir=prev|next"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "GET"
							}), " /random"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "GET"
							}), " /members"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-muted-foreground text-xs",
						children: ["current ring size: ", members.length]
					})
				]
			})
		]
	});
}
//#endregion
export { Info as component };
