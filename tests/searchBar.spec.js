import { test, expect } from '@playwright/test';

test('placeholder in input still says "czego szukasz?"', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie

    // SESSION-1: remeber if in doubt, if you should use 'await', hover your mouse on method (like goto()) and check if it returns :Promise
    await page.goto('https://allegrolokalnie.pl');

    // Znajdź search bar za pomocą selektora id
    // Składnia z '$' jest przestarzała, aktualnie lokatorów szuka się używając metod z interfejsu Page
    const searchBar = await page.getByTestId('header-search__input');

    // Sprawdź, czy search bar został znaleziony PSUJE SIĘ> to be truthy ??
    /**
     * toBeTruthy() na lokatorze zwróci true nawet jeśli element nie istnieje, ponieważ lokator to "adres",
     * pod którym szukamy elementu, któremu przypisaliśmy konkretną wartość.
     * To jeszcze nie oznacza że element istnieje, dlatego lepiej sprawdzać metodami łapiącymi faktyczny element
     */
    await expect(searchBar).toBeVisible();

    // Nie ma potrzeby wyciągać do zmiennej tekstu, który chcemy tylko walidować, można od razu zrobić asercję
    // Sprawdź, czy placeholder ma oczekiwaną wartość
    await expect(searchBar).toHaveAttribute('placeholder', 'czego szukasz?');

    //wpisanie tekstu do search bar
    

    //klikniecie wyszukaj
});
