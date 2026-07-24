import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    base: "./src/content/pages",
    pattern: "**/*.md",
  }),

  schema: z.object({
    title: z.string(),

    heroTitle: z.string().optional(),
    heroText: z.string().optional(),

    servicesTitle: z.string().optional(),
    servicesContent: z.string().optional(),

    aboutTitle: z.string().optional(),
    aboutContent: z.string().optional(),
  }),
});

export const collections = {
  pages,
};