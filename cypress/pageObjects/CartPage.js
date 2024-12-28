
class CartPage {

    getCartInfoTable = () => cy.get('#cart_info')
    getShoppingList = () => cy.get('tbody .cart_description a')


    verifyCartInfoTableVisible () {
        this.getCartInfoTable().should('be.visible');
    }

}
export default CartPage;