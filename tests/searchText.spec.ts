import { test, expect } from '@playwright/test';

test.only('placeholder in input still says "czego szukasz?"', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    // Oczekiwanie na pojawienie się popup zgody
    const popupPromise = page.waitForSelector('[data-testid="accept_home_view_action"]');
    const popup = await popupPromise;

    // Jeśli popup pojawia się, kliknij przycisk zgody
    if (popup) {
        const acceptButton = await page.$('[data-testid="accept_home_view_action"]');
        await acceptButton.click();
    }

    // Oczekiwanie na pojawienie się search bar
    const searchBar = await page.waitForSelector('#suggests-search');

    // Sprawdź, czy search bar został znaleziony
    expect(searchBar).toBeTruthy();

    // Wpisanie tekstu do search bar i naciśnięcie klawisza Enter
    await searchBar.fill('Ps5');
    await searchBar.press('Enter');

    // Oczekiwanie na zakończenie aktywności sieciowej
    await page.waitForLoadState('networkidle');

    // Oczekiwanie na widoczność wyników wyszukiwania
    const searchResults = await page.waitForSelector('[data-testid="search-results"]');
    expect(searchResults).toBeTruthy();
});
