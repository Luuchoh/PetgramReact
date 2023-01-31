/* global describe, it, expect, cy */
describe('Petgram template spec', () => {
  it('passes', () => {
    expect(true).to.equal(true)
  })
  it('Funciona', () => {
    cy.visit('/')
  })
  it('Navegación a una categoria', () => {
    cy.visit('/pet/1')
  })
  it('Navegación de una categoria a la home', () => {
    cy.visit('/pet/1')

    cy.get('nav a:first').click()
    cy.url().should('include', '/')
  })
  it('view login para usuarios no registrados', () => {
    cy.visit('/favs')

    cy.get('form').should('have.length', 1)
  })
})
