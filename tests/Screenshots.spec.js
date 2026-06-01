const {test, expect} = require('@playwright/test')

test('page screenshot', async({page})=>{

    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+ 'HomePage.png'})


});

test('Full page screenshot', async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+ 'FullPage.png',fullPage:true})

});

test.only('Element Screenshot', async({page})=>{

    await page.goto('https://demoblaze.com/')
    await page.locator("//div[@class='col-lg-9']//div[2]//div[1]//a[1]//img[1]").screenshot({path:'tests/Screenshots/'+Date.now()+ 'Nokia.png'})


});