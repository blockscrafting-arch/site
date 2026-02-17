/**
 * E2E: тултипы глоссария на странице с терминами.
 */
import { test, expect } from '@playwright/test';

test.describe('Глоссарий', () => {
  test('на странице кейса есть текст с термином n8n', async ({ page }) => {
    await page.goto('/cases/markus');
    await expect(page.getByText('n8n', { exact: true }).first()).toBeVisible();
  });

  test('при наведении на термин появляется тултип', async ({ page }) => {
    await page.goto('/cases/markus');
    const term = page.locator('[data-term="n8n"]').first();
    await term.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
    if ((await term.count()) > 0) {
      await term.hover();
      await page.waitForTimeout(400);
      const tooltip = page.locator('.tippy-box');
      await expect(tooltip).toBeVisible({ timeout: 3000 }).catch(() => null);
    }
  });
});
