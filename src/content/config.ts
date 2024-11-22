import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from 'starlight-blog/schema'

const docs = defineCollection({
  schema: docsSchema({
    extend: (context) => blogSchema(context)
  }),
});

export const collections = { docs };
