/// <reference types="cypress" />

// import the cypress-map plugin
import 'cypress-map'

it('has the price attributes', () => {
  // intercept the "GET /items" network call the application is making
  // using the fixture "items.json"
  // https://on.cypress.io/intercept
  // give the intercept an alias "items"
  cy.intercept('GET', '/items', { fixture: 'items.json' }).as('items')
  // visit the local file
  cy.visit('cypress/shop.html')
  // confirm the intercept works
  // https://on.cypress.io/wait
  cy.wait('@items')
  // load the same items from the fixture "items.json"
  // and extract the property "price" from each item
  // https://on.cypress.io/fixture
  cy.fixture('items.json').then((items) => {
    const prices = Cypress._.map(items, 'price').sort()
    // get the items from the list on the page
    // https://on.cypress.io/get
    // and from each element get its "data-price" attribute
    // convert the strings to numbers
    // and confirm all prices from the fixture are there
    // Tip: sort the lists before comparing,
    // since the application is sorting the items by name
    cy.get('#items li').should(($li) => {
      const attributes = Cypress._.map($li, (li) =>
        li.getAttribute('data-price'),
      )
      const numbers = attributes.map(Number)
      numbers.sort()
      expect(numbers, 'prices').to.deep.equal(prices)
    })
  })
})

it('has the price attributes (cypress-map)', () => {
  // intercept the "GET /items" network call the application is making
  // using the fixture "items.json"
  // https://on.cypress.io/intercept
  // give the intercept an alias "items"
  cy.intercept('GET', '/items', { fixture: 'items.json' }).as('items')
  // visit the local file
  cy.visit('cypress/shop.html')
  // confirm the intercept works
  // https://on.cypress.io/wait
  cy.wait('@items')
  // load the same items from the fixture "items.json"
  // and extract the property "price" from each item
  // https://on.cypress.io/fixture
  cy.fixture('items.json')
    .map('price')
    .invoke('sort')
    .then((prices) => {
      // get the items from the list on the page
      // https://on.cypress.io/get
      // and from each element get its "data-price" attribute
      // convert the strings to numbers
      // and confirm all prices from the fixture are there
      // Tip: sort the lists before comparing,
      // since the application is sorting the items by name
      cy.get('#items li')
        .mapInvoke('getAttribute', 'data-price')
        .map(Number)
        .invoke('sort')
        .should('deep.equal', prices)
    })
})
