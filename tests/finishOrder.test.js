import { CREDENTIALS, URL, USER_DATA } from '../data/constants';
import login from '../pages/LoginPage';
import products from '../pages/ProductsPage';;
import checkoutYourInfo from '../pages/CheckoutYourInfoPage';
import checkoutOverview from '../pages/CheckoutOverviewPage';

fixture `Verify the correct completion of the order on Checkout:`
    .page `${URL.PRODUCTION}`
    .beforeEach(async t => {
        await login.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        t.ctx.numberOfAllItems = await products.addToCartButtonList.count;
        await products.addMultipleItems(t.ctx.numberOfAllItems);
        await checkoutYourInfo.fillUser(USER_DATA.NAME.FIRST_NAME, USER_DATA.NAME.LAST_NAME, USER_DATA.ADDRESS.POSTAL_CODE);
    });

test('TC10 - Finish an order with all items', async t => {
    await checkoutOverview.verifyItems(t.ctx.numberOfAllItems);
    await checkoutOverview.finishOrder();
});