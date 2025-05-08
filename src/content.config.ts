import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        excerpt: z.string().optional(),
        slug: z.string().optional(),
    }),
});

export const collections = { posts };