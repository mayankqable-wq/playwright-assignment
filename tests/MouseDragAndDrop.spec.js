const {test, expect} = require('@playwright/test')
test("Drag&Drop", async({page})=>{


await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE')

const rome = await page.locator('#box6')
const italy = await page.locator('#box106')

// Appoch 01

/*await rome.hover();
await page.mouse.down();

await italy.hover();
await page.mouse.up();*/


//Approch02
await rome.dragTo(italy)

await page.waitForTimeout(5000);



})