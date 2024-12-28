
class CartPage {

    getCartInfoTable = () => cy.get('#cart_info')
    getShoppingList = () => cy.get('tbody .cart_description a')
    getProductQty = () => cy.get('tbody .cart_quantity')


    verifyCartInfoTableVisible () {
        this.getCartInfoTable().should('be.visible');
    }
    
    getProductQtyText = () => {
        return this.getProductQty().invoke('text').then((text) => text.trim());
    };

}
export default CartPage;