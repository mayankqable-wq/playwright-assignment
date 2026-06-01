const {test, expect} = require('@playwright/test')
test('AutoSuggest', async ({page})=> {
  await page.goto('https://www.redbus.in/');

  await page.getByRole('combobox', { name: 'From' }).fill('Dehli');

  // wait for suggestions
  const options = page.locator('//div[@role="option"]');

  await options.first().waitFor();

  const count = await options.count();

  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();
    console.log(text);
  }
});