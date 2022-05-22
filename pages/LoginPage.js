import { Selector, t } from 'testcafe'
import products from './ProductsPage'

class Login {
    constructor() {
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('#login-button');
        this.IncorrectLoginMessage = Selector('h3').withText(/Epic sadface: Username and password do not match/i);
    }

    async submitLogin(username, password) {
        await t
            .expect(this.loginButton.exists).ok()
            .typeText(this.usernameField, username, { paste: true })
            .typeText(this.passwordField, password, { paste: true })
            .click(this.loginButton);
        if (await products.productsTitle.exists)
            return true;
        else if (await this.IncorrectLoginMessage.exists)
            return false;
    }
}

export default new Login();