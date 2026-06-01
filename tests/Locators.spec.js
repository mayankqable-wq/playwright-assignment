const {test, expect} = require ('@playwright/test')
test('Locators', async ({page})=>{

    await page.goto("https://demoblaze.com/")

    //Click on Login Button - Property as locator

    //await page.locator('id=login2').click()
    await page.click('id=login2')

    // provide username - CSS

    //await page.locator('#loginusername').fill('pavonol')
    await page.fill('#loginusername','pavonol')

    // Provide password
    // await page.locator('#loginpassword').fill('test@123')
    await page.fill('#loginpassword', 'test@123')

    //Click on login button
    await page.click("//button[normalize-space()='Log in']")

    //Verify the logout link presence
    const Logoutlink = await page.locator("//a[normalize-space()='Log out']")
    
    await expect (Logoutlink).toBeVisible();

    await page.close()


    



})