const BasePage = require('./BasePage');
class InvoicesPage extends BasePage {
    getHeaderText() {
        return browser.element('.container h1').getText();
    }
}

module.exports = InvoicesPage;