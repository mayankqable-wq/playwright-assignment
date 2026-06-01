import { test, expect } from '@playwright/test';

test('Search Product', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // 3 - Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 4 - Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    // 5 - Verify 'Login to your account' is visible
    await expect(page.locator('text=Login to your account')).toBeVisible();

    // 6 - Enter correct email address and password
    await page.locator('input[data-qa="login-email"]').fill('mayank+01@yopmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Mayank@0321');

    // 7 - Click 'login' button
    await page.locator('button[data-qa="login-button"]').click();

    // 8 - Click on 'Products' button
    await page.locator('a[href="/products"]').click();

    // 9 - Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL(/.*products/);
    await expect(page.locator('text=All Products')).toBeVisible();

    // 10 - Enter product name in search input and click search button
    const productName = 'Blue Top';

    await page.locator('#search_product').fill(productName);
    await page.locator('#submit_search').click();

    // 11 - Verify 'SEARCHED PRODUCTS' is visible
    await expect(page.locator('text=Searched Products')).toBeVisible();

    // 12 - Verify all the products related to search are visible
    const searchedProducts = page.locator('.productinfo p');

    await expect(searchedProducts.first()).toBeVisible();

    const count = await searchedProducts.count();

    for (let i = 0; i < count; i++) {
        await expect(searchedProducts.nth(i)).toContainText('Blue Top');
    }

});