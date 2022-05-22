import { Selector } from 'testcafe'

class Finish {
    constructor(){
        this.checkoutCompleteTitle = Selector('.title').withText(/Checkout: Complete!/i)
        this.orderFinishedMessage = Selector('.complete-text').withText(/Your order has been dispatched, and will arrive just as fast as the pony can get there!/i);
        this.orderFinishedImage = Selector('.pony_express');
    }
}

export default new Finish();