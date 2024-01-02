import { test, expect } from '@playwright/test';

test.only('placeholder in input still says "czego szukasz?"', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.$('#suggests-search');

    // Sprawdź, czy search bar został znaleziony
    expect(searchBar).toBeTruthy();

    //wpisanie tekstu do search bar
    await searchBar.fill('Ps5');

    // Znajdź przycisk wyszukaj za pomocą pełnego selektora
    const searchButton = await page.$('#masthead > div > div.mlc-masthead__search > div > form > div > div.mlc-search-form__city-wrapper > button > svg');

    // Sprawdź, czy przycisk wyszukaj został znaleziony
    expect(searchButton).toBeTruthy();

    // Kliknij przycisk wyszukaj
    await searchButton.click();
});