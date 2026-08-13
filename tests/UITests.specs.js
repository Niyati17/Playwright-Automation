const {test, expect} = require('@playwright/test');

test ('Launch Google Test' , async ({ page }) => {

    await page.goto('https://www.google.com');
   
    console.log('Google launched', await page.title());
    await expect(page).toHaveTitle(/Google/);
}
);
