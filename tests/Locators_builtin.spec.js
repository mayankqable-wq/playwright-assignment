const { test, expect } = require('@playwright/test')

test ('Locator_builtin', async({page})=>{

    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type: 'submit'}).click()

    const name = page.locator('.oxd-userdropdown-name')
    await expect(name).toBeVisible()
    //await expect (page.getByText('name')).toBeVisible();

    await page.close()







})