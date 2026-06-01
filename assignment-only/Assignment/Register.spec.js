import { test, expect } from '@playwright/test';

test('Register User Test', async ({ page }) => {

    // 1 & 2 - Launch browser and navigate to URL
    await page.goto('https://automationexercise.com/');

    // 3 - Verify home page is visible successfully
    await expect(page).toHaveURL('https://automationexercise.com/');

    // 4 - Click on 'Signup / Login' button
    await page.locator('a[href="/login"]').click();

    // 5 - Verify 'New User Signup!' is visible
    await expect(page.locator('text=New User Signup!')).toBeVisible();

    // 6 - Enter name and email address
    const email = ("mayank+03@yopmail.com");

    await page.locator('input[data-qa="signup-name"]').fill('Mayank');
    await page.locator('input[data-qa="signup-email"]').fill(email);

    // 7 - Click 'Signup' button
    await page.locator('button[data-qa="signup-button"]').click();

    // 8 - Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(page.locator('text=Enter Account Information')).toBeVisible();

    // 9 - Fill details
    await page.locator('#id_gender1').check();

    await page.locator('#password').fill('Test@123');

    await page.locator('#days').selectOption('10');
    await page.locator('#months').selectOption('5');
    await page.locator('#years').selectOption('1998');

    // 10 - Select checkbox 'Sign up for our newsletter!'
    await page.locator('#newsletter').check();

    // 11 - Select checkbox 'Receive special offers from our partners!'
    await page.locator('#optin').check();

    // 12 - Fill address details
    await page.locator('#first_name').fill('Mayank');
    await page.locator('#last_name').fill('Agrawal');
    await page.locator('#company').fill('ABC Company');
    await page.locator('#address1').fill('Mohali');
    await page.locator('#address2').fill('Phase 8');

    await page.locator('#country').selectOption('India');

    await page.locator('#state').fill('Punjab');
    await page.locator('#city').fill('Mohali');
    await page.locator('#zipcode').fill('140308');
    await page.locator('#mobile_number').fill('9876543210');

    // 13 - Click 'Create Account' button
    await page.locator('button[data-qa="create-account"]').click();

    // 14 - Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator('text=Account Created!')).toBeVisible();

    // 15 - Click 'Continue' button
    await page.locator('a[data-qa="continue-button"]').click();

    // 16 - Verify that 'Logged in as username' is visible
    await expect(page.locator('text=Logged in as')).toBeVisible();

    // 17 - Click 'Delete Account' button
    await page.locator('a[href="/delete_account"]').click();

    // 18 - Verify that 'ACCOUNT DELETED!' is visible
    await expect(page.locator('text=Account Deleted!')).toBeVisible();

    // Click Continue button
    await page.locator('a[data-qa="continue-button"]').click();

});