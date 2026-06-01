const { test, expect } = require("@playwright/test")
test ('Logout', async ({page})=> {

await page.goto ('https://www.amazon.in/')
await page.click ('id=nav-link-accountList-nav-line-1') 


})