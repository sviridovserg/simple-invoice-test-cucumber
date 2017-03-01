class BasePage {
    getHeaderText() {
        return browser.element('.container h1').getText();
    }
}

module.exports = BasePage;