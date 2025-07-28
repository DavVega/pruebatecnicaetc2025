import { test, devices } from '@playwright/test';
import { GmailLoginPage } from './../../Model/pages/Login/GmailLoginPage';

const pixel = devices['Pixel 5'];
test.use({ ...pixel });

test('Login en Gmail (POM)', async ({ page }) => {
  const gmail = new GmailLoginPage(page);

  await gmail.goToLogin();
  await gmail.login('pruebaetcpruebaetc@gmail.com', 'pruebaETC20250728');

  await page.waitForSelector('h1'); 
  console.log('Login exitoso en Gmail.');
});