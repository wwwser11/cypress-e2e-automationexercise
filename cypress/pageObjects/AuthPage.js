
import BasePage from './BasePage';

class AuthPage extends BasePage {

    // Signup Form Locators as Getter Functions
    getSignupForm = () => cy.get('.signup-form');
    getSignupNameInput = () => cy.get('.signup-form input[name="name"]');
    getSignupEmailInput = () => cy.get('.signup-form input[name="email"]');
    getSignupButton = () => cy.get('.signup-form button');
    getAccountCreatedMessage = () => cy.get('h2[data-qa="account-created"]');
    getContinueButton = () => cy.get('a[data-qa="continue-button"]');
    getSignupErrorExistedUser = () => cy.get('[action="/signup"] p');

    // Login Form Locators as Getter Functions
    getLoginForm = () => cy.get('.login-form');
    getLoginEmailInput = () => cy.get('.login-form input[name="email"]');
    getLoginPasswordInput = () => cy.get('.login-form input[name="password"]');
    getLoginButton = () => cy.get('[data-qa="login-button"]');
    getLoginErrorMessage = () => cy.get('[action="/login"] p');

    // Account Information Locators as Getter Functions
    getGenderFemaleRadio = () => cy.get('#id_gender2');
    getPasswordInput = () => cy.get('#password');
    getDayDropdown = () => cy.get('#days');
    getMonthDropdown = () => cy.get('#months');
    getYearDropdown = () => cy.get('#years');
    getNewsletterCheckbox = () => cy.get('#newsletter');
    getSpecialOffersCheckbox = () => cy.get('#optin');

    // Address Information Locators as Getter Functions
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

    // Verification Locators as Getter Functions
    getLoggedInAsText = () => cy.get('.navbar-nav li:last-child a');
    getLoggedInAsBoldText = () => cy.get('.navbar-nav li:last-child a b');

    // Miscellaneous Locators as Getter Functions
    getDeleteAccountTitle = () => cy.get('h2.title');

    // Methods updated to use the Getter Functions
    navigateToHome() {
        cy.visit(this.baseUrl); // Using baseUrl
    }

    navigateToLogin() {
        this.navigationMenu.clickSignupLogin(); 
    }

    deleteAccount() {
        this.navigationMenu.clickDeleteAccount(); 
        this.getDeleteAccountTitle().should('have.text', 'Account Deleted!');
        this.getContinueButton().click();
    }

    logout() {
        this.navigationMenu.clickLogout(); 
    }

    fillSignupForm(name, email) {
        this.getSignupNameInput().type(name);
        this.getSignupEmailInput().type(email);
    }

    clickSignupButton() {
        this.getSignupButton().click();
    }

    verifyAccountCreated() {
        this.getAccountCreatedMessage().should('be.visible').should('have.text', 'Account Created!');
    }

    verifyLoggedIn(username) {
        this.getLoggedInAsText().should('be.visible').and('contain', `Logged in as ${username}`);
    }

    verifyLoginForm() {
        this.getLoginForm().should('be.visible');
    }

    verifySignupErrorMsg() {
        this.getSignupErrorExistedUser().should('be.visible');
    }

    login(email, password) {
        this.getLoginEmailInput().type(email);
        this.getLoginPasswordInput().type(password);
    }

    clickLoginButton() {
        this.getLoginButton().click(); 
    }

    verifyLoginError() {
        this.getLoginErrorMessage().should('be.visible').should('have.text', 'Your email or password is incorrect!');
    }

    fillAccountInformation(password) {
        this.getGenderFemaleRadio().click();
        this.getPasswordInput().type(password);
        this.getDayDropdown().select('1');
        this.getMonthDropdown().select('1');
        this.getYearDropdown().select('2000');
        this.getNewsletterCheckbox().check();
        this.getSpecialOffersCheckbox().check();
    }

    fillAddressDetails() {
        this.getFirstNameInput().type('Iana2');
        this.getLastNameInput().type('Li');
        this.getCompanyInput().type('PM');
        this.getAddress1Input().type('MSK');
        this.getAddress2Input().type('LA');
        this.getCountryDropdown().select('United States');
        this.getStateInput().type('CA');
        this.getCityInput().type('Los Angeles');
        this.getZipcodeInput().type('90015');
        this.getMobileNumberInput().type('8722941111');
    }

    clickCreateAccountBtn() {
        this.getCreateAccountButton().click();
    }

    clickRegContinueButton() {
        this.getContinueButton().click();
    }

    registerUser(name, email, password) {
        this.navigationMenu.clickSignupLogin();
        this.fillSignupForm(name, email);
        this.clickSignupButton();
        this.fillAccountInformation(password);
        this.fillAddressDetails();
        this.clickCreateAccountBtn();
        this.clickRegContinueButton();
    }
}

export default AuthPage;
