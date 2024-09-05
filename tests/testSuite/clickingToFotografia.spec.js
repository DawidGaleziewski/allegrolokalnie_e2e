// Importowanie modułu Playwright
import { test, expect } from '@playwright/test';

// Definiowanie testu
test('przejście do kategorii fotografia na stronie allegrolokalnie', async ({ page }) => {
  // Otwieranie strony allegrolokalnie
  await page.goto('https://allegrolokalnie.pl/');

  await acceptCookiesPopup(page);

    // Klikanie na przycisk "Elektronika"
    await page.getByRole('link', { name: 'Elektronika' }).click();

    // Klikanie na kategorię "Fotografia"
    await page.getByTestId('category-list').getByText('Fotografia').click();

    // Klikanie na kategorię "Akcesoria fotograficzne"
    await page.getByTestId('category-list').getByText('Akcesoria fotograficzne').click();

    // Sortowanie w kategorii "Akcesoria fotograficzne"
    await page.getByLabel('Sortuj od:najnowszychnajtań').selectOption('price-desc');

    // Powrot do kategorii "Fotografia"
    await page.goto('https://allegrolokalnie.pl/oferty/fotografia/akcesoria-fotograficzne');
    await page.goto('https://allegrolokalnie.pl/oferty/elektronika/fotografia');

    //Sprawdzenie czy akcesorii fotograficznych jest wiecej niz 5000
    const accessoriesCountElement = await page.locator('//categories__category__counter"]').first();
    const accessoriesCount = parseInt(await accessoriesCountElement.textContent());
    expect(accessoriesCount).toBeGreaterThan(5000);

    // jesli jest wiecej pozycji niz 50 to wroc na strone elektronika
    if(accessoriesCount > 50){
        await page.goto('https://allegrolokalnie.pl/oferty/elektronika/fotografia-8845');
    }
  


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
