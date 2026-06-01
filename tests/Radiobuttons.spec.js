const {test, expect} = require('@playwright/test')

test ('Radiobuttons', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("//input[@id='male']").check()

    await expect (page.locator("//input[@id='male']")).toBeChecked();

    await expect (page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000)




})