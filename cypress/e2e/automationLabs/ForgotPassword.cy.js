// <reference types="cypress" />
import HomePage_PO from '../page-objects/HomePage_PO'
import RegisterPage_PO from '../page-objects/RegisterPage_PO'
import LoginAlreadyRegisteredUser_PO from '../page-objects/LoginAlreadyRegisteredUser_PO'
import ForgotPassword_PO from '../page-objects/ForgotPassword_PO'

describe('Forgot password test suite', () => {
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
    const forgotUser= new ForgotPassword_PO();

    it('Verify that the user should be able to set new password', () => {

        homePage.visitHomePage();
        
        registerPage.clickOnAccountTab();
        registerPage.clickOnLoginTab();

        forgotUser.clickOnForgotPasswordTab().click();
        forgotUser.getEmail().type(globalThis.data.emailAddress);

        forgotUser.clickOnContinueBtn().click();
        alreadyUser.getAlertmsg().should('contain',' An email with a confirmation link has been sent your email address.');




    })

   

   
})