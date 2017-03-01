Feature: Login to the system
    As a user
    I want to be able to Login

    Scenario: Anonymous user goes to sign in page and land to login page
        Given I open the url "/users/sign_in"
        Then I expect to land on sign in page

    Scenario: Anonymous user goes invoices in page and land to login page
        Given I open the url "/invoices"
        Then I expect to land on sign in page

    Scenario: Anonymous user goes clients in page and land to login page
        Given I open the url "/clients"
        Then I expect to land on sign in page

    Scenario: Anonymous user goes invoice in page and land to login page
        Given I open the url "/invoices/7"
        Then I expect to land on sign in page

    Scenario: Anonymous redirected to invoices after login
        Given I open the url "/users/sign_in"
        And Enter login "IrinaAbdriaevaMailForTests@gmail.com" and password "JNaO8NBlyOZrepf14tgG"
        Then I expect to land on invoces page
