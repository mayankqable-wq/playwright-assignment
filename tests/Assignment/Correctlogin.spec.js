import { test, expect } from '@playwright/test';

test('Correct Login', async ({ page }) => {

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

    // 8 - Verify that 'Logged in as username' is visible
    await expect(page.locator('text=Logged in as')).toBeVisible();

    // 9 - Click 'Delete Account' button
    //await page.locator('a[href="/delete_account"]').click();

    // 10 - Verify that 'ACCOUNT DELETED!' is visible
    //await expect(page.locator('text=Account Deleted!')).toBeVisible();

});