import { test, expect } from '@playwright/test';

test('View Brand', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // Login
    await page.locator('a[href="/login"]').click();

    await expect(page.locator('text=Login to your account')).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill('mayank+01@yopmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Mayank@0321');

    await page.locator('button[data-qa="login-button"]').click();

    await expect(page.locator('text=Logged in as')).toBeVisible();

    // 3 - Click on 'Products' button
    await page.locator('a[href="/products"]').click();

    // 4 - Verify that Brands are visible on left side bar
    await expect(page.locator('.brands_products')).toBeVisible();

    // 5 - Click on any brand name (Polo)
    await page.locator('a[href="/brand_products/Polo"]').click();

    // 6 - Verify that user is navigated to brand page and brand products are displayed
    await expect(page).toHaveURL(/.*brand_products/);

    await expect(page.locator('.features_items')).toBeVisible();

    // 7 - Click on any other brand link (H&M)
    await page.locator('a[href="/brand_products/H&M"]').click();

    // 8 - Verify that user is navigated to that brand page and can see products
    await expect(page).toHaveURL(/.*brand_products/);

    await expect(page.locator('.features_items')).toBeVisible();

});