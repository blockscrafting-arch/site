/**
 * Конфигурация коллекций контента (кейсы, инструкции).
 */
import { defineCollection, z } from "astro:content";

const casesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    result: z.string().optional(),
    stack: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          prefix: z.string().optional(),
          suffix: z.string().optional(),
        }),
      )
      .optional(),
    client: z.string().optional(),
    /** Кейс может относиться к нескольким категориям сразу. */
    categories: z
      .array(
        z.enum([
          "bot",
          "ai-agent",
          "automation",
          "mini-app",
          "parser",
          "script",
          "autoposting",
        ]),
      )
      .default([]),
    accentColor: z.string().default("#10b981"),
    layout: z
      .enum(["default", "split", "fullwidth", "timeline"])
      .default("default"),
    heroImage: z.string().optional(),
    heroStyle: z.enum(["dark", "light", "gradient"]).optional(),
    problem: z.string().optional(),
    testimonial: z
      .object({
        text: z.string(),
        author: z.string(),
      })
      .optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    /** Блок «продукт»: логотип + ссылка (например на бота). */
    productLogo: z.string().optional(),
    productLink: z.string().optional(),
    productName: z.string().optional(),
    /** Скриншоты продукта/результата для галереи на странице кейса. */
    screenshots: z.array(z.string()).optional(),
  }),
});

const guidesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    category: z.enum(["setup", "integrations", "faq"]).optional(),
    /** Инструкция для заказчика (без тех.фона): что сделать перед стартом проекта. */
    forClient: z.boolean().optional(),
  }),
});

export const collections = {
  cases: casesCollection,
  guides: guidesCollection,
};
