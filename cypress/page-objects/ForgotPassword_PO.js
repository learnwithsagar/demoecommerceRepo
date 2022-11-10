class ForgotPassword_PO{

    clickOnForgotPasswordTab(){
      return cy.get('div.container:nth-child(4) div.row aside.col-sm-3.hidden-xs div.list-group > a.list-group-item:nth-child(3)')
    }

    getEmail(){
    return cy.get('#input-email');
    }

    clickOnContinueBtn(){
      return cy.get('input[value="Continue"]');
    }

}
export default ForgotPassword_PO