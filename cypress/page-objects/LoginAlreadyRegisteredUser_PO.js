class LoginAlreadyRegisteredUser_PO{

    getEmailAddress(){
      return cy.get('#input-email');
    }
  
    getPassword(){
        return cy.get('#input-password');
      }

    clickOnLoginBtn(){
    return cy.get('input[value="Login"]');
    }

    clickOnNewCustomerCtnBtn(){
      return cy.get('div.container:nth-child(4) div.row div.col-sm-9 div.row div.col-sm-6:nth-child(1) div.well > a.btn.btn-primary:nth-child(4)');
    }

    getAlertmsg(){
      return cy.get('.alert');
    }
  
  }
  export default LoginAlreadyRegisteredUser_PO;