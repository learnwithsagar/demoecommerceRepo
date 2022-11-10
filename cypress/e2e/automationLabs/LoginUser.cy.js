// <reference types="cypress" />
import HomePage_PO from '../page-objects/HomePage_PO'
import RegisterPage_PO from '../page-objects/RegisterPage_PO'
import LoginAlreadyRegisteredUser_PO from '../page-objects/LoginAlreadyRegisteredUser_PO'

describe('Login page test suite', () => {
    //Mostly used for Setup Part

    before(function () {
        cy.fixture('login').then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.viewport(1000, 660)
    })

    const homePage = new HomePage_PO();
    const registerPage = new RegisterPage_PO();
    const alreadyUser = new LoginAlreadyRegisteredUser_PO();

    it('Verify if the user is not registered then they should be able to register using registration page', () => {
        
        alreadyUser.clickOnNewCustomerCtnBtn().click();

    })

    it.only('Verify that once the user is registered then should be logged in with valid username and valid password', () => {
        homePage.visitHomePage();
        registerPage.clickOnAccountTab();
        registerPage.clickOnLoginTab();

        //login with valid username and valid password
        alreadyUser.getEmailAddress().type(globalThis.data.emailAddress);
        alreadyUser.getPassword().type(globalThis.data.password)
        alreadyUser.clickOnLoginBtn().click();

        //


    })

   
})