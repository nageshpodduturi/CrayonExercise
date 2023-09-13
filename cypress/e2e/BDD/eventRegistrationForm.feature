Feature: E2E Testing of registering for an event 
   
   Scenario: Submitting the filled form for the event 
   Given I navigate to the homepage of the event
   When I navigate to the Personal Information page 
   Then I should not be able to navigate to the Event Information page when a validation error is displayed on the Personal Information page
   Then I should be able to navigate to the Event Information page when the valid data is entered for the relevant fields on the Personal Information page 
   Then I should not be able to submit the form when a validation error is displayed on the Event Information page 
   Then I should be able to submit the form when the valid data is entered for the relevant fields on the Event Information page 
