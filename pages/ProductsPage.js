import { Selector, t } from 'testcafe';
import cart from './CartPage';
import login from './LoginPage';

class Products {
    constructor() {
        this.productsTitle = Selector('.title').withText(/Products/i);
        this.menuButton = Selector('#react-burger-menu-btn');
        this.logoutSidebarLink = Selector('#logout_sidebar_link');
        this.shoppingCartLink = Selector('.shopping_cart_link');
        this.cartCounterIcon = Selector('.shopping_cart_badge');
        // Items lists
        this.itemNameList = Selector('.inventory_item_name');
        this.itemPriceList = Selector('.inventory_item_price');
        this.addToCartButtonList = Selector('div.pricebar button');
        this.cartCounter = 0;
    }

    async logout() {
        await t
            .click(this.menuButton)
            .click(this.logoutSidebarLink)
            .expect(login.loginButton.exists).ok();
    }

    async navigateToShoppingCart() {
        await t
            .click(this.shoppingCartLink)
            .expect(cart.yourCartTitle.exists).ok();
    }

    async addItem(index) {
        let itemName = await this.itemNameList.nth(index).innerText;
        let itemPrice = await this.itemPriceList.nth(index).innerText;
        await t.click(this.addToCartButtonList.nth(index));
        this.cartCounter++;
        await t.expect(this.cartCounterIcon.innerText).eql(this.cartCounter.toString());
        await this.navigateToShoppingCart();
        await t
            .expect(cart.itemNameList.withText(itemName).exists).ok()
            .expect(cart.itemPriceList.withText(itemPrice).exists).ok()
            .click(cart.continueShoppingButton);
    }

    async addMultipleItems(numberOfItems) {
        this.cartCounter = 0;
        for (let i = 0; i < numberOfItems; i++) {
            await this.addItem(i);
        }
        this.cartCounter = 0;
        await this.navigateToShoppingCart();
    }

    /**
     * As good practice we could have a function
     * to clean after each test but with this particular
     * website it wouldn't make sense
     */
    // async cleanTestSession() {
    //     await resetApp(); // TODO: A function to reset app state
    //     await this.logout();
    // }
}

export default new Products();