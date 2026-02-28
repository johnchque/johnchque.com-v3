import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["note"]),
    stage: z.enum(['seedling', 'budding', 'evergreen']),
    last_tended: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
  }),
});

const lists = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/lists" }),
  schema: z.object({
    title: z.string(),
    last_tended: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
  }),
});

const indexesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/indexes" }),
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
    updated: z
      .date()
      .or(z.string())
      .transform((val) => new Date(val))
      .optional(),
    description: z.string().optional(),
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

const worksCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/works" }),
  //   type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()).transform((val) => new Date(val)).optional(),
    // category: z
    //   .enum([
    //     "Learning",
    //     "Seedling",
    //     "Budding",
    //     "Evergreen",
    //     "Now",
    //     "Reflections",
    //     "World"
    //   ])
    //   .optional(),
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
    type: z.string().optional(),
    role: z.string().optional(),
    with: z.string().optional(),
    // tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  notes: notesCollection,
  world: worldCollection,
  works: worksCollection,
  indexes: indexesCollection
};
