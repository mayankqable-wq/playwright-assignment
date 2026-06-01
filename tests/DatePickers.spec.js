const {test, expect} = require('@playwright/test')

test ('Date Pickers', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

//await page.fill('#datepicker', '05/08/2026')


// Date Picker
const year = "2026"
const month = "June"
const date = "20"

await page.click('#datepicker')

while(true)
{
    const currentyear = await page.locator('.ui-datepicker-year').textContent()
    const currentmonth = await page.locator('.ui-datepicker-month').textContent()

    if(currentyear == year && currentmonth == month)
    {
        break;
    }

    await page.locator('[title="Next"]').click()


}

const dates = await page.$$("//a[class='ui-state-default']")
//date selection using loop

for(const dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click();
        break;
    }

}

 
await page.waitForTimeout(3000);




})