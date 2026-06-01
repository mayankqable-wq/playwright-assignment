import { test, expect } from '@playwright/test';
 
test('Add Product in Cart', async ({ page }) => {
 
    // Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');
 
    // Verify home page
    await expect(page).toHaveURL('https://automationexercise.com/');
 
    // Login
    await page.locator('a[href="/login"]').click();
 
    await expect(page.locator('text=Login to your account')).toBeVisible();
 
    await page.locator('input[data-qa="login-email"]').fill('mayank+01@yopmail.com');
    await page.locator('input[data-qa="login-password"]').fill('Mayank@0321');
 
    await page.locator('button[data-qa="login-button"]').click();
 
    await expect(page.locator('text=Logged in as')).toBeVisible();
 
    // Click Products
    await page.locator('a[href="/products"]').click();
 
    // Hover over first product and add to cart
    await page.locator('.product-image-wrapper').first().hover();
    await page.locator('a[data-product-id="1"]').first().click();
 
    // View Cart
    await page.locator('text=View Cart').click();
 
    // Verify product added to cart
    await expect(page.locator('#product-1')).toBeVisible();
 
    // Verify price is displayed
    await expect(page.locator('#product-1 .cart_price')).toBeVisible();
 
    // Verify quantity is greater than 0
    const quantity = await page.locator('#product-1 .cart_quantity button').textContent();
    expect(Number(quantity?.trim())).toBeGreaterThan(0);
 
    // Verify total price is displayed
    await expect(page.locator('#product-1 .cart_total')).toBeVisible();
});