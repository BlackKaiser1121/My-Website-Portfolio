import type { APIRoute } from "astro";
import { absolutePublicUrl } from "../utils/public-url";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Astro site must be configured for robots.txt.");
  }

  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${absolutePublicUrl("sitemap.xml", site)}\n`,
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    }
  );
};
