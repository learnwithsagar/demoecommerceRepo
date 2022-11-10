class Desktop_PO {

    visitmainHomePage() {
        return cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
    }

    clickOnDesktopTab() {
        return cy.get('.nav > :nth-child(1) > .dropdown-toggle');
    }

    clickOnMacSubTab() {
        return cy.get('div.container:nth-child(3) nav.navbar div.collapse.navbar-collapse.navbar-ex1-collapse ul.nav.navbar-nav li.dropdown.open:nth-child(1) div.dropdown-menu div.dropdown-inner ul.list-unstyled li:nth-child(2) > a:nth-child(1)')
    }

    clickonAddiMACCart() {
        return cy.get("div[id='content'] div div div div div button[type='button'] span")
    }

        clickOnAlertImac1() {
            return cy.get('.alert')
        }


    }



export default Desktop_PO;