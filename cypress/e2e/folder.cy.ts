describe('signed-in user', () => {
  beforeEach(() => {
    cy.login('alireza', '1');
  });

  it('folder exist', () => {
    cy.get('[data-testid="cypress-folder-button-8"]').should('exist');
  });

  it('folder is opened correctly', () => {
    cy.get('[data-testid="cypress-folder-button-8"]').dblclick();
    cy.url().should('include', '/files/8');
  });
});
