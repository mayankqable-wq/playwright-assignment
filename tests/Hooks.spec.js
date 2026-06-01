const {test, expect} = require('@playwright/test')

test('Home Page Test', async({page})=>{

await page.goto('https://demoblaze.com/')
//login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavaol')
await page.locator('#loginpassword').fill('test@123')
await page.locator("//button[normalize-space()='Log in']").click()


//Home Page
const products = await page.locator('.hrefch')
await products.first().waitFor();
await expect(products).toHaveCount(9)

//Logout
await page.locator('#logout2').click()

});


test ('Add Product to Cart', async({page})=>{

await page.goto('https://demoblaze.com/')
//login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavaol')
await page.locator('#loginpassword').fill('test@123')
await page.locator("//button[normalize-space()='Log in']").click()

//Add Products to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator("//a[normalize-space()='Add to cart']").click()

page.on('dialog', async dialog=>{

    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
})

//Logout
await page.locator('#logout2').click()

});