class RegisterPage_PO{

  clickOnAccountTab(){
    return cy.get('.dropdown > .dropdown-toggle > .hidden-xs').click({force: true});
  }

    clickOnRegisterTab(){
      return cy.get('.dropdown-menu > :nth-child(1) > a').click();
    }

    clickOnLoginTab(){
      return cy.get('.dropdown-menu > :nth-child(2) > a').click();
    }

}
export default RegisterPage_PO