const {test, expect} = require("@playwright/test")
test ("MouseHove", async({page})=>{

await page.goto('https://www.opencart.com/')

const desktops = await page.locator("//a[normalize-space()='Resources']")
const contactus = await page.locator("//ul[@class='dropdown-menu']//a[contains(text(),'Contact Us')]")

//mouse hover

await desktops.hover()
await contactus.hover()


await page.waitForTimeout(5000)

// Need to verify with other website
})