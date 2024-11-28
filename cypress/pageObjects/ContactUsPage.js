

class ContactUsPage {

    contatUsPageUrl = 'https://automationexercise.com/contact_us';

    // Contact Us Form Locators
    nameField = 'input[data-qa="name"]';
    emailField = 'input[data-qa="email"]';
    subjectField = 'input[data-qa="subject"]';
    messageField = 'input[data-qa="message"]';
    inputFile = 'input[name="upload_file"]';
    submitButton = 'input[data-qa="submit-button"]';
    getInTouchSigh = '.contact-form .title';

    fillContactForm (name, email, subject, message) {
        cy.get(this.nameField).type(name);
        cy.get(this.emailField).type(email);
        cy.get(this.subjectField).type(subject);
        cy.get(this.messageField).type(message);
    }

    clickSubmitButton (){
        cy.get(this.submitButton).click();
        return this;
    }
}
export default ContactUsPage;