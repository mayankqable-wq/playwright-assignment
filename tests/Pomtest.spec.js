const{test, expect} = require('@playwright/test')
import{LoginPage} from '../page/LoginPage';

test('test', async({page})=>{

//Login
const login = new LoginPage(page);
await login.gotoLoginpage();
await login.login('pavonol','test@123')
await page.waitForTimeout(3000);



});