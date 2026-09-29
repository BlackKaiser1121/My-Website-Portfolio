import { defineCollection, z } from "astro:content";

const projectVisualSchema = z.object({
  kind: z.enum(["placeholder", "asset"]),
  label: z.string(),
  accessibilityLabel: z.string().optional(),
  src: z.string().optional(),
  alt: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional()
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    projectSlug: z.string(),
    title: z.string(),
    shortTitle: z.string(),
    summary: z.string(),
    description: z.string(),
    year: z.string(),
    status: z.enum(["active", "deployed", "in-progress", "draft"]),
    role: z.string(),
    responsibilities: z.array(z.string()),
    technologies: z.array(z.string()),
    category: z.string(),
    featured: z.boolean(),
    order: z.number().int().positive(),
    thumbnail: projectVisualSchema,
    screenshots: z.array(projectVisualSchema).default([]),
    repositoryUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    caseStudyAvailable: z.boolean(),
    caseStudySections: z.array(
      z.object({
        title: z.string(),
        status: z.enum(["available", "planned", "missing"])
      })
    ),
    accessibilityLabel: z.string(),
    missingContent: z.array(z.string())
  })
});

export const collections = { projects };
