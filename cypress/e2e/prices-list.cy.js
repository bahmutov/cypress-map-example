/// <reference types="cypress" />

// import cypress-map plugin

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
