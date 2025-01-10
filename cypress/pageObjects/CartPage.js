
class CartPage {

    getCartInfoTable = () => cy.get('#cart_info')
    getShoppingListNames = () => cy.get('tbody .cart_description a')
    getProductQty = () => cy.get('tbody .cart_quantity')
    getListProductNames = () => cy.get('.cart_description h4 a')
    getDeleteButton = () => cy.get('.cart_quantity_delete')
    getFirstProductName = () => cy.get('tbody h4')
    getProceedToCheckoutButton = () => cy.get('a.check_out')

    verifyCartInfoTableVisible () {
        this.getCartInfoTable().should('be.visible');
        return this;
    }
    
    getProductQtyText = () => {
        return this.getProductQty().invoke('text').then((text) => text.trim());
    };

    getProductId(productName) {
        return cy.contains(this.getShoppingListNames, productName) 
            .closest('tr')  
            .invoke('attr', 'id') 
            .as('productId'); // Сохраняем как алиас
    }

    deleteProductBasedOnName(prodName) {
        this.getListProductNames().contains(prodName).parents('tr').within(() => {
            this.getDeleteButton().click(); 
        });
        return this;
    }

    clickProceedToCheckoutButton() {
        this.getProceedToCheckoutButton().click();
        return this;
    }

}
export default CartPage;