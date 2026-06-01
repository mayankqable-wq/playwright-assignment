const {test, expect} = require('@playwright/test')

test('SoftAssertion', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator ('#nava')).toBeVisible()


})