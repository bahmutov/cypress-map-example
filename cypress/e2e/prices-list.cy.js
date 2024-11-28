/// <reference types="cypress" />

// import cypress-map plugin

it('checks the exact match items', () => {
  cy.visit('cypress/prices-list.html')
  // confirm the LI elements have text
  // ['Oranges $0.99', 'Mango $1.01', 'Potatoes $0.20']
  // Tip: use the "should read" assertion from the cypress-map plugin
})

it('check each item against a regular expression', () => {
  cy.visit('cypress/prices-list.html')
  // confirm each LI item has text with a word plus a price like "$0.99"
  // Tip: use a regular expression to match the text
  // and the "should read" assertion from the cypress-map plugin
})
