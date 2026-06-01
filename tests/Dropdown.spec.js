const {test, expect} = require('@playwright/test')

test ('Dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator('#country').selectOption({label:'India'})  //label
    //await page.locator('#country').selectOption('India') //Visble Text
    
    // always prefer above options
    
    // await page.locator('#country').selectOption({value: 'uk'}) // by using Value
    //await page.locator('#country').selectOption({index: 1}) // by using Index



    // Approch 01
    //const options = await page.locator('#country option')
    //await expect (options).toHaveCount(10);

    // Approch 02
    //const options = await page.$$('#country option')
    //console.log("Number of options:", options.length)



    // Check Presence of value in the Dropdown - Approach01
    //const content = await page.locator('#country').textContent()
    //await expect (content.includes('India')).toBeTruthy();



    // Check Presence of value in the dropdown - Approach02 using looping
    /*const options = await page.$$('#country option')
    let status = false;

    for(const option of options)
    {
        //console.log(await option.textContent())
        let value=await option.textContent();
        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }*/

//Option 5  
    const options = await page.$$('#country option')
    for(const option of options)
    {
        let value=await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption("#country", { label: "France" });
            break;
        }
    }    

    await page.waitForTimeout(7000);


})