import { smokeTest } from './Smoke'
import { smokeTest } from './Smoke2'

Cypress._.each(['iphone-8','ipad-mini','samsung-s10'], viewport => {
  it(`works on ${viewport}`, () => {
    cy.Prdlogin()
    cy.viewport(viewport)
    smokeTest()
  })
})


Cypress._.each(['macbook-16'], viewport => {
  it(`works on ${viewport}`, () => {
    cy.Prdlogin()
    cy.viewport(viewport)
    smokeTest()
  })
})