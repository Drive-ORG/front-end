describe('sign in', () => {
  beforeEach(() => {
    cy.visit('/sign-in');
  });

  it('username field exists', () => {
    cy.get('[data-testid="cypress-sign-in-username-field"]').should('exist');
  });
  it('password field exists', () => {
    cy.get('[data-testid="cypress-sign-in-password-field"]').should('exist');
  });
  it('submit button exists', () => {
    cy.get('[data-testid="cypress-sign-in-button"]').should('exist');
  });
  it('logins successfully', () => {
    cy.login('alireza', '1');
    cy.url().should('include', '/files');
  });
});
