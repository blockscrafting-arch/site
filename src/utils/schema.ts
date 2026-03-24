/**
 * JSON-LD utility: BreadcrumbList и другие схемы.
 * Используется в [id]/[slug] страницах через BaseLayout prop `schema`.
 */
import { site } from './site';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

/**
 * Генерирует JSON-LD BreadcrumbList.
 * Последний элемент — текущая страница (без href).
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}
