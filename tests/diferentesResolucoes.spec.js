// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Testes em diferentes resoluções', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
  });

  // serve somente para esta suite de teste, ou seja, para este arquivo
  test.use({ viewport: { width: 1280, height: 720 } });

  test('Login com sucesso', async ({ page }) => {
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').click();
    await page.locator('#user').fill('teste@gmail.com');
    await page.locator('#password').click();
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();

    await page.getByRole('heading', { name: 'Login realizado' }).click();
    await page.getByText('Olá, teste@gmail.com').click();

    await page.getByRole('button', { name: 'OK' }).click();
  });
});
