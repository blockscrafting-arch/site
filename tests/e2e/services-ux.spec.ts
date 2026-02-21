/**
 * E2E: страница «Услуги» — на мобильном видна подсказка «Листайте вправо» или полоса скроллится.
 */
import { test, expect } from "@playwright/test";

const MOBILE_VIEWPORT = { width: 375, height: 667 };

test.describe("Услуги: UX горизонтальной навигации", () => {
  test("на мобильном видна полоса навигации по услугам", async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto("/services");

    const quickNav = page.locator(".service-quick-nav");
    await expect(quickNav).toBeVisible();
    await expect(quickNav.getByRole("link").first()).toBeVisible();
  });

  test("подсказка «Листайте вправо» скрывается после скролла полосы", async ({
    page,
  }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
    await page.goto("/services");

    const hint = page.locator(".service-quick-nav-hint");
    const inner = page.locator(".service-quick-nav-inner");
    const scrollable = await inner.evaluate(
      (el) => el.scrollWidth > el.clientWidth,
    );
    if (!scrollable) {
      await expect(hint).toHaveClass(/hidden/);
      return;
    }
    await inner.evaluate((el) => {
      el.scrollLeft = 50;
    });
    await page.waitForTimeout(100);
    await expect(hint).toHaveClass(/hidden/);
  });
});
