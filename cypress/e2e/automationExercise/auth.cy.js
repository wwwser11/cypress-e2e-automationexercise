/// <reference types="cypress" />
import AuthPage from '../../pageObjects/AuthPage';
import BasePage from '../../pageObjects/BasePage';

// Utility function to generate a unique email
function generateUniqueEmail() {
  return `email${Date.now()}@g.com`;
}

describe('Automation Exercise Test Cases', () => {
  const authPage = new AuthPage();
  const userName = 'Iana';
  const password = 'password';
  const incorrectPass = 'incorrectpassword';
  let email;
  let incorrectEmail;

  // Generate unique email addresses before the test suite runs
  before(() => {
    email = generateUniqueEmail();
    incorrectEmail = generateUniqueEmail();
  });

  // Clear cookies and localStorage before each test, and prepare the user if needed
  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    if (this.currentTest.title !== 'Test Case 1 - Register User') {
      authPage
        .navigateToHome()
        .registerUser(userName, email, password)
        .logoutUsingNavMenu()
        .navigateToHome()
        .goToSignupLoginPageUsingNavMenu();
    }
  });

  // Delete the account after each test unless it's Test Case 5
  afterEach(function () {
    if (this.currentTest.title !== 'Test Case 5 - Register User with existing email') {
      authPage.deleteAccountUsingNavMenu();
    }
  });

  it('Test Case 1 - Register User', () => {
    authPage.navigateToHome()
      .goToSignupLoginPageUsingNavMenu()
      .fillSignupForm(userName, email)
      .clickSignupButton()
      .fillAccountInformation(password)
      .fillAddressDetails()
      .clickCreateAccountBtn()
      .verifyAccountCreated()
      .clickRegContinueButton()
      .verifyLoggedIn(userName);
  });

  it('Test Case 2 - Login User with correct email and password', () => {
    authPage
      .login(email, password)
      .clickLoginButton()
      .verifyLoggedIn(userName);
  });

  it('Test Case 3 - Login User with incorrect email and password', () => {
    authPage
      .login(incorrectEmail, incorrectPass)
      .clickLoginButton()
      .verifyLoginError();

    // Log in with the correct credentials for cleanup
    authPage
      .goToSignupLoginPageUsingNavMenu()
      .login(email, password)
      .clickLoginButton();
  });

  it('Test Case 4 - Logout User', () => {
    authPage
      .login(email, password)
      .clickLoginButton()
      .verifyLoggedIn(userName)
      .logoutUsingNavMenu()
      .verifyLoginForm();

    // Log in again for cleanup
    authPage
      .goToSignupLoginPageUsingNavMenu()
      .login(email, password)
      .clickLoginButton();
  });

  it('Test Case 5 - Register User with existing email', () => {
    authPage
      .fillSignupForm(userName, email)
      .clickSignupButton()
      .verifySignupErrorMsg();
  });
});
