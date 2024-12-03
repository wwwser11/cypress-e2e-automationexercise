
class FooterPage {

    //Footer locators 
    getSubscribeEmail = () => cy.get('footer #susbscribe_email');
    getFooterText = () => cy.get('footer h2');
    getSubmitSubscribeButton = () => cy.get('footer #subscribe');
    getSuccessMessage = () => cy.get('.alert-success.alert');

    verifyFooterText(){
        this.getFooterText().should('have.text', 'Subscription')
        return this;
    }
    
    fillSubscribeEmail (email) {
        this.getSubscribeEmail().type(email);
        return this;
    }
    
    clickSubmitSubscribeButton () {
        this.getSubmitSubscribeButton().click();
        return this;
    }

    verifySuccessMessageVisible() {
        this.getSuccessMessage().should('be.visible');
        return this;
    }
}
export default FooterPage;