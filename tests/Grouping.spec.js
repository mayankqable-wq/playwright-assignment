const {test, expect} = require('@playwright/test')

test.beforeAll(async()=>{

    console.log('This is a beforeAll Hook....');
});

test.afterAll(async()=>{

    console.log('This is a afterAll Hook....');
});

test.beforeEach(async()=>{

    console.log('This is a beforeEach Hook....');
});

test.afterEach(async()=>{

    console.log('This is a afterEach Hook....');
});




//Describe Block
test.describe('Group1', ()=>{

    test('Test1', async({page})=>[

    console.log('This is my Test1....')
]);
test('Test2', async({page})=>[

    console.log('This is my Test2....')
]);

});


test.describe('Group2',()=>{

    test('Test3', async({page})=>[

    console.log('This is my Test3....')
])
test('Test4', async({page})=>[

    console.log('This is my Test4....')
])

})

