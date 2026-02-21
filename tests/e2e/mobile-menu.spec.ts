/**
 * E2E: мобильное меню — открытие/закрытие, вертикальная навигация без горизонтального скролла.
 */
import { test, expect } from "@playwright/test";

const MOBILE_VIEWPORT = { width: 375, height: 667 };

test.describe("Мобильное меню", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize(MOBILE_VIEWPORT);
  });

  test("открывается по клику на бургер и закрывается по кнопке «Закрыть»", async ({
    page,
  }) => {
    await page.goto("/");
    const openBtn = page.getByRole("button", { name: "Открыть меню" });
    await expect(openBtn).toBeVisible();

    await openBtn.click();
    const menu = page.locator("#mobile-menu");
    await expect(menu).toHaveAttribute("aria-hidden", "false");
    await expect(
      page.getByRole("link", { name: "Услуги" }).last(),
    ).toBeVisible();

    const closeBtn = page.getByRole("button", { name: "Закрыть меню" });
    await closeBtn.click();
    await expect(menu).toHaveAttribute("aria-hidden", "true");
  });

  test("в мобильной панели навигация в одну колонку, без горизонтального скролла", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Открыть меню" }).click();

    const nav = page.locator('#mobile-menu nav[aria-label="Основное меню"]');
    await expect(nav).toBeVisible();
    const navEl = await page
      .locator('#mobile-menu nav[aria-label="Основное меню"]')
      .evaluate((el) => ({
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
      }));
    expect(navEl.scrollWidth).toBeLessThanOrEqual(navEl.clientWidth + 2);
  });

  test("закрывается по клику на ссылку", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Открыть меню" }).click();
    await expect(page.locator("#mobile-menu")).toHaveAttribute(
      "aria-hidden",
      "false",
    );

    await page.getByRole("link", { name: "Кейсы" }).last().click();
    await expect(page.locator("#mobile-menu")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    await expect(page).toHaveURL(/\/cases/);
  });
});
