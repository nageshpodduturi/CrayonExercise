import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the homepage of the event", function() {
    // Visit the Event Information homepage and validating the event information 
    cy.visit(this.data.url);
    cy.get(".OIC90c").should("have.text", "Event Timing: August 15th-18th, 2023Event Address: 123 Your Street Your City, ST 12345Contact us at (123) 456-7890 or no_reply@example.com");
})

When("I navigate to the Personal Information page", () => {
    // Navigating to the Personal Information page  
    cy.get('.Fxmcue').contains("Next").click();
})

Then("I should not be able to navigate to the Event Information page when a validation error is displayed on the Personal Information page", function() {
    // Entering data for name, gender, date of birth and organization
    cy.get('input[type="text"]').eq(0).type(this.data.name);
    cy.get('[data-value="Male"]').click();
    cy.get('input[type="date"]').type("1983-05-03");
    cy.get('textarea.tL9Q4c').type(this.data.organization);

    // Validating the error message for the required fields 
    cy.get('.Fxmcue').contains("Next").click();
    cy.get(".RHiWt").should("have.text", "This is a required question");

    // Entering invalid email and validating the error message 
    cy.get('input[type="email"]').type("nageshpreddy");
    cy.get('.Fxmcue').contains("Next").click();
    cy.get(".RHiWt").should("have.text", "Must be a valid email address");
})

Then("I should be able to navigate to the Event Information page when the valid data is entered for the relevant fields on the Personal Information page", function () {
    // Enter valid email address and navigate to the Event Information page 
    cy.get('input[type="email"]').clear().type(this.data.email);
    cy.get('.Fxmcue').contains("Next").click();
})

Then("I should not be able to submit the form when a validation error is displayed on the Event Information page", () => {
    cy.get('[data-value="Monday"]').click();
    // Enter Invalid time and validating the error message 
    cy.get('input[max="23"]').eq(0).type("24");
    cy.get('input[max="59"]').eq(0).type("30");
    cy.get(".RHiWt").should("have.text", "Invalid time");

    // Updating the time 
    cy.get('input[max="23"]').eq(0).clear().type("09");
    cy.get('input[max="59"]').eq(0).clear().type("30");
    cy.get('input[max="23"]').eq(1).type("12");
    cy.get('input[max="59"]').eq(1).type("30");

    // Updaint the dietary requirement 
    cy.get('div[role="listbox"]').click();
    cy.get(".OA0qNb div div").next().contains("Vegan").click();

    // Clicking the submit button and validating the error for the required fields
    cy.get('span.Fxmcue').contains("Submit").click();
    cy.get(".RHiWt").should("have.text", "This is a required question");
})

Then("I should be able to submit the form when the valid data is entered for the relevant fields on the Event Information page", () => {
    // Sumitting the form
    cy.get('div[role="checkbox"]').click();
    cy.wait(3000);
    cy.get('span.Fxmcue').contains("Submit").click({ force: true });

    // Validating the message after submitting the form
    cy.get('.vHW8K').should("have.text", "We have received your registration.Insert other information here.Save the link below, which can be used to edit your registration up until the registration closing date.");
})

