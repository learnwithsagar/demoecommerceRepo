class Laptops_PO {

    visitmainHomePage() {
        return cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=common/home')
    }

    clickOnLaptopTab() {
        return  cy.get("a[href*='product/category&path=']").contains("Show All Laptops & Notebooks");
    }

    iterateOverLaptopitems(){
        return cy.get("a[href*='product/product&path=']").each(($el, index, $list) => {
            if($el.text().includes('MacBook Pro')) {
                cy.wrap($el).click()
            }
        });
    } 


    laptopCart(){
        return cy.get('#button-cart').click();
    }

    clickOnAlertLaptop() {
       return cy.get('.alert');
    }


    


    }



export default Laptops_PO;