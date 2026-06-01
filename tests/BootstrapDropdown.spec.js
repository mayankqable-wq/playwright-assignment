const { test, expect } = require("@playwright/test")

test ('BootStrap',async({page})=>{

await page.goto('https://getbootstrap.com/docs/5.3/components/dropdowns/#single-button')

await page.locator('.multiselect').click()

const options =  await page.locator('ul>li label  input')
await expect(options).toHaveCount(11);

await page.waitForTimeout(5000);


})