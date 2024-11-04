// Importowanie modułu Playwright
import {expect, test} from '@playwright/test';

// Definiowanie testu
test('przejście do kategorii fotografia na stronie allegrolokalnie', async ({page}) => {
    // Otwieranie strony allegrolokalnie
    await page.goto('https://allegrolokalnie.pl/');

    await acceptCookiesPopup(page);

    // Poprawnie szuka się po tekście za pomocą metody getByText().
    // Jako że elementów z taką frazą jest więcej, musimy spróbować inaczej, na przykład doprecyzowując ze chodzi nam tylko o linki:
    // Klikanie na przycisk "Elektronika" TIMEOUT NA KLIKNIECIU???
    await page.getByRole('link', {name: 'Elektronika'}).click();

    // Klikanie na kategorię "Fotografia"
    await page.getByRole('link', {name: 'Fotografia'}).click();

    // Sprawdzanie, czy strona zawiera tytuł "Fotografia"
    await expect(page).toHaveTitle('Fotografia - aparaty i akcesoria fotograficzne - Allegro Lokalnie');

    // Sprawdzanie, czy strona zawiera tekst "Ogłoszenia lokalne z kategorii Fotografia"
    await expect(page.locator('h1')).toHaveText('Fotografia');
});

const acceptCookiesPopup = async (page) => {
    //Poczekaj na button az się właduje z popupem, max 2sek, jak nie ma go to nie czekaj idź dalej
    try {
        const acceptButton = page.getByTestId('accept_home_view_action');
        await acceptButton.waitFor({timeout: 3000});
        //Znajdz przycisk ok zgód

        await acceptButton.click();
    } catch (e) {
        console.log('waiting for popup timeout');
    }
};