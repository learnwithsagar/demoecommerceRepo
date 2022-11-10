// <reference types="cypress" />
import Desktop_PO from '../../page-objects/Desktop_PO'

describe('Desktop test suite', () => {

  // beforeEach(() => {
  //       cy.viewport(1280, 720)
  // })

 const desktopPage= new Desktop_PO();

  it('Verify that user click on Mac book tab', () => {
    desktopPage.visitmainHomePage();
    desktopPage.clickOnDesktopTab().click();
    desktopPage.clickOnMacSubTab().click();
  })

  it('Verify that user should be able to add iMac on chart', () => {
    desktopPage.visitmainHomePage();
    desktopPage.clickOnDesktopTab().click();
    desktopPage.clickOnMacSubTab().click();
    desktopPage.clickonAddiMACCart().click({force: true});
    desktopPage.clickOnAlertImac1().should('include.text',' Success: You have added iMac to your shopping cart!');

  })
})