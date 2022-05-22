import { Selector, t } from 'testcafe';

class Cart {
    constructor() {
        this.yourCartTitle = Selector('.title').withText(/your cart/i);
        // Items lists
        this.itemNameList = Selector('.inventory_item_name');
        this.itemPriceList = Selector('.inventory_item_price');
        this.removeButtonList = Selector('div.item_pricebar button').withText(/Remove/i);
        // Buttons
        this.checkoutButton = Selector('#checkout');
        this.continueShoppingButton = Selector('#continue-shopping');
    }

    async removeItem(index = 0) {
        let itemName = await this.itemNameList.nth(index).innerText;
        await t
            .click(this.removeButtonList.nth(index))
            .expect(this.itemNameList.withText(itemName).exists).notOk();
    }

    async removeMultipleItems(numberOfItems) {
        for (let i = 0; i < numberOfItems; i++) {
            await this.removeItem();
        }
    }
}

export default new Cart();