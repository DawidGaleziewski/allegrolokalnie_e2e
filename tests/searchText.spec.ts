import { test, expect } from '@playwright/test';

test.only('able to go to search for ps5 items', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    //Klikniecie pop up - zgody
    const popupPromise = await page.waitForSelector('[data-testid="accept_home_view_action"]' ,{ timeout: 1000 });
    //Znajdz przycisk ok zgód
    const acceptButton = await page.getByTestId('accept_home_view_action');
    await acceptButton?.click();

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.$('#suggests-search');
    //wpisanie tekstu do search bar
    await searchBar?.fill('Ps5');

    // Znajdź przycisk wyszukaj za pomocą pełnego selektora
    const searchButton = await page.getByTestId('header-search-submit__button');

    // Kliknij przycisk wyszukaj !!!! psuje test
    await searchButton?.click();

    // find header text

    expect(page.getByTestId('mlc-listing-title')).toHaveText('Szukasz Ps5')
});