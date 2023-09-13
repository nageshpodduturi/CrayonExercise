Feature: Clearing the form data

    Scenario: Clicking on the Clear form button after entering the data for the event 
    Given I navigate to the event home page
    When I navigate to the Personal Information page and enter the data for the relevant fields 
    Then I click on the clear form button then the data should be deleted and navigated to the home page
