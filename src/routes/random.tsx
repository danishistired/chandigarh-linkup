import { createFileRoute, redirect } from "@tanstack/react-router";
import { random } from "@/lib/webring";

export const Route = createFileRoute("/random")({
  server: {
    handlers: {
      GET: async () => {
        const target = random();
        if (!target) {
          return new Response("ring is empty", {
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
