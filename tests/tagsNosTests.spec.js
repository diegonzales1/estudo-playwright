// @ts-check
import { test, expect } from '@playwright/test';

// Para rodar apenas os testes com a tag @screenshotTestTag, utilize o comando: npx playwright test --grep @screenshotTestTag

test.use({
  geolocation: { longitude: -21.783436035241202, latitude: -43.3152157184715 },
  permissions: ['geolocation'],
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.invertexto.com/minha-localizacao-atual');
});

test('Screenshot simples @screenshotTestTag', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Minha Localização Atual' }),
  ).toBeVisible();
  await page.screenshot({ path: 'screenshot/screenshot-simples.png' });
});

test('Screenshot da tela inteira', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Minha Localização Atual' }),
  ).toBeVisible();
  await page.screenshot({
    path: 'screenshot/screenshot-tela-inteira.png',
    fullPage: true,
  });
});

test('Screenshot de um determinado elemento @screenshotTestTag', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Minha Localização Atual' }),
  ).toBeVisible();

  const elemento = page.getByRole('heading', {
    name: 'Minha Localização Atual',
  });
  await elemento.screenshot({ path: 'screenshot/screenshot-elemento.png' });
});
