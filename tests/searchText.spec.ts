import { test, expect } from '@playwright/test';

test.only('placeholder in input still says "czego szukasz?"', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    //Klikniecie pop up - zgody

    const popupPromise = page.waitForSelector('[data-testid="accept_home_view_action"]');
    const popup = await popupPromise;
    //Znajdz przycisk ok zgód
    const acceptButton = await page.$('[data-testid="accept_home_view_action"]');
    
    await acceptButton.click();

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.$('#suggests-search');

    // Sprawdź, czy search bar został znaleziony
    expect(searchBar).toBeTruthy();

    //wpisanie tekstu do search bar
    await searchBar.fill('Ps5');

    // Znajdź przycisk wyszukaj za pomocą pełnego selektora
    const searchButton = await page.$('[data-testid="header-search-submit__button"]');

    // Sprawdź, czy przycisk wyszukaj został znaleziony
    expect(searchButton)?.toBeTruthy();

    // Kliknij przycisk wyszukaj !!!! psuje test
    await searchButton?.click();
    await page.keyboard.press('Enter');
   // await searchButton.click();
});