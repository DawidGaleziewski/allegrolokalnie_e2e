// Importowanie modułu Playwright
import { test, expect } from '@playwright/test';

// Definiowanie testu
test('przejście do kategorii fotografia na stronie allegrolokalnie', async ({ page }) => {
  // Otwieranie strony allegrolokalnie
  await page.goto('https://allegrolokalnie.pl/');

  await acceptCookiesPopup(page);

  // Klikanie na przycisk "Elektronika"
  await page.click('text=Elektronika');

  // Klikanie na kategorię "Fotografia"
  await page.click('text=Fotografia');

  // Sprawdzanie, czy strona zawiera tytuł "Fotografia"
  await expect(page).toHaveTitle('Fotografia');

  // Sprawdzanie, czy strona zawiera tekst "Ogłoszenia lokalne z kategorii Fotografia"
  await expect(page).toHaveText('h1', 'Ogłoszenia lokalne z kategorii Fotografia');
});

const acceptCookiesPopup = async (page) => {
    //Poczekaj na button az się właduje z popupem, max 2sek, jak nie ma go to nie czekaj idź dalej
    try {
        const acceptButton = page.getByTestId('accept_home_view_action');
        await acceptButton.waitFor({timeout: 3000})
        //Znajdz przycisk ok zgód
    
        await acceptButton.click();
    } catch(e){
        console.log('waiting for popup timeout')
    }
}