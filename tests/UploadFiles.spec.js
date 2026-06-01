const {test, expect} =  require('@playwright/test')

/*test("Upload Files", async({page})=>{

    await page.locator('http://foundit.in/seeker/profile')


    await page.waitForSelector("//button[@class='inline-flex items-center justify-center gap-1 rounded-3xl px-3 py-2 text-sm font-normal text-trusted-600 border bg-primary-400 border-primary-400 hover:bg-trusted-200 hover:border-trusted-200 hidden w-max md:!inline-block']")
    await page.locator("//button[@class='inline-flex items-center justify-center gap-1 rounded-3xl px-3 py-2 text-sm font-normal text-trusted-600 border bg-primary-400 border-primary-400 hover:bg-trusted-200 hover:border-trusted-200 hidden w-max md:!inline-block']").click()

    await page.locator('#file-upload').setInputFiles('tests\UploadFiled\CAEC Test Session Readiness (9).pdf')

    await page.waitForTimeout(5000);*/



    test.only('Upload Multiple Files', async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    await page.locator("[@id ='filesToUpload']").setInputFiles(['tests\UploadFiled\CAEC Test Session Readiness (9).pdf', 'tests\UploadFiled\MPT_Technical_Readiness_Form_for_Institution_Managers_-_In-Person_Sessions (37).docx' ])
    
    await page.waitForTimeout(3000)

    expect (await page.locator('#fileList li:nth-child(1)')).toHaveText('CAEC Test Session Readiness (9).pdf')

    expect (await page.locator('#fileList li:nth-child(2)')).toHaveText('MPT_Technical_Readiness_Form_for_Institution_Managers_-_In-Person_Sessions (37).docx')

    await page.waitForTimeout(4000);

    //Remove Files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([])

    expect (await page.locator("ul[id='fileList'] li")).toHaveText('No Files Selected')



    await page.waitForTimeout(4000);


})


