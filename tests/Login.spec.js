const {test, expect} = require('@playwright/test')
test('Login', async ({page})=>{

await page.goto ('https://www.demoblaze.com/')
await page.click('id=login2')
await page.fill ('#loginusername', 'pavanol')
await page.fill ('#loginpassword', 'test@123')
await page.click("button[onclick='logIn()']")

const Logouturl = await page.locator('#logout2')
await expect(Logouturl).toBeVisible()
await page.click('#logout2')
await page.close()  
})