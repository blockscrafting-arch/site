/**
 * E2E: страница «Услуги» — полоса навигации по разделам, на мобильном с градиентом справа.
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
});
