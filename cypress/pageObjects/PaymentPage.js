
class PaymentPage {
    getCardNameField = () => cy.get('input[data-qa="name-on-card"]');
    getCardNumberField = () => cy.get('input[data-qa="card-number"]');
    getCVC = () => cy.get('input[data-qa="cvc"]');
    getExpMonth = () => cy.get('input[data-qa="expiry-month"]');
    getExpYear = () => cy.get('input[data-qa="expiry-year"]');
    getPayButton = () => cy.get('button[data-qa="pay-button"]');
    getOrderPlacedSign = () => cy.get('h2[data-qa="order-placed"]')


    fillCardInfo(name, cardNum, cvc, expMonth, expYear){
        this.getCardNameField().type(name);
        this.getCVC().type(cvc);
        this.getCardNumberField().type(cardNum);
        this.getExpMonth().type(expMonth);
        this.getExpYear().type(expYear);
        return this;
    }

    clickPayButton() {
        this.getPayButton().click();
        return this;
    }

}

export default PaymentPage;