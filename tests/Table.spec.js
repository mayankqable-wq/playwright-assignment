const {test, expect} = require('@playwright/test')

test ('Table Handle', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const table = await page.locator('#productTable')

//totla number of rows and columns

const columns = await table.locator('thead tr th')
console.log('Number of columns', await columns.count())
expect(await columns.count()).toBe(4);

const rows = await table.locator('tbody tr')
console.log('Numbers of rows', await rows.count())
expect(await rows.count()).toBe(5);


// Select check box for product 4

/*const machedRow = rows.filter({
    //has: page.locator('td'),
    hasText: 'Smartwatch'
})

await machedRow.locator('input[type="checkbox"]').check();*/


//3. Select multiple products by re-usable function
await selectProduct(rows, page, 'Laptop')
await selectProduct(rows, page, 'Tablet')
await selectProduct(rows, page, 'Wireless Earbuds')


// 4. Print all product details using loop



await page.waitForTimeout(5000);

})


async function selectProduct(rows, page, name)
{
    const machedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'name'
})

await machedRow.locator('input').check();


}