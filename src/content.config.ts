import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
    loader: glob({
        base: './src/content/blog',
        pattern: '**/*.{md,mdx}',
    }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
		category: z.string().default('Uncategorized'),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
})

export const collections = { blog }