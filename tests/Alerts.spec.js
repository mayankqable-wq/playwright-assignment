const {test, expect} = require('@playwright/test')
test.skip ('Alerts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or // Dialog Window Handler

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();

    })

    await page.click("//button[@id='alertBtn']")
    await page.waitForTimeout(6000);

})


test.skip ('Confirmation dialog-Alert with ok and cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or // Dialog Window Handler

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //Close by using Ok button
        //await dialog.dismiss(); //Close by using Cancel

    })

    await page.click("//button[@id='confirmBtn']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    await page.waitForTimeout(6000);

})


test ('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Enabling alert handling or // Dialog Window Handler

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('Mayank'); //Close by using Ok button
        //await dialog.dismiss(); //Close by using Cancel

    })

    await page.click("//button[@id='promptBtn']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Mayank! How are you today?')

    await page.waitForTimeout(6000);

})