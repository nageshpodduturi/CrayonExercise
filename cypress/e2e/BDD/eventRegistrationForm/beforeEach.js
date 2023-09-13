beforeEach(()=> {
    cy.fixture("testData").then(function(data)
    {
        this.data=data;
    })
})