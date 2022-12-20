/// <reference types="cypress" />

import 'cypress-map'
import { really, invoke, its } from 'cypress-should-really'

it('confirms the attribute age (callback)', () => {
  cy.visit('cypress/json-attribute.html')
  cy.get('#person')
    // the above assertion yields the attribute's value
    .should('have.attr', 'data-field')
    .should('be.a', 'string')
    // we want to parse the string and then check
    // the property inside
    .and((s) => {
      const o = JSON.parse(s)
      expect(o, 'parsed').to.have.property('age', 10)
    })
})

it('confirms the attribute age (cypress-should-really)', () => {
  cy.visit('cypress/json-attribute.html')
  cy.get('#person').should(
    really(invoke('attr', 'data-field'), JSON.parse, its('age'), 'equal', 10),
  )
})

it('confirms the attribute age (cypress-map)', () => {
  cy.visit('cypress/json-attribute.html')
  cy.get('#person')
    .invoke('attr', 'data-field')
    .apply(JSON.parse)
    .its('age')
    .should('equal', 10)
})
