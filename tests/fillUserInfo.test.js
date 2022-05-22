import login from '../pages/LoginPage';
import products from '../pages/ProductsPage';
import checkoutYourInfo from '../pages/CheckoutYourInfoPage';
import checkoutOverview from '../pages/CheckoutOverviewPage';
import { URL, CREDENTIALS, USER_DATA } from '../data/constants';

fixture `Verify the user\'s information filling functionality on Checkout:`
    .page `${URL.PRODUCTION}`
    .beforeEach(async () => {
        await login.submitLogin(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
        let numberOfAllItems = await products.addToCartButtonList.count;
        await products.addMultipleItems(numberOfAllItems);
    });

test('TC8 - Continue purchase with empty postal code field', async t => {
    await checkoutYourInfo.fillUser(USER_DATA.NAME.FIRST_NAME, USER_DATA.NAME.LAST_NAME);
    await t.expect(checkoutYourInfo.missingPostalCodeErrorMessage.exists).ok();
});

test('TC9 - Fill all user\'s information and continue purchase', async t => {
    await checkoutYourInfo.fillUser(USER_DATA.NAME.FIRST_NAME, USER_DATA.NAME.LAST_NAME, USER_DATA.ADDRESS.POSTAL_CODE);
    await t.expect(checkoutOverview.checkoutOverviewTitle.exists).ok();
});