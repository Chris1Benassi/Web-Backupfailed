import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';


// 3. Define your collection(s)
const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/posts" }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts };