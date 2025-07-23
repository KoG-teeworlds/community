import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";
import { blogSchema } from "starlight-blog/schema";

const changelog = defineCollection({
  type: "content",
  schema: z.object({
    version: z.string(),
    environment: z.enum(["dev", "beta", "production"]),
    date: z.date(),
    category: z.enum([
      "feature",
      "bugfix",
      "performance",
      "security",
      "maintenance",
      "api",
    ]),
    impact: z.enum(["critical", "major", "minor", "patch"]),
    services: z.array(z.string()).optional(),
    apis: z.array(z.string()).optional(),
    author: z.string(),
    featured: z.boolean().default(false),
    downtime: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  changelog,
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};
