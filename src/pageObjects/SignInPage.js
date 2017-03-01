const BasePage = require('./BasePage');
const InvoicesPage = require('./InvoicesPage');

class SignInPage extends BasePage {
    getHeaderText() {
        return browser.element('.container h2').getText();
    }
    sginIn(login, password) {
        browser.element('.container #user_email').setValue(login);
        browser.element('.container #user_password').setValue(password);
        browser.element('.container input[value="Sign in"]').click();
        return new InvoicesPage();
    }
}

module.exports = SignInPage;