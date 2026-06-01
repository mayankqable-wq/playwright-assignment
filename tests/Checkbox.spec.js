const {test, expect} = require('@playwright/test')

test ('Checkbox',  async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("//input[@id='monday']").check();
    await expect(await page.locator("//input[@id='monday']")).toBeChecked()
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeFalsy()



    const CheckboxLocators = ["//input[@id='monday']", 
                              "//input[@id='sunday']",
                              "//input[@id='friday']" 

    ];

    for(const locator of CheckboxLocators) //select multiple checkboxs
    {
        await page.locator(locator).check();

    }

    await page.waitForTimeout(5000);

    
    for(const locator of CheckboxLocators) //uncheck multiple checkbox which are already selected
    {
        if(await page.locator(locator).isChecked())

        {

        await page.locator(locator).uncheck();

        }

    }

    await page.waitForTimeout(5000);

})