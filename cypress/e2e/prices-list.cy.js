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
  //
  //
  // get all price list items
  // call the "getAttribute" "data-price" method
  // on each element, then parse each string
  // into a number and reduce to the sum
})

it('gets the raw DOM element at position k', () => {
  cy.visit('cypress/prices-list.html')
  // get the prices LI elements
  // and confirm it is a jQuery object
  // https://on.cypress.io/get
  // "should satisfy" assertion
  // https://glebbahmutov.com/cypress-examples/commands/assertions.html
  // https://on.cypress.io/dom
  //
  // yield the first element
  // https://on.cypress.io/eq
  // https://on.cypress.io/first
  // and confirm it is _still_ a jQuery object
  //
  // Tip: can you debug the Cypress.dom static methods?
  //
  // Now change the standard Cypress queries to cypress-map
  // and confirm they yield the DOM elements
})

it('counts the number of elements with data-selected attribute', () => {
  cy.visit('cypress/prices-list.html')
  // get the price LI elements
  // ask each element if it has attribute "data-selected"
  // convert the "true/false" into 1/0 numbers
  // and then count all "1"s by using reduce
  // and the total sum should be 2
  // https://on.cypress.io/get
  // mapInvoke, map, reduce
  //
  // now write an equivalent check
  // using a single standard Cypress command
})

// increase the stringified limit in assertions
// so we can see the values
chai.config.truncateThreshold = 200

it('extracts dollars and cents from each list item', () => {
  cy.visit('cypress/prices-list.html')
  // get the price LIS elements
  // from each element find the "$x.yy" price strings
  // and extract just the dollars and cents
  // convert the strings to numbers
  // and they should be 0.99, 1.01, and 0.2
  cy.get('#prices li')
    .map('innerText')
    .mapInvoke('match', /\$(?<price>\d+\.\d{2})/)
    .map('groups')
    .map('price')
    .map(Number)
    .should('deep.equal', [0.99, 1.01, 0.2])
})
