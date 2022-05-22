import login from '../pages/LoginPage';
import products from '../pages/ProductsPage';
import cart from '../pages/CartPage';
import { URL, CREDENTIALS } from '../data/constants';
import { generateRandomNumber } from '../helpers/utils';

fixture `Verify the Shopping Cart functionality:`
    .page `${URL.PRODUCTION}`
    .beforeEach(async t => {
        await login.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        // Prerequisite: To have items to be removed,
        // therefore adding all items to the cart before each test
        t.ctx.numberOfAllItems = await products.addToCartButtonList.count;
        await products.addMultipleItems(t.ctx.numberOfAllItems);
    });

test('TC6 - Remove 1 random item from shopping cart', async t => {
    const randomIndex = generateRandomNumber(t.ctx.numberOfAllItems);
    await cart.removeItem(randomIndex);
});

test('TC7 - Remove all items from shopping cart', async t => {
    await cart.removeMultipleItems(t.ctx.numberOfAllItems);
});