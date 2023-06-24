Feature: Select food

    Background: 
        Given I'm on the resturants page
    
    Scenario: Select food and show resturants
        When I select a food
        Then I get the resturants