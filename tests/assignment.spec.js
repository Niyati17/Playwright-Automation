const {test, expect} = require('@playwright/test');
test('Get first product',async ({page}) => {

    const CardTitles= page.locator('.card-body b');

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    await page.locator('#userEmail').type('niyatikashyap33@gmail.com');
    await page.locator('#userPassword').type('Shivamybestie@17');
    await page.locator('.btn.btn-block.login-btn').click();

    await page.waitForLoadState('networkidle');
    console.log(await CardTitles.first().textContent());

    
} );