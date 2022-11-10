// <reference types="cypress" />
// import { contains } from 'cypress/types/jquery'
import HomePage_PO from '../../page-objects/HomePage_PO'
import RegisterAccountUser_PO from '../../page-objects/RegisterAccountUser_PO'
import RegisterPage_PO from '../../page-objects/RegisterPage_PO'

describe('Visit the automationLabs home page and then go for registration', () => {
    //Mostly used for Setup Part
    
        before(function () {
        cy.fixture('example').then((data) =>{
            globalThis.data = data;
        })
    })

    // beforeEach(() => {
    //     cy.viewport(1280, 720)
    // })

    const homePage = new HomePage_PO();
    const registerPage = new RegisterPage_PO();
    const registerAccountPage = new RegisterAccountUser_PO();

    it('Verify that user visit the account tab to register new user', () => {
        homePage.visitHomePage();

        //User clicks on Account tab and then click on register
        registerPage.clickOnAccountTab();
        registerPage.clickOnRegisterTab();

        //User submit registraton form
        registerAccountPage.getfirstName().type(globalThis.data.first_name);
        registerAccountPage.getlastName().type(globalThis.data.last_name);
        registerAccountPage.geteMail().type(globalThis.data.email);
        registerAccountPage.getTelephone().type(globalThis.data.telephone);

        registerAccountPage.getPassword().type(globalThis.data.Password);
        registerAccountPage.getConfirmPassword().type(globalThis.data.confirmPassword);

        registerAccountPage.getAgreeCheckBox().click();
        registerAccountPage.clickOnContinueButton().click();

        registerAccountPage.getSuccessAlertMsg().should('include.text', 'Your Account Has Been Created!');




    })

    
    it('Verify that the user is already registerd then error msg should displayed', () => {
        homePage.visitHomePage();

        //User clicks on Account tab and then click on register
        registerPage.clickOnAccountTab();
        registerPage.clickOnRegisterTab();

        //User submit registraton form
        registerAccountPage.getfirstName().type(globalThis.data.first_name);
        registerAccountPage.getlastName().type(globalThis.data.last_name);
        registerAccountPage.geteMail().type(globalThis.data.email);
        registerAccountPage.getTelephone().type(globalThis.data.telephone);

        registerAccountPage.getPassword().type(globalThis.data.Password);
        registerAccountPage.getConfirmPassword().type(globalThis.data.confirmPassword);

        registerAccountPage.getAgreeCheckBox().click();
        registerAccountPage.clickOnContinueButton().click();

         registerAccountPage.getRegErrorAlertMsg().should('include.text', 'Warning: E-Mail Address is already registered!');


    })
})
// })