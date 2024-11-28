/// <reference types="cypress" />
import NavigationMenu from '../../pageObjects/NavigationMenu';
import SignUpLoginPage from '../../pageObjects/SignUpLoginPage';
import RegistrationPage from '../../pageObjects/RegistrationPage';
import HomePage from '../../pageObjects/HomePage';
import { generateUniqueEmail } from '../../support/utils';

describe('Automation Exercise Test Cases', () => {
  const navigationMenu = new NavigationMenu();
  const homePage = new HomePage();
  let signUpLoginPage;
  let email;
  let incorrectEmail;
  let userData;
  let address;

  // Generate unique email addresses before the test suite runs
  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });

    cy.fixture('userAdress').then((data) => {
      address = data;
      cy.log('Loaded userData:', userData);
    });

    cy.then(() => {
      email = generateUniqueEmail();
      incorrectEmail = generateUniqueEmail();
    });
  });

  // Clear cookies and prepare a registered user before each test, except Test Case 1
  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    homePage.navigateToHome()

    if (this.currentTest.title !== 'Test Case 1 - Register User') {
      signUpLoginPage = navigationMenu.clickSignupLogin();
      signUpLoginPage
        .fillSignupForm(userData.userName, email)
        .clickSignupButton()
        .fillAccountInformation(userData.password)
        .fillAddressDetails(address)
        .clickCreateAccountBtn()
        .clickRegContinueButton();
      navigationMenu.clickLogout();
    }
  });

  // Delete the account after each test unless it's Test Case 5
  afterEach(function () {
    if (this.currentTest.title !== 'Test Case 5 - Register User with existing email') {
      navigationMenu.clickDeleteAccount();
    }
  });

  it('Test Case 1 - Register User', () => {
    signUpLoginPage = navigationMenu.clickSignupLogin();
    signUpLoginPage
      .fillSignupForm(userData.userName, email)
      .clickSignupButton()
      .fillAccountInformation(userData.password)
      .fillAddressDetails(address)
      .clickCreateAccountBtn()
      .clickRegContinueButton();
    navigationMenu.clickHome().verifyLoggedIn(userData.userName);
  });

  it('Test Case 2 - Login User with correct email and password', () => {
    signUpLoginPage = navigationMenu.clickSignupLogin();
    signUpLoginPage
      .fillLoginForm(email, userData.password)
      .clickLoginButton();
    navigationMenu.clickHome().verifyLoggedIn(userData.userName);
  });

  it('Test Case 3 - Login User with incorrect email and password', () => {
    signUpLoginPage = navigationMenu.clickSignupLogin();
    signUpLoginPage
      .fillLoginForm(incorrectEmail, 'incorrectpassword')
      .clickLoginButtonExpectingError()
      .verifyLoginErrorMessage();
    signUpLoginPage.fillLoginForm(email, userData.password).clickLoginButton();
  });

  it('Test Case 4 - Logout User', () => {
    signUpLoginPage = navigationMenu.clickSignupLogin();
    signUpLoginPage.fillLoginForm(email, userData.password).clickLoginButton();
    navigationMenu.clickLogout();
    signUpLoginPage.verifyLoginForm();
    signUpLoginPage.fillLoginForm(email, userData.password).clickLoginButton();
  });

  it('Test Case 5 - Register User with existing email', () => {
    signUpLoginPage = navigationMenu.clickSignupLogin();
    signUpLoginPage
      .fillSignupForm(userData.userName, email)
      .clickSignupButtonExpectingError()
      .verifySignupErrorMessage();
  });
});