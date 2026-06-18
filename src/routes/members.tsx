import { createFileRoute } from "@tanstack/react-router";
import { members } from "@/lib/webring";

export const Route = createFileRoute("/members")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { count: members.length, members },
          { headers: { "cache-control": "public, max-age=60" } },
        ),
    },
  },
});
