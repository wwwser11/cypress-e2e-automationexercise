import HomePage from './HomePage';

class RegistrationPage {
    // Locators as Getter Functions
    getAccountName = () => cy.get('#name');
    getGenderFemaleRadio = () => cy.get('#id_gender2');
    getPasswordInput = () => cy.get('#password');
    getDayDropdown = () => cy.get('#days');
    getMonthDropdown = () => cy.get('#months');
    getYearDropdown = () => cy.get('#years');
    getNewsletterCheckbox = () => cy.get('#newsletter');
    getSpecialOffersCheckbox = () => cy.get('#optin');
    getFirstNameInput = () => cy.get('#first_name');
    getLastNameInput = () => cy.get('#last_name');
    getCompanyInput = () => cy.get('#company');
    getAddress1Input = () => cy.get('#address1');
    getAddress2Input = () => cy.get('#address2');
    getCountryDropdown = () => cy.get('#country');
    getStateInput = () => cy.get('#state');
    getCityInput = () => cy.get('#city');
    getZipcodeInput = () => cy.get('#zipcode');
    getMobileNumberInput = () => cy.get('#mobile_number');
    getCreateAccountButton = () => cy.get('button[data-qa="create-account"]');
    getAccountCreatedMessage = () => cy.get('h2[data-qa="account-created"]');
    getContinueButton = () => cy.get('a[data-qa="continue-button"]');

    // Methods
    fillAccountInformation(password) {
        this.getPasswordInput().type(password);
        this.getDayDropdown().select('1');
        this.getMonthDropdown().select('1');
        this.getYearDropdown().select('2000');
        this.getNewsletterCheckbox().check();
        this.getSpecialOffersCheckbox().check();
        return this;
    }

    fillAddressDetails(address) {
        this.getFirstNameInput().type(address.firstName);
        this.getLastNameInput().type(address.lastName);
        this.getCompanyInput().type(address.company);
        this.getAddress1Input().type(address.address1);
        this.getAddress2Input().type(address.address2);
        this.getCountryDropdown().select(address.country);
        this.getStateInput().type(address.state);
        this.getCityInput().type(address.city);
        this.getZipcodeInput().type(address.zipcode);
        this.getMobileNumberInput().type(address.mobile);
        return this;
    }

    clickCreateAccountBtn() {
        this.getCreateAccountButton().click();
        return this;
    }

    verifyAccountCreatedMsg() {
        this.getAccountCreatedMessage()
            .should('be.visible')
            .should('have.text', 'Account Created!');
        return this;
    }

    clickRegContinueButton() {
        this.getContinueButton().click();
        return new HomePage();
    }
}

export default RegistrationPage;