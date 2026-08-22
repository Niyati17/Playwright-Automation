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


test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })
 