class AuthPage {
    // Base URL
    baseUrl = 'https://automationexercise.com';

    // Navigation Locators
    homeLink = '.nav a[href="/"]'; // Link to the home page
    loginLink = '.nav a[href="/login"]'; // Link to the login/signup page
    logoutLink = '.nav a[href="/logout"]'; // Link to logout
    deleteAccountLink = '.navbar-nav a[href="/delete_account"]'; // Link to delete account

    // Signup Form Locators
    signupForm = '.signup-form'; // The main signup form container
    signupNameInput = '.signup-form input[name="name"]'; // Input field for entering name during signup
    signupEmailInput = '.signup-form input[name="email"]'; // Input field for entering email during signup
    signupButton = '.signup-form button'; // Button to submit the signup form
    accountCreatedMessage = 'h2[data-qa="account-created"]'; // Message displayed when account is created successfully
    continueButton = 'a[data-qa="continue-button"]'; // Button to continue after account creation

    // Login Form Locators
    loginForm = '.login-form'; // The main login form container
    loginEmailInput = '.login-form input[name="email"]'; // Input field for entering email during login
    loginPasswordInput = '.login-form input[name="password"]'; // Input field for entering password during login
    loginButton = '[data-qa="login-button"]'; // Button to submit the login form
    loginErrorMessage = '[action="/login"] p'; // Error message displayed for invalid login credentials

    // Account Information Locators (after signup)
    genderFemaleRadio = '#id_gender2'; // Radio button to select "Female" gender
    passwordInput = '#password'; // Input field for setting the password
    dayDropdown = '#days'; // Dropdown to select the day of birth
    monthDropdown = '#months'; // Dropdown to select the month of birth
    yearDropdown = '#years'; // Dropdown to select the year of birth
    newsletterCheckbox = '#newsletter'; // Checkbox to subscribe to the newsletter
    specialOffersCheckbox = '#optin'; // Checkbox to receive special offers

    // Address Information Locators (during signup)
    firstNameInput = '#first_name'; // Input field for entering the first name
    lastNameInput = '#last_name'; // Input field for entering the last name
    companyInput = '#company'; // Input field for entering the company name
    address1Input = '#address1'; // Input field for entering the first line of the address
    address2Input = '#address2'; // Input field for entering the second line of the address
    countryDropdown = '#country'; // Dropdown to select the country
    stateInput = '#state'; // Input field for entering the state
    cityInput = '#city'; // Input field for entering the city
    zipcodeInput = '#zipcode'; // Input field for entering the zipcode
    mobileNumberInput = '#mobile_number'; // Input field for entering the mobile number
    createAccountButton = 'button[data-qa="create-account"]'; // Button to submit the account creation form

    // Verification Locators
    loggedInAsText = '.navbar-nav li:last-child a'; // Text displaying the logged-in user's name
    loggedInAsBoldText = '.navbar-nav li:last-child a b'; // Bold text displaying the logged-in username

    // Miscellaneous Locators
    deleteAccountTitle = 'h2.title'; // Title displayed when an account is deleted


    //Methods

    navigateToHome() {
        cy.visit(this.baseUrl); // Используем baseUrl
        cy.get(this.homeLink).should('have.css', 'color', 'rgb(255, 165, 0)');
    }

    navigateToLogin() {
        cy.visit(`${this.baseUrl}/login`); // Используем baseUrl
        //cy.visit('https://automationexercise.com/login')
    }

    fillSignupForm(name, email) {
        cy.get(this.signupNameInput).type(name);
        cy.get(this.signupEmailInput).type(email);
        cy.get(this.signupButton).click();
    }

    fillAccountInformation(password) {
        cy.get(this.genderFemaleRadio).click();
        cy.get(this.passwordInput).type(password);
        cy.get(this.dayDropdown).select('1');
        cy.get(this.monthDropdown).select('1');
        cy.get(this.yearDropdown).select('2000');
        cy.get(this.newsletterCheckbox).check();
        cy.get(this.specialOffersCheckbox).check();
    }

    fillAddressDetails() {
        cy.get(this.firstNameInput).type('Iana2');
        cy.get(this.lastNameInput).type('Li');
        cy.get(this.companyInput).type('PM');
        cy.get(this.address1Input).type('MSK');
        cy.get(this.address2Input).type('LA');
        cy.get(this.countryDropdown).select('United States');
        cy.get(this.stateInput).type('CA');
        cy.get(this.cityInput).type('Los Angeles');
        cy.get(this.zipcodeInput).type('90015');
        cy.get(this.mobileNumberInput).type('8722941111');
        cy.get(this.createAccountButton).click();
    }

    verifyAccountCreated() {
        cy.get(this.accountCreatedMessage).should('be.visible').should('have.text', 'Account Created!');
        cy.get(this.continueButton).click();
    }

    verifyLoggedIn(username) {
        cy.get(this.loggedInAsText).should('be.visible').and('contain', `Logged in as ${username}`);
    }

    login(email, password) {
        cy.get(this.loginEmailInput).type(email);
        cy.get(this.loginPasswordInput).type(password);
        cy.get(this.loginButton).click();
    }

    verifyLoginError() {
        cy.get(this.loginErrorMessage).should('be.visible').should('have.text', 'Your email or password is incorrect!');
    }

    deleteAccount() {
        cy.get(this.deleteAccountLink).click();
        cy.get(this.deleteAccountTitle).should('have.text', 'Account Deleted!');
        cy.get(this.continueButton).click();
    }

    logout() {
        cy.get(this.logoutLink).click();
        cy.get(this.loginForm).should('be.visible');
    }

    registerUser(name, emai1, pass){
        this.navigateToHome();
        this.navigateToLogin();
        this.fillSignupForm(name, emai1);
        this.fillAccountInformation(pass);
        this.fillAddressDetails();
        this.verifyAccountCreated();
        this.verifyLoggedIn(name);
    }
}

export default AuthPage;
