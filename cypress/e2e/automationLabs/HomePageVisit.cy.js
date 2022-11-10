// <reference types="cypress" />
import HomePage_PO from '../page-objects/HomePage_PO'

describe('Visit the automationLabs home page', () => {

  beforeEach(() => {
        cy.viewport(1280, 720)
  })

 const homePage= new HomePage_PO();

  it('Verify that user visit the home page URL', () => {
    homePage.visitHomePage();
  })
})