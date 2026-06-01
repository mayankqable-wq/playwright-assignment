const {test, expect} = require ('@playwright/test')
test ('Assertions', async({page})=>{
 
    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/registerr')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()




})