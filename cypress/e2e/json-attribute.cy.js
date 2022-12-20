/// <reference types="cypress" />

it('confirms the attribute age', () => {
  cy.visit('cypress/json-attribute.html')
  // find the element with id "person"
  // it should have an attribute "data-field"
  // inside should be a stringified JSON object
  // with property 'age: 10'
})
