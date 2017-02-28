Feature: Login to the system
    As a user
    I want to be able to Login

    Scenario: I land to login page
        Given I open the url "/"
        Then I expect to land on sign in page
