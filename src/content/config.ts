/**
 * Конфигурация коллекций контента (кейсы, инструкции).
 */
import { defineCollection, z } from 'astro:content';

const casesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    result: z.string().optional(),
    stack: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .optional(),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  cases: casesCollection,
  guides: guidesCollection,
};
