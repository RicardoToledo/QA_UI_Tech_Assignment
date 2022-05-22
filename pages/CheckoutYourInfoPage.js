import { Selector, t } from 'testcafe';
import cart from './CartPage';

class CheckoutYourInfo {
    constructor() {
        this.yourInformationTitle = Selector('.title').withText(/Checkout: Your Information/i);
        this.firstNameField = Selector('#first-name');
        this.lasttNameField = Selector('#last-name');
        this.postalCodeField = Selector('#postal-code');
        this.submitButton = Selector('#continue');
        this.missingPostalCodeErrorMessage = Selector('h3').withText(/Error: Postal Code is required/i);
    }

    async fillUser(firstName, lastName, postalCode) {
        await t
            .click(cart.checkoutButton)
            .expect(this.yourInformationTitle.exists).ok();
        if (firstName)
            await t.typeText(this.firstNameField, firstName, { paste: true });
        if (lastName)
            await t.typeText(this.lasttNameField, lastName, { paste: true });
        if (postalCode)
            await t.typeText(this.postalCodeField, postalCode, { paste: true });
        await t.click(this.submitButton);
    }
}

export default new CheckoutYourInfo();