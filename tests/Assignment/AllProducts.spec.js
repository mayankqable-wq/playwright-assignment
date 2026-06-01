import { test, expect } from '@playwright/test';

test('All Products', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // Login
    await page.locator('a[href="/login"]').click();

    await expect(page.locator('text=Login to your account')).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill('mayank+01@yopmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Mayank@0321');

    await page.locator('button[data-qa="login-button"]').click();

    await page.waitForLoadState('networkidle');

    await expect(page.locator('text=Logged in as')).toBeVisible();

    // 4 - Click on 'Products' button
    await page.locator('a[href="/products"]').click();

    // 5 - Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL(/.*products/);

    // 6 - Verify products list is visible
    await expect(page.locator('.features_items')).toBeVisible();

    // 7 - Click on 'View Product' of first product
    await page.locator('a[href*="/product_details/"]').first().click();

    // 8 - Verify user is landed to product detail page
    await expect(page).toHaveURL(/.*product_details/);

    // 9 - Verify product details are visible

    // Product Name
    await expect(page.locator('.product-information h2')).toBeVisible();

    // Category
    await expect(page.locator('.product-information p').first()).toBeVisible();

    // Price
    await expect(page.locator('.product-information span span')).toBeVisible();

    // Availability
    await expect(page.getByText('Availability:')).toBeVisible();

    // Condition
    await expect(page.getByText('Condition:')).toBeVisible();

    // Brand
    await expect(page.getByText('Brand:')).toBeVisible();

});