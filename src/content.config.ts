import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),

    hero: z.object({
      title: z.string(),
      description: z.string(),
    }),

    services: z.object({
      title: z.string(),
      description: z.string(),
    }).optional(),

    about: z.object({
      title: z.string(),
      description: z.string(),
    }).optional(),
  }),
});

export const collections = {
  pages,
};