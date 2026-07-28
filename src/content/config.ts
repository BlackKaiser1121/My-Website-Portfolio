import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["active", "deployed", "draft"]),
    priority: z.number().int().positive(),
    technologies: z.array(z.string())
  })
});

export const collections = { projects };
