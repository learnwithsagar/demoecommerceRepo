class RegisterAccountUser_PO{

    getfirstName() {
        return cy.get('#input-firstname');
    }

    getlastName() {
        return cy.get('#input-lastname');
    }

    geteMail() {
        return cy.get('#input-email');
    }

    getTelephone() {
        return cy.get('#input-telephone');
    }

    //set password locators
    getPassword() {
        return cy.get('#input-password');
    }

    getConfirmPassword() {
        return cy.get('#input-confirm');
    }

    getAgreeCheckBox() {
        return cy.get('[type="checkbox"]');
    }

    clickOnContinueButton() {
        return cy.get('.pull-right > .btn');
    }

    getSuccessAlertMsg(){
        return cy.get('h1');
    }

    getRegErrorAlertMsg(){
        return cy.get('.alert');
    }

    //User click on Login tab once sucessfully registered.

    clickOnLoginTabAfterReg(){
        return cy.get('.list-group > [href="https://naveenautomationlabs.com/opencart/index.php?route=account/login"]');
    }


  }
  export default RegisterAccountUser_PO;