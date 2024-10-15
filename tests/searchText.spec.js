import { test, expect, Page } from '@playwright/test';

test('able to go to search for ps5 items', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    await acceptCookiesPopup(page);

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.getByTestId('header-search__input');
    //wpisanie tekstu do search bar
    await searchBar?.fill('Ps5');

    // Znajdź przycisk wyszukaj za pomocą pełnego selektora
    const searchButton = await page.getByTestId('header-search-submit__button');

    // Kliknij przycisk wyszukaj !!!! psuje test błąd lokatora??
    await searchButton?.click();

    // find header text and assert it has correct text
    expect(page.getByTestId('mlc-listing-title')).toHaveText('Szukasz Ps5')
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