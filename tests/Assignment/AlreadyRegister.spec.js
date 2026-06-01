import { test, expect } from '@playwright/test';

test('Already Register', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // 3 - Verify that home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 4 - Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    // 5 - Verify 'New User Signup!' is visible
    await expect(page.locator('text=New User Signup!')).toBeVisible();

    // 6 - Enter name and already registered email address
    await page.locator('input[data-qa="signup-name"]').fill('Mayank');

    await page.locator('input[data-qa="signup-email"]')
        .fill('mayank+01@yopmail.com');

    // 7 - Click 'Signup' button
    await page.locator('button[data-qa="signup-button"]').click();

    // 8 - Verify error 'Email Address already exist!' is visible
    await expect(
        page.locator('text=Email Address already exist!')
    ).toBeVisible();

});