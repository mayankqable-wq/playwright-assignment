import { test, expect } from '@playwright/test';

test('Remove Product From Cart', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // 3 - Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // Login
    await page.locator('a[href="/login"]').click();

    await expect(page.locator('text=Login to your account')).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill('mayank+01@yopmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Mayank@0321');

    await page.locator('button[data-qa="login-button"]').click();

    // Verify login successful
    await expect(page.locator('text=Logged in as')).toBeVisible();

    // 4 - Add product to cart
    await page.locator('.product-image-wrapper').first().hover();

    await page.locator('a[data-product-id="1"]').first().click();

    // 5 - Click 'View Cart' button from popup
    await page.getByText('View Cart').click();

    // 6 - Verify that cart page is displayed
    await expect(page).toHaveURL(/.*view_cart/);
    await expect(page.locator('#cart_info_table')).toBeVisible();

    // Verify product is present in cart
    await expect(page.locator('#product-1')).toBeVisible();

    // 7 - Click 'X' button corresponding to particular product
    await page.locator('#product-1 .cart_quantity_delete').click();

    // 8 - Verify that product is removed from the cart
    await expect(page.locator('#product-1')).toHaveCount(0);

});