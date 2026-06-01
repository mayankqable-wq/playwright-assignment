const {test, expect} = require('@playwright/test')
test('Test1', async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async({page})=>{

    await page.goto('https://demo.opencart.com/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle('Your');
})