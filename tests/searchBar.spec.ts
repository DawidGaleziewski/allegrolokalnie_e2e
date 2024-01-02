import { test, expect } from '@playwright/test';

test('placeholder in input still says "czego szukasz?"', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.$('#suggests-search');

    // Sprawdź, czy search bar został znaleziony
    expect(searchBar).toBeTruthy();

    // Pobierz wartość atrybutu placeholder
    const placeholderValue = await searchBar.getAttribute('placeholder');

    // Sprawdź, czy placeholder ma oczekiwaną wartość
    expect(placeholderValue).toBe('czego szukasz?');

    //wpisać hasło do wyszukiwania i znaleźć coś
});
