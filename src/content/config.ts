// src/content/config.ts
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/notes" }),
  //   type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
    category: z
      .enum([
        "Learning",
        "Seedling",
        "Budding",
        "Evergreen",
        "Now",
        "Reflections",
        "World"
      ])
      .optional(),
    // date: z
    //   .date()
    //   .or(z.string())
    //   .transform((val) => new Date(val)),
    updated: z
      .date()
      .or(z.string())
      .transform((val) => new Date(val))
      .optional(),
    description: z.string().optional(),
    // tags: z.array(z.string()).optional(),
  }),
});

const worldCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/world" }),
  //   type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
    category: z
      .enum([
        "Learning",
        "Seedling",
        "Budding",
        "Evergreen",
        "Now",
        "Reflections",
        "World"
      ])
      .optional(),
    // date: z
    //   .date()
    //   .or(z.string())
    //   .transform((val) => new Date(val)),
    // updated: z
    //   .date()
    //   .or(z.string())
    //   .transform((val) => new Date(val))
    //   .optional(),
    description: z.string().optional(),
    // tags: z.array(z.string()).optional(),
  }),
});


export const collections = {
  notes: notesCollection,
  world: worldCollection,
};
