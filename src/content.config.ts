import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    summary: z.string().min(1),
    draft: z.boolean().optional().default(false),
  }),
});

const about = defineCollection({
  loader: file("src/data/about.yaml"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.object({
      headline: z.string(),
      summary: z.string(),
      location: z.string().optional(),
    }),
    experience: z.array(
      z.object({
        company: z.string(),
        role: z.string(),
        period: z.string(),
        summary: z.string(),
      }),
    ),
    projects: z.array(
      z.object({
        title: z.string(),
        context: z.string(),
        image: z.string().optional(),
        accent: z.string().optional(),
        links: z.array(
          z.object({
            label: z.string(),
            url: z.string().url(),
          }),
        ),
      }),
    ),
    education: z.array(
      z.object({
        school: z.string(),
        program: z.string(),
        period: z.string(),
      }),
    ),
    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      }),
    ),
    socialLinks: z.array(
      z.object({
        label: z.string(),
        url: z.string().url(),
      }),
    ),
  }),
});

export const collections = { about, blog };
