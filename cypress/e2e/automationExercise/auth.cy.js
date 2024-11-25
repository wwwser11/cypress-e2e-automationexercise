/// <reference types="cypress" />
import AuthPage from '../../pageObjects/AuthPage';
import { generateUniqueEmail } from '../../support/utils';



describe('Automation Exercise Test Cases', () => {
  const authPage = new AuthPage();
  const incorrectPass = 'incorrectpassword';
  let email;
  let incorrectEmail;
  let userData;

  // Generate unique email addresses before the test suite runs
  before(() => {

    cy.fixture('userData').then((data) =>{
      userData = data;
    });

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
        .registerUser(userData.userName, email, userData.password)
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
      .fillSignupForm(userData.userName, email)
      .clickSignupButton()
      .fillAccountInformation(userData.password)
      .fillAddressDetails()
      .clickCreateAccountBtn()
      .verifyAccountCreated()
      .clickRegContinueButton()
      .verifyLoggedIn(userData.userName);
  });

  it('Test Case 2 - Login User with correct email and password', () => {
    authPage
      .login(email, userData.password)
      .clickLoginButton()
      .verifyLoggedIn(userData.userName);
  });

  it('Test Case 3 - Login User with incorrect email and password', () => {
    authPage
      .login(incorrectEmail, incorrectPass)
      .clickLoginButton()
      .verifyLoginError();

    // Log in with the correct credentials for cleanup
    authPage
      .goToSignupLoginPageUsingNavMenu()
      .login(email, userData.password)
      .clickLoginButton();
  });

  it('Test Case 4 - Logout User', () => {
    authPage
      .login(email, userData.password)
      .clickLoginButton()
      .verifyLoggedIn(userData.userName)
      .logoutUsingNavMenu()
      .verifyLoginForm();

    // Log in again for cleanup
    authPage
      .goToSignupLoginPageUsingNavMenu()
      .login(email, userData.password)
      .clickLoginButton();
  });

  it('Test Case 5 - Register User with existing email', () => {
    authPage
      .fillSignupForm(userData.userName, email)
      .clickSignupButton()
      .verifySignupErrorMsg();
  });
});
