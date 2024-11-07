describe('Sample Tests', () => {
  xit('loads the homepage', () => {
    cy.visit('/')
    cy.waitForPageLoad();
    cy.title().should('eq', 'Global Encounters');
    cy.get('div h2').contains('Global Encounters');
  })

  it('can login', () => {
    cy.visit('/')
    cy.waitForPageLoad();
    cy.title().should('eq', 'Global Encounters');
    cy.get('button[id="@@header-btn-login"]').should('be.visible').click();
    cy.get('#signIn_inputEmail').type('geigaf@klubsoft.com');
    cy.get('#signIn_inputPassword').type('123456');
    cy.get('.custom-btn').click();
    cy.get('#header-btn-orgListingBtn1 > span').should('be.visible');
    cy.wait(50000)
  })
})
