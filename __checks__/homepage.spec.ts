// @ts-ignore
import { test, expect } from "@playwright/test";

test("Homepage", async ({ page }) => {
  const response = await page.goto("https://mauri-checho.vercel.app");
  expect(response?.status()).toBeLessThan(400);
  await expect(page).toHaveTitle(/Mauri y Checho/);
  const mainHeadline = page.locator("#sofi");
  await expect(mainHeadline).toBeVisible();
  await page.screenshot({ path: "homepage.jpg" });
});
