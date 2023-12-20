import { test, expect } from '@playwright/test';

test('placeholder in input still says "czego szukasz"', async ({ page }) => {
    // 0 run the tests with npx playrigtht test
    await page.goto('https://allegrolokalnie.pl');
    // 1 use locator to find the search input
    const searchBar = undefined;
    // 2 get the placeholder value of that element as a string
    // 3 put it in this variable
    const textString = undefined;
    expect(textString).toBe("czego szukasz?")
})