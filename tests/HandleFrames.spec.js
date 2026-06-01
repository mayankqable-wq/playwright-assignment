const {test, expect} = require('@playwright/test')
test ('HandleFrames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Total Frames
    //const allframes = await page.frames()
    //console.log("Number of frames:", allframes.length)

    //Approch 01: using name or url


    //const frame1 = await page.frame('name1')
    
    //const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    //frame1.fill("//input[@name='mytext1']",'Hello')

    
    // Approch 02: Usinng Frame locator

    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputbox.fill("Hello")

await page.waitForTimeout(5000);


})