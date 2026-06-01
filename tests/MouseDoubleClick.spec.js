const {test, expect} = require('@playwright/test')

test ("Mouse Double Click", async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const buttoncopy = await page.locator("//button[normalize-space()='Copy Text']")

// double click

await buttoncopy.dblclick()

const F2 = await page.locator("//input[@id='field2']")

await expect(F2).toHaveValue('Hello World!')

await page.waitForTimeout(5000);

})