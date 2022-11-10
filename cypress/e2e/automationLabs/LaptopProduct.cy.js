// <reference types="cypress" />
import Desktop_PO from '../../page-objects/Desktop_PO';
import Laptops_PO from '../../page-objects/Laptops_PO'


describe('Laptop and MacBook test suite', () => {

  // beforeEach(() => {
  //       cy.viewport(1280, 720)
  // })

  const desktopPage= new Desktop_PO();
 const laptopPage= new Laptops_PO();

  it('Verify that user click on Laptops tab', () => {
    desktopPage.visitmainHomePage();
    
  })

  it('Verify that user should be able to add iMac on chart', () => {
    laptopPage.clickOnLaptopTab().click({force: true});
    laptopPage.iterateOverLaptopitems();
    laptopPage.laptopCart();
    laptopPage.clickOnAlertLaptop().should('include.text','Success: You have added MacBook Pro to your shopping cart!');

  })
})