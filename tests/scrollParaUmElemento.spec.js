// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso @screenshotTestTag', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');

  const button = await page.getByRole('button', { name: 'Send Mail' });
  const text = await page.waitForSelector('text=NEWSLETTER');

  await text.scrollIntoViewIfNeeded();
  await button.scrollIntoViewIfNeeded();
});
