/// <reference types="cypress" />

it('gets the last element', () => {
  cy.visit('cypress/prices-list.html')
  cy.get('#prices li').last().should('contain', 'Potatoes')
})
