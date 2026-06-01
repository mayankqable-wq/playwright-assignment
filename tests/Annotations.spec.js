const {test, expect} = require('@playwright/test')

//only (That perticular test will execute)
/*test.only('test01', async({page})=>{
    console.log('This is Test01')
});

//skip (That perticulat test will skip)
test ('test02', async({page})=>{
    console.log('This is Test02')
});*/

//Condition based skip
/*test('test03', async({page,browserName})=>{
    console.log('This is Test03')
    if(browserName==='Chromium')
    {
        test.skip()
    }
});*/

//Fixme
/*test('test04', async({page})=>{
    test.fixme()
    console.log('This is Test04')
});*/

//Fail

/*test('test05', async({page})=>{
    test.fail()//expection
    console.log('This is Test05')
    expect(1).toBe(2) //Actual

    //If Expection and Actual are mismatch then result will come as Fail
    ////If Expection and Actual are same then result will come as Pass

});*/

test('test06', async({page})=>{
    test.slow();
    await page.goto('https://demoblaze.com/')
    console.log('This is Test06')

});





