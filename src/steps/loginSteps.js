const SignInPage = require('../pageObjects/SignInPage');

module.exports = function loginSteps() {
    let signInPage;
    let invocesPage;
    this.Given(
        /^I open the (url|site) "([^"]*)?"$/,
        (type, url) => {
            browser.url(url);
            signInPage = new SignInPage();
        });

    this.Then(
        /^I expect to land on sign in page/,
        () => {
            signInPage.getHeaderText().should.be.equal('Sign in');
        });

    this.When(
        /^Enter login "([^"]*)" and password "([^"]*)"/,
        (login, password) => {
            invocesPage = signInPage.sginIn(login, password);
        });

    this.Then(
        /^I expect to land on invoces page/,
        () => {
            invocesPage.getHeaderText().should.be.equal('Invoices');
        });

    this.After(() => {
        browser.deleteCookie();
    });
};
