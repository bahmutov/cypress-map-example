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
})

it('shows the expected items: bonus', () => {
  // this test works in all Cypress versions
  cy.visit('cypress/prices-list.html')
})

it('confirms the text in the last two items', () => {
  cy.visit('cypress/prices-list.html')
  // get the list of prices LI elements
  // from each item extract the inner text
  // get the last two items from that array
  // and confirm they are equal to
  // ['Mango $1.01', 'Potatoes $0.20']
  // Tip: cy.invoke command is a query command!
})

it('confirms the data-price attribute in all items', () => {
  cy.visit('cypress/prices-list.html')
  // get the list of prices LI elements
  // from each DOM element get the attribute "data-price"
  // convert each string into a number
  // the confirm the list is equal to [99, 101, 20]
})

it('confirms the sum of data-price attributes', () => {
  cy.visit('cypress/prices-list.html')
  // get the list of prices LI elements
  // from each DOM element get the attribute "data-price"
  // convert each string into a number
  // sum them all and confirm the total is 220
})

it('confirms the sum is correct', () => {
  cy.visit('cypress/prices-list.html')
  // get the element with the total price
  // and extract the total in cents
  // from its "data-total" attribute
  // parse the String into a number
  // then use the "total" in a cy.then callback
  // Important: ensure the number has loaded
  cy.get('#total').should('not.include.text', '--')
  // alternative 1
  cy.get('#total').should('include.text', '$')
  // alternative 2 (my favorite)
  cy.contains('#total', '$')
    .should('have.attr', 'data-total')
    // alternative .invoke('attr', 'data-total')
    .then(Number)
    .should('be.within', 1, 1000)
    .then((total) => {
      // get all price list items
      // call the "getAttribute" "data-price" method
      // on each element, then parse each string
      // into a number and reduce to the sum
      cy.get('#prices li')
        .mapInvoke('getAttribute', 'data-price')
        .map(Number)
        .reduce((sum, n) => sum + n)
        // confirm the sum is equal to the total
        .should('equal', total)
    })
})

it('calculates the sum with debugging', () => {
  cy.visit('cypress/prices-list.html')
  // get all price list items
  // call the "getAttribute" "data-price" method
  // on each element, then parse each string
  // into a number and reduce to the sum
  //
  // log the data items at different steps
  // using cy.tap query. Give the taps different labels
  cy.get('#prices li')
    .tap('DOM elements')
    .mapInvoke('getAttribute', 'data-price')
    .tap('attribute')
    .map(Number)
    .tap(console.info, 'numbers')
    .reduce((sum, n) => sum + n)
    .tap(console.warn, 'sum')
    // confirm the sum is equal to 220
    .should('equal', 220)
})
