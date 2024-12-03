
class CartPage {

    getCartInfoTable = () => cy.get('#cart_info')


    verifyCartInfoTableVisible () {
        this.getCartInfoTable().should('be.visible');
    }

}
export default CartPage;