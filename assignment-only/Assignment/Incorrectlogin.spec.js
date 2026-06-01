import { test, expect } from '@playwright/test';

test('Incorrect login', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // 3 - Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 4 - Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    // 5 - Verify 'Login to your account' is visible
    await expect(page.locator('text=Login to your account')).toBeVisible();

    // 6 - Enter incorrect email address and password
    await page.locator('input[data-qa="login-email"]').fill('wrongemail@gmail.com');

    await page.locator('input[data-qa="login-password"]').fill('WrongPassword');

    // 7 - Click 'login' button
    await page.locator('button[data-qa="login-button"]').click();

    // 8 - Verify error 'Your email or password is incorrect!' is visible
    await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();

});