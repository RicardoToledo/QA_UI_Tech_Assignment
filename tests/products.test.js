import products from '../pages/ProductsPage';
import login from '../pages/LoginPage';
import { URL, CREDENTIALS } from '../data/constants';
import { generateRandomNumber } from '../helpers/utils';

fixture `Verify the Products page functionality and capabilities:`
    .page `${URL.PRODUCTION}`
    .beforeEach(async () => {
        await login.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
    });

test('TC3 - Logout from product\'s page', async () => {
    await products.logout();
});

test('TC4 - Add a single random item to the shopping cart', async t => {
    const randomIndex = generateRandomNumber(await products.addToCartButtonList.count);
    await products.addItem(randomIndex);
});

test('TC5 - Add all displayed items to the shopping cart', async () => {
    let numberOfAllItems = await products.addToCartButtonList.count;
    await products.addMultipleItems(numberOfAllItems);
});