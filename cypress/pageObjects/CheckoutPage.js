
class CheckoutPage {

    // Locators as Getter Functions
    getModalRegisterLoginButton = () => cy.get('#checkoutModal a[href="/login"]');
    getDeliveryNameField = () => cy.get('#address_delivery .address_firstname')
    getDeliveryAddressField = () => cy.get('#address_delivery .address_city')
    getCommentAria = () => cy.get('textarea[name="message"]')
    getPlaceOrderButton = () => cy.get('div [href="/payment"]')

    clickModalRegisterLoginButton(){
        this.getModalRegisterLoginButton().click();
        return this;
    }

    fillCommentAria(comment){
        this.getCommentAria().type(comment);
        return this;
    }

    clickPlaceOrderButton(){
        this.getPlaceOrderButton().click();
        return this;
    }
    

}

export default CheckoutPage;