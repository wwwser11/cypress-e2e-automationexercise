import BasePage from './BasePage';
import RegistrationPage from './RegistrationPage';
import MainPage from './MainPage';

class AuthPage extends BasePage {
    // Signup Form Locators as Getter Functions
    getSignupForm = () => cy.get('.signup-form');
    getSignupNameInput = () => cy.get('.signup-form input[name="name"]');
    getSignupEmailInput = () => cy.get('.signup-form input[name="email"]');
    getSignupButton = () => cy.get('.signup-form button');
    getSignupErrorExistedUser = () => cy.get('[action="/signup"] p');

    // Login Form Locators as Getter Functions
    getLoginForm = () => cy.get('.login-form');
    getLoginEmailInput = () => cy.get('.login-form input[name="email"]');
    getLoginPasswordInput = () => cy.get('.login-form input[name="password"]');
    getLoginButton = () => cy.get('[data-qa="login-button"]');
    getLoginErrorMessage = () => cy.get('[action="/login"] p');

    // Signup Methods
    fillSignupForm(name, email) {
        this.getSignupNameInput().type(name);
        this.getSignupEmailInput().type(email);
        return this; 
    }

    clickSignupButton() {
        this.getSignupButton().click();
        return new RegistrationPage(); // Navigates to RegistrationPage
    }

    // Login Methods
    fillLoginForm(email, password) {
        this.getLoginEmailInput().type(email);
        this.getLoginPasswordInput().type(password);
        return this; 
    }

    clickLoginButton() {
        this.getLoginButton().click();
        return new MainPage(); // Navigates to MainPage
    }

    // Verification Methods
    verifyLoginForm() {
        this.getLoginForm().should('be.visible');
        return this;
    }

    verifySignupErrorMsg() {
        this.getSignupErrorExistedUser().should('be.visible');
        return this;
    }

    verifyLoginError() {
        this.getLoginErrorMessage()
            .should('be.visible')
            .should('have.text', 'Your email or password is incorrect!');
        return this;
    }
}

export default AuthPage;
