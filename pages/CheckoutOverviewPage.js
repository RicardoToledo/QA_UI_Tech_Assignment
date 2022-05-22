import { Selector, t } from 'testcafe';
import cart from './CartPage';
import finish from '../pages/FinishPage';

class CheckoutOverview {
    constructor() {
        this.checkoutOverviewTitle = Selector('.title').withText(/Checkout: Overview/i)
        this.itemNameList = Selector('.inventory_item_name');
        this.finishButton = Selector('#finish')
    }

    async verifyItems(numberOfItems) {
        await t.expect(this.checkoutOverviewTitle.exists).ok();
        for (let i = 0; i < numberOfItems; i++) {
            let itemName = await cart.itemNameList.nth(i).innerText;
            await t.expect(this.itemNameList.withText(itemName).exists).ok();
        }
    }

    async finishOrder() {
        await t
            .click(this.finishButton)
            .expect(finish.checkoutCompleteTitle.exists).ok()
            .expect(finish.orderFinishedMessage.exists).ok()
            .expect(finish.orderFinishedImage.exists).ok();
    }
}

export default new CheckoutOverview();