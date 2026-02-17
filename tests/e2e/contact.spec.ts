/**
 * E2E: страница контактов и форма.
 */
import { test, expect } from '@playwright/test';

test.describe('Контакты', () => {
  test('на странице есть форма обратной связи и кнопка отправки', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.getByRole('heading', { name: 'Форма обратной связи' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Отправить/ })).toBeVisible();
  });
});
