const {test, expect} = require('@playwright/test')

test ('MultiSelectDropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select multiple options from multi select dropdown

    //await page.selectOption("//label[normalize-space()='Colors:']",['Blue', 'Red', 'Yellow'])


    //Assertions
    // 1. Check Number of options in Dropdown
    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(7);

    //2. Check Number of options in Dropdown using JS array
    const options = await page.$$('#colur option')
    console.log("Number of options:", options.length)


    await page.waitForTimeout(5000);


})