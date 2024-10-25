import { test, expect } from '@playwright/test';

test('able to go to search for ps5 items', async ({ page }) => {
    // Przejdź do strony Allegro Lokalnie
    await page.goto('https://allegrolokalnie.pl');

    await acceptCookiesPopup(page);

    // Znajdź search bar za pomocą selektora id
    const searchBar = await page.getByTestId('header-search__input');
    //wpisanie tekstu do search bar
    await searchBar?.fill('Ps5');

    // Tu znajduje dwa elementy pod podanym lokatorem, dlatego trzeba doprecyzować.
    // Element form ma w sobie dwa takie przyciski, ale tylko jeden jest jego bezpośrednim potomkiem, więc można użyć takiego selektora css:
    // Znajdź przycisk wyszukaj za pomocą pełnego selektora
    const searchButton = await page.locator('.mlc-search-form > button');

    // Kliknij przycisk wyszukaj !!!! psuje test błąd lokatora??
    await searchButton?.click();

    // find header text and assert it has correct text
    await expect(page.getByTestId('mlc-listing-title')).toHaveText('Szukasz Ps5')
});

// Dobrą praktyką jest wyciąganie powtarzających się bloków kodu do zewnętrznej klasy, na przykład BaseSteps
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