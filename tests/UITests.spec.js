const {test, expect} = require('@playwright/test');


test('Browser context Playwright test', async ({page}) =>

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

} );

import { test, expect } from '@playwright/test';

test.only("UI controls", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const dropdown = page.locator('select.form-control');
    const documentLink = page.locator("a[href*='documents-request']");

    await dropdown.selectOption('consult');

    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    
    console.log(await page.locator('.radiotextsty').last().isChecked());
    await expect(page.locator('.radiotextsty').last()).toBeChecked();

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});


