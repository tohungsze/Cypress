describe ('My test for phptravls', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Input Forms', () => {
    cy.visit ('/');  // visit '/' that is defined in cypress.json in project root
    cy.contains('Input Forms').click();  // find first element containing 'Input Forms' and click
    cy.contains('Simple Form Demo').click();
    cy.get('#user-message')  // find the element with id user-message
      .type('hello') 
    cy.get('button').contains('Show Message').click()  // find button containing text 'Show Message'

  });

});