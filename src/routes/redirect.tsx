import { createFileRoute, redirect } from "@tanstack/react-router";
import { neighbour } from "@/lib/webring";

export const Route = createFileRoute("/redirect")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const from = url.searchParams.get("from");
        const dir = url.searchParams.get("dir");
        if (!from || (dir !== "prev" && dir !== "next")) {
          return new Response("usage: /redirect?from=<name>&dir=prev|next", {
            status: 400,
            headers: { "content-type": "text/plain" },
          });
        }
        const target = neighbour(from, dir);
        if (!target) {
          return new Response(`member "${from}" not found in the ring`, {
            status: 404,
            headers: { "content-type": "text/plain" },
          });
        }
        return Response.redirect(target.url, 302);
      },
    },
  },
  loader: () => {
    throw redirect({ to: "/" });
  },
});
