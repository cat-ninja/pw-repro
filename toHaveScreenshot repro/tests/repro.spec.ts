import { test, expect } from "@playwright/test";

test(
  "Image size bug",
  { tag: ["@desktop", "@visual"] },
  async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://getbootstrap.com/docs/4.0/components/dropdowns/");
    await page.locator("#dropdownMenuButton").click();

    console.log(await page.locator(".dropdown-menu.show").boundingBox());
    await expect(page.locator(".dropdown-menu.show")).toHaveScreenshot();
  }
);
