// <reference types="cypress" />
import HomePage_PO from '../page-objects/HomePage_PO'
import RegisterPage_PO from '../page-objects/RegisterPage_PO'
import RegisterAccountUser_PO from '../page-objects/RegisterAccountUser_PO'


describe('Visit the automationLabs home page and then go for registration', () => {

  beforeEach(() => {
        cy.viewport(1280, 720)
  })

 const homePage= new HomePage_PO();
 const registerPage= new RegisterPage_PO();
 const regLogintab= new RegisterAccountUser_PO();

  it('Verify that user visit the account tab to register new user', () => {
    homePage.visitHomePage();
    registerPage.clickOnAccountTab();
    registerPage.clickOnRegisterTab();

  })

  it('Verify that once the user registered, then the user clicks on Login tab for login', () => {
    regLogintab.clickOnLoginTabAfterReg().click();

  })
})
