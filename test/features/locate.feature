Feature: Locating Yourself

    Background:
        Given I'm on the login page

    Scenario: Locate with the locating button
        When I locate myself 
        Then I land on the resturants page