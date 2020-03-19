// techniques demonstrated:
// select element by .contains (by link text), .get (by id), css (type is button)


describe ('My test for phptravls', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Input Forms', () => {
    cy.visit ('/');  // visit '/' that is defined in cypress.json in project root
    cy.contains('Input Forms').click();  // find first element containing text 'Input Forms' and click
    cy.contains('Simple Form Demo').click();
    cy.get('#user-message')  // find the element with id user-message
      .type('hello')
    cy.get('button').contains('Show Message').click()  // find button containing text 'Show Message' by css type .button

  });

});