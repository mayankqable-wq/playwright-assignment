const{test, expect} = require('@playwright/test')

test('test', async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.click('id=login2')
    await page.fill('#loginusername','pavonol')
    await page.fill('#loginpassword', 'test@123')
    await page.click("//button[normalize-space()='Log in']")



});