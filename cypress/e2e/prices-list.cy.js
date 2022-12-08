/// <reference types="cypress" />

// import cypress-map plugin
import 'cypress-map'

it('has the last item', () => {
  cy.visit('cypress/prices-list.html')
  // confirm the last item in the list has HTML
  // attribute "data-price=20"
  cy.get('#prices li').should('have.attr', 'data-price', '20')
})

it('shows the expected items', () => {
  cy.visit('cypress/prices-list.html')
  // get the list of prices LI elements
  // from each item extract the inner text
  // and the list of strings should equal
  // ['Oranges $0.99', 'Mango $1.01', 'Potatoes $0.20']
  // Tip: you are mapping the list of DOM elements
  // into a list of strings; each item => item.innerText
  cy.get('#prices li')
    .map('innerText')
    .should('deep.equal', ['Oranges $0.99', 'Mango $1.01', 'Potatoes $0.20'])
})

it('shows the expected items: bonus', () => {
  // this test works in all Cypress versions
  cy.visit('cypress/prices-list.html')
  cy.get('#prices li')
    .should('have.length', 3)
    .then(($li) => Cypress._.map($li, 'innerText'))
    .should('deep.equal', ['Oranges $0.99', 'Mango $1.01', 'Potatoes $0.20'])
})

it.only('confirms the text in the last two items', () => {
  cy.visit('cypress/prices-list.html')
  // get the list of prices LI elements
  // from each item extract the inner text
  // get the last two items from that array
  // and confirm they are equal to
  // ['Mango $1.01', 'Potatoes $0.20']
  // Tip: cy.invoke command is a query command!
  cy.get('#prices li')
    .map('innerText')
    .invoke('slice', -2)
    .should('deep.equal', ['Mango $1.01', 'Potatoes $0.20'])
})

it('adds all prices together', () => {
  cy.visit('cypress/prices-list.html')
  // get the element with the total price
  // and extract the total in cents
  // from its "data-total" attribute
  // parse the String into a number
  // then use the "total" in a cy.then callback
  //
  // get all price list items
  // call the "getAttribute" "data-price" method
  // on each element, then parse each string
  // into a number and reduce to the sum
  //
  // confirm the sum is equal to the total
})
