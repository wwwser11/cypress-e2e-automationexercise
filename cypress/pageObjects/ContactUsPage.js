

class ContactUsPage {

    contatUsPageUrl = 'https://automationexercise.com/contact_us';

    // Contact Us Form Locators
    getNameField = () => cy.get('input[data-qa="name"]');
    getEmailField = () => cy.get('input[data-qa="email"]');
    getSubjectField = () => cy.get('input[data-qa="subject"]');
    getMessageField = () => cy.get('textarea[data-qa="message"]');
    getInputFile = () => cy.get('input[name="upload_file"]');
    getSubmitButton = () => cy.get('input[data-qa="submit-button"]');
    getInTouchSigh = () => cy.get('.contact-form .title');
    getSuccessMessage = () => cy.get(" div.status.alert.alert-success")


    fillContactForm(name, email, subject = 'emptySubject', message = 'emptyMessage') {
        this.getNameField().type(name);
        this.getEmailField().type(email);
        this.getSubjectField().type(subject);
        this.getMessageField().type(message);
        return this;
    }

    clickSubmitButton() {
        this.getSubmitButton().click();
        return this;
    }

    verifygetInTouchSighVisible() {
        this.getInTouchSigh().should('be.visible');
        return this;
    }

    verifySuccessMessageVisible() {
        this.getSuccessMessage()
            .should("be.visible")
            .should(
                "have.text",
                "Success! Your details have been submitted successfully."
            );
        return this;
    }

    okToProceedAlert() {
        cy.on("window:alert", (text) => {
            expect(text).to.equal("Press OK to proceed");
        })
        return this;
    }

    attachFile(file) {
        this.getInputFile().attachFile(file);
        return this;
    }



}
export default ContactUsPage;