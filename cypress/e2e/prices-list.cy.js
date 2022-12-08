/// <reference types="cypress" />

import 'cypress-map'

it('adds all prices together', () => {
  cy.visit('cypress/prices-list.html')
  cy.get('#total')
    .should('have.attr', 'data-total')
    .then(parseInt)
    .then((total) => {
      cy.get('#prices li')
        .mapInvoke('getAttribute', 'data-price')
        .map(parseInt)
        .tap()
        .reduce((sum, n) => sum + n)
        .should('equal', total)
    })
})
