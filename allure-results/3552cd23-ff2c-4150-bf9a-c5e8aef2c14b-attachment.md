# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Reporter.spec.js >> Test2
- Location: tests\Reporter.spec.js:8:1

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Your"
Received: "Just a moment..."
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Just a moment..."

```

```yaml
- main:
  - heading "demo.opencart.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: 9ff1978b2e8de0d2
  - text: Performance and Security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=j
  - link "Privacy":
    - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | test('Test1', async({page})=>{
  3  | 
  4  |     await page.goto('https://www.demoblaze.com/');
  5  |     await expect(page).toHaveTitle('STORE');
  6  | })
  7  | 
  8  | test('Test2', async({page})=>{
  9  | 
  10 |     await page.goto('https://demo.opencart.com/');
  11 |     await page.waitForTimeout(3000);
> 12 |     await expect(page).toHaveTitle('Your');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  13 | })
```