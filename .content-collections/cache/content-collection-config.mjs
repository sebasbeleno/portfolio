// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";
var projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string(),
    order: z.number(),
    content: z.string()
  })
});
var blog = defineCollection({
  name: "blog",
  directory: "content/blog",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    content: z.string()
  })
});
var content_collections_default = defineConfig({
  collections: [projects, blog]
});
export {
  content_collections_default as default
};
