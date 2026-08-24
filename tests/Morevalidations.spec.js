const {test}= require ('@playwright/test') ;

test ('more validations', async ({page}) =>


    {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.locator('google.com')
await page.goBack();
await page.goForward();



    }
)
