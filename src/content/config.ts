import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";
import { blogSchema } from "starlight-blog/schema";

const docs = defineCollection({ loader: docsLoader(), schema: docsSchema() });
const blog = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: (context) => blogSchema(context),
  }),
});

export const collections = { docs, blog };
