/// <reference types="cypress" />
import AuthPage from '../../pageObjects/AuthPage';

describe('Automation Exercise Test Cases', () => {
  const authPage = new AuthPage();
  const userName = 'Iana';
  const email = `email${Date.now()}@g.com`;
  const password = 'password';
  const incorrectEmail = `incorrectemail${Date.now()}@g.com`;
  const incorrectPass = 'incorrectpassword';

  beforeEach(function () {
    if (this.currentTest.title !== 'Test Case 1 - Register User') {
      authPage.navigateToHome();
      authPage.registerUser(userName, email, password);
      authPage.logout();
      authPage.navigateToHome();
      authPage.navigationMenu.clickSignupLogin();
    }
  });

  afterEach(function () {
    if (this.currentTest.title !== 'Test Case 5 - Register User with existing email') {
      authPage.deleteAccount();
    }
  });

  it('Test Case 1 - Register User', () => {
    authPage.navigateToHome();
    authPage.navigationMenu.clickSignupLogin();
    authPage.fillSignupForm(userName, email);
    authPage.clickSignupButton()
    authPage.fillAccountInformation(password);
    authPage.fillAddressDetails();
    authPage.clickCreateAccountBtn();
    authPage.verifyAccountCreated();
    authPage.clickRegContinueButton()
    authPage.verifyLoggedIn(userName);
  });
  it('Test Case 2 - Login User with correct email and password', () => {
    authPage.login(email, password);
    authPage.clickLoginButton()
    authPage.verifyLoggedIn(userName);
  });
  it('Test Case 3 - Login User with incorrect email and password', () => {
    authPage.login(incorrectEmail, incorrectPass);
    authPage.clickLoginButton()
    authPage.verifyLoginError();
    //needs prep action before deleteAccount
    authPage.navigateToLogin();
    authPage.login(email, password);
    authPage.clickLoginButton();
  });
  it('Test Case 4 - Logout User', () => {
    authPage.login(email, password);
    authPage.clickLoginButton();
    authPage.verifyLoggedIn(userName);
    authPage.logout();
    authPage.verifyLoginForm
    //needs prep action before deleteAccount
    authPage.navigateToLogin();
    authPage.login(email, password);
    authPage.clickLoginButton();
  });
  it('Test Case 5 - Register User with existing email', () => {
    authPage.fillSignupForm(userName, email);
    authPage.clickSignupButton();
    authPage.verifySignupErrorMsg();
  });
});