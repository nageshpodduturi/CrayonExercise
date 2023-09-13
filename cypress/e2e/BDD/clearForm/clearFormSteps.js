import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the event home page", () => {
    // Visit the Event Information homepage and validating the event information 
    cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0");
    cy.get(".OIC90c").should("have.text", "Event Timing: August 15th-18th, 2023Event Address: 123 Your Street Your City, ST 12345Contact us at (123) 456-7890 or no_reply@example.com");

})

When("I navigate to the Personal Information page and enter the data for the relevant fields", function() {
    cy.get('.Fxmcue').contains("Next").click();
    // Entering the data for the relevant fields 
    cy.get('input[type="text"]').eq(0).type("Sam");
    cy.get('[data-value="Male"]').click();
    cy.get('input[type="date"]').type("1983-05-03");
    cy.get('input[type="email"]').clear().type("Sam@hotmail.com");
    cy.get('textarea.tL9Q4c').type("Crayon");
    
})

Then("I click on the clear form button then the data should be deleted and navigated to the home page", () => {
    // Clicking on the Clear form button 
    cy.get('.Fxmcue').contains("Clear form").click();
    cy.on("window:alert",(str)=>{
        expect(str).to.equal("This will remove your answers from all questions and cannot be undone.")
    });
    cy.get('.OE6hId > [data-id="EBS5u"] > .l4V7wb > .NPEfkd').click();
    cy.url("eq","https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0");
    cy.get(".OIC90c").should("have.text", "Event Timing: August 15th-18th, 2023Event Address: 123 Your Street Your City, ST 12345Contact us at (123) 456-7890 or no_reply@example.com");


})