// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  geolocation: { longitude: -21.783436035241202, latitude: -43.3152157184715 },
  permissions: ['geolocation'],
});

test('Valida localização', async ({ page }) => {
  await page.goto('https://www.invertexto.com/minha-localizacao-atual');

  await expect(
    page.getByRole('heading', { name: 'Minha Localização Atual' }),
  ).toBeVisible();
  await expect(page.getByRole('cell', { name: '-43.315216' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '-21.783436' })).toBeVisible();
});
