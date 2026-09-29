import type { APIRoute } from "astro";
import { getPublishedCaseStudies } from "../data/case-studies";
import { absolutePublicUrl } from "../utils/public-url";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("Astro site must be configured for the sitemap.");
  }

  const routes = ["/", ...getPublishedCaseStudies().map((study) => study.seo.canonicalPath)];
  const urls = routes.map((route) => `  <url><loc>${absolutePublicUrl(route, site)}</loc></url>`);

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
    {
      headers: { "Content-Type": "application/xml; charset=utf-8" }
    }
  );
};
