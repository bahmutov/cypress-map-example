/// <reference types="cypress" />

it('gets the last element', () => {
  cy.visit('cypress/prices-list.html')
  cy.get('#prices li')
    .should('have.length', 3)
    .last()
    .should('contain', 'Potatoes')
})
