const {test, expect} = require('@playwright/test')

let page;
 
test.beforeEach(async({browser})=>{
    page = await browser.newPage(); //for new page creation

await page.goto('https://demoblaze.com/')
//login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('pavaol')
await page.locator('#loginpassword').fill('test@123')
await page.locator("//button[normalize-space()='Log in']").click()

});

test.afterEach(async()=>{
//Logout
await page.locator('#logout2').click()
});

test('Home Page Test', async()=>{

//Home Page
const products = await page.locator('.hrefch')
await products.first().waitFor();
await expect(products).toHaveCount(9)

});


test('Add Product to Cart', async()=>{

//Add Products to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator("//a[normalize-space()='Add to cart']").click()

page.on('dialog', async dialog=>{

    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
})


});