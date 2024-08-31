import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://allegrolokalnie.pl/');
  await page.goto('https://allegrolokalnie.pl/oferty/q/telewizor%2075');
  await page.getByLabel('Sortuj od:najnowszychnajtań').selectOption('price-asc');
});