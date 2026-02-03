/**
 * E2E: навигация по основным страницам.
 */
import { test, expect } from '@playwright/test';

test.describe('Навигация', () => {
  test('главная открывается и содержит заголовок', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Влад');
    await expect(page.getByRole('link', { name: 'Кейсы' }).first()).toBeVisible();
  });

  test('переход на страницу кейсов', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Кейсы' }).first().click();
    await expect(page).toHaveURL(/\/cases/);
    await expect(page.locator('h1')).toContainText('Кейсы');
  });

  test('переход на страницу инструкций', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Инструкции' }).first().click();
    await expect(page).toHaveURL(/\/guides/);
    await expect(page.locator('h1')).toContainText('Инструкции');
  });

  test('переход на контакты', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Контакты' }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1')).toContainText('Контакты');
  });

  test('страница кейса открывается по slug', async ({ page }) => {
    await page.goto('/cases/markus');
    await expect(page.locator('h1')).toContainText('Маркус');
  });

  test('страница инструкции открывается по slug', async ({ page }) => {
    await page.goto('/guides/openai-key');
    await expect(page.locator('h1')).toContainText('OpenAI');
  });
});
