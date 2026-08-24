const {test, expect} = require('@playwright/test');



test('Get first product',async ({page}) => {


    const CardTitles= page.locator('.card-body b');
    

    const product= page.locator('.card body n');

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').fill('niyatikashyap33@gmail.com');
    await page.locator('#userPassword').fill('Shivamybestie@17');
    await page.locator('.btn.btn-block.login-btn').click();

    await page.waitForLoadState('networkidle');
    console.log(await CardTitles.first().textContent());

    
} );