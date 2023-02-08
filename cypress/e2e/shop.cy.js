/// <reference types="cypress" />

// import the cypress-map plugin

it('has the price attributes', () => {
  // intercept the "GET /items" network call the application is making
  // using the fixture "items.json"
  // https://on.cypress.io/intercept
  // give the intercept an alias "items"
  //
  // visit the local file
  cy.visit('cypress/shop.html')
  // confirm the intercept works
  // https://on.cypress.io/wait
  //
  // load the same items from the fixture "items.json"
  // and extract the property "price" from each item
  // https://on.cypress.io/fixture
  //
  // get the items from the list on the page
  // https://on.cypress.io/get
  // and from each element get its "data-price" attribute
  // convert the strings to numbers
  // and confirm all prices from the fixture are there
  // Tip: sort the lists before comparing,
  // since the application is sorting the items by name
})
