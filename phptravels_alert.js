// techniques demonstrated:
// handling drop down & popup
// force: true, wait and contains vs get
describe ('My test for phptravls', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Table', () => {
    cy.visit ('/');  // visit '/' that is defined in cypress.json in project root
    cy.contains('Alerts & Modals').click();  // find first element containing 'Alerts & Modals' and click
    cy.contains('Bootstrap Modals').click();  // find first element containing 'Bootstrap Modals' and click
    cy.get('[href="#myModal"]').click()     // cannot use contains here
    // cy.get('nav').contains('Sign Out').should('have.attr', 'href', '/signout') - this is an example from doc
    cy.get('[href="#myModal2"]').click();
    //cy.wait(2000);
    cy.contains('Save changes').click({ force: true });
    //cy.wait(2000);
  });

});