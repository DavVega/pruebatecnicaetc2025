import { test } from '@playwright/test';
import { NetflixLoginPage } from './../../Model/pages/Login/NetflixLoginPage';

test('Login y navegación en Netflix (POM)', async ({ page }) => {
  const netflix = new NetflixLoginPage(page);

  await netflix.goToLogin();
  await netflix.login('test@gmail.com', '12345');

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(3000);
  await page.keyboard.press('PageDown');
  await page.waitForTimeout(2000);

  console.log('URL actual:', page.url());

  const titles = await page.$$eval('.title-card-container .fallback-text', els =>
    els.map(el => el.textContent).slice(0, 3)
  );

  console.log('Películas de suspenso:');
  titles.forEach((t, i) => console.log(`${i + 1}. ${t}`));
});