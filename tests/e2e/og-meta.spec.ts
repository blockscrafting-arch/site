/**
 * E2E: наличие OG- и Twitter-метатегов на главной.
 */
import { test, expect } from '@playwright/test';

test.describe('OG-метаданные на главной', () => {
  test('на главной есть og:title, og:description, og:url, og:image', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('meta[property="og:title"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[property="og:description"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[property="og:url"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
  });

  test('на главной есть twitter:card, twitter:title, twitter:description, twitter:image', async ({
    page,
  }) => {
    await page.goto('/');
    await expect(page.locator('meta[name="twitter:card"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[name="twitter:title"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[name="twitter:description"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
    await expect(page.locator('meta[name="twitter:image"]').first()).toHaveAttribute(
      'content',
      /.+/
    );
  });

  test('og:title содержит название сайта или заголовок страницы', async ({ page }) => {
    await page.goto('/');
    const content = await page.locator('meta[property="og:title"]').first().getAttribute('content');
    expect(content).toBeTruthy();
    expect(content!.length).toBeGreaterThan(5);
  });
});
