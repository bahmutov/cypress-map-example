/// <reference types="cypress" />

// import cypress-map plugin
import 'cypress-map'

it('checks the exact match items', () => {
  cy.visit('cypress/prices-list.html')
  // confirm the LI elements have text
  // ['Oranges $0.99', 'Mango $1.01', 'Potatoes $0.20']
  // Tip: use the "should read" assertion from the cypress-map plugin
  cy.get('li').should('read', [
    'Oranges $0.99',
    'Mango $1.01',
    'Potatoes $0.20',
  ])
})

it('check each item against a regular expression', () => {
  cy.visit('cypress/prices-list.html')
  // confirm each LI item has text with a word plus a price like "$0.99"
  // Tip: use a regular expression to match the text
  // and the "should read" assertion from the cypress-map plugin
  const nameWithPrice = /^\w+ \$\d+\.\d{2}$/
  cy.get('li').should('read', [nameWithPrice, nameWithPrice, nameWithPrice])
})

it('checks a single element', () => {
  cy.visit('cypress/prices-list.html')
  cy.get('li:eq(1)').should('read', 'Mango $1.01')
})

it('checks a single element using a regex', () => {
  cy.visit('cypress/prices-list.html')
  cy.get('li')
    .first()
    .should('read', /^Oranges \$\d.\d{2}$/)
})

it.only('check items using a mixture', () => {
  cy.visit('cypress/prices-list.html')
  const nameWithPrice = /^\w+ \$\d+\.\d{2}$/
  cy.get('li').should('read', ['Oranges $0.99', nameWithPrice, nameWithPrice])
})
