// techniques demonstrated:
// select rows, column and cells
// note: to find expected values, set up test case and then see what the failure message is
// once a test case fails, click on error and the css selection is pasted to browser console for debugging
describe ('My test for phptravls', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('Table', () => {
    cy.visit ('/');  // visit '/' that is defined in cypress.json in project root
    cy.contains('Table').click();  // find first element containing 'Input Forms' and click
    cy.get('.open > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click()
    cy.get('.content').find('th').its('length').should('eq', 7)
    cy.get('.content').find('td').should('have.length', 91)  // 13 total rows times 7 columns each
    cy.get('.content').find('tr:visible').should('have.length', 6)  // 5 visible rows plus a header row also has tr
    cy.get('.content').find('tr').should('have.length', 14)  // 35 cell, 5 rows (header row doesn't count) with 7 columns

  });

});