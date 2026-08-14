const {test, expect} = require('@playwright/test');


test.only('Browser context Playwright test', async ({page}) =>

{
const userName= page.locator('#username');
const SignIn= page.locator('#signInBtn');
const CardTitles= page.locator('.card-body a');


await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.locator('#username').type('rahulshetty');
await page.locator('#password').type('Learning@830$3mK2');
await page.locator('#signInBtn').click();

await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//console.log(await page.locator("[style*='block']").textContent());

await userName.fill("");
await userName.fill("rahulshettyacademy");
await SignIn.click();
console.log(await CardTitles.first().textContent());

const allTitles= await CardTitles.allTextContents();
console.log(allTitles);

}

);