/**
 * E2E: переключатель тёмной/светлой темы.
 */
import { test, expect } from '@playwright/test';

test.describe('Переключатель темы', () => {
  test('кнопка переключения темы видна на главной', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', {
      name: /включить (тёмную|светлую) тему/i,
    });
    await expect(toggle).toBeVisible();
  });

  test('клик по кнопке переключает тему (меняется класс на html)', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', {
      name: /включить (тёмную|светлую) тему/i,
    });
    await expect(toggle).toBeVisible();
    const html = page.locator('html');
    const classBefore = await html.getAttribute('class') ?? '';
    await toggle.click();
    await expect(html).not.toHaveAttribute('class', classBefore);
    const classAfter = await html.getAttribute('class') ?? '';
    const hasDark = classAfter.includes('dark');
    const hasLight = classAfter.includes('light');
    expect(hasDark || hasLight).toBe(true);
  });

  test('после переключения кнопка меняет aria-label', async ({ page }) => {
    await page.goto('/');
    const toggle = page.getByRole('button', {
      name: /включить (тёмную|светлую) тему/i,
    });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-label', /включить (тёмную|светлую) тему/i);
  });
});
