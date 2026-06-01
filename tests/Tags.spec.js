const {test, expect} = require('@playwright/test')

test ('Test01@sanity', async({page})=>{

    console.log('This is my Test01...')

})

test ('Test02@sanity', async({page})=>{

    console.log('This is my Test02...')

})

test ('Test03@reg', async({page})=>{

    console.log('This is my Test03...')

})

test ('Test04@reg', async({page})=>{

    console.log('This is my Test04...')

})

test ('Test05@sanity@reg', async({page})=>{

    console.log('This is my Test05...')

})