import { r as __toESM } from "../_runtime.mjs";
import { n as neighbour, r as random, t as members } from "./webring-uyjaPj_e.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { S as redirect, a as createRouter, c as createFileRoute, d as useRouter, l as createRootRouteWithContext, n as Scripts, o as Outlet, r as HeadContent, s as lazyRouteComponent, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CuuVL_qf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CH2HZaGW.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "adda — a webring for chandigarh university" },
			{
				name: "description",
				content: "a dead-simple webring for students, hackers and tinkerers from Chandigarh University."
			},
			{
				name: "author",
				content: "adda"
			},
			{
				property: "og:title",
				content: "adda — a CU webring"
			},
			{
				property: "og:description",
				content: "a dead-simple webring for students, hackers and tinkerers from Chandigarh University."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var Route$4 = createFileRoute("/redirect")({
	server: { handlers: { GET: async ({ request }) => {
		const url = new URL(request.url);
		const from = url.searchParams.get("from");
		const dir = url.searchParams.get("dir");
		if (!from || dir !== "prev" && dir !== "next") return new Response("usage: /redirect?from=<name>&dir=prev|next", {
			status: 400,
			headers: { "content-type": "text/plain" }
		});
		const target = neighbour(from, dir);
		if (!target) return new Response(`member "${from}" not found in the ring`, {
			status: 404,
			headers: { "content-type": "text/plain" }
		});
		return Response.redirect(target.url, 302);
	} } },
	loader: () => {
		throw redirect({ to: "/" });
	}
});
var Route$3 = createFileRoute("/random")({
	server: { handlers: { GET: async () => {
		const target = random();
		if (!target) return new Response("ring is empty", {
			status: 404,
			headers: { "content-type": "text/plain" }
		});
		return Response.redirect(target.url, 302);
	} } },
	loader: () => {
		throw redirect({ to: "/" });
	}
});
var Route$2 = createFileRoute("/members")({ server: { handlers: { GET: async () => Response.json({
	count: members.length,
	members
}, { headers: { "cache-control": "public, max-age=60" } }) } } });
var $$splitComponentImporter$1 = () => import("./info-CT3OcwAA.mjs");
var Route$1 = createFileRoute("/info")({
	head: () => ({ meta: [{ title: "adda — how to join" }, {
		name: "description",
		content: "how to join the adda webring and wire up your site."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-tloD4ye9.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "adda — a webring for chandigarh university" },
		{
			name: "description",
			content: "adda is a tiny webring for students, hackers and tinkerers from Chandigarh University. pull-request your site to join."
		},
		{
			property: "og:title",
			content: "adda — a CU webring"
		},
		{
			property: "og:description",
			content: "a tiny webring for students, hackers and tinkerers from Chandigarh University."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RedirectRoute = Route$4.update({
	id: "/redirect",
	path: "/redirect",
	getParentRoute: () => Route$5
});
var RandomRoute = Route$3.update({
	id: "/random",
	path: "/random",
	getParentRoute: () => Route$5
});
var MembersRoute = Route$2.update({
	id: "/members",
	path: "/members",
	getParentRoute: () => Route$5
});
var InfoRoute = Route$1.update({
	id: "/info",
	path: "/info",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	InfoRoute,
	MembersRoute,
	RandomRoute,
	RedirectRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
