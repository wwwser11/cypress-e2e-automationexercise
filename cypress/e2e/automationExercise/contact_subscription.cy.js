/// <reference types="cypress" />
import NavigationMenu from '../../pageObjects/NavigationMenu';
import SignUpLoginPage from '../../pageObjects/SignUpLoginPage';
import RegistrationPage from '../../pageObjects/RegistrationPage';
import ContactUsPage from '../../pageObjects/ContactUsPage';
import HomePage from '../../pageObjects/HomePage';
import { generateUniqueEmail } from '../../support/utils';

describe('Automation Exercise Test Cases', () => {
    const navigationMenu = new NavigationMenu();
    const homePage = new HomePage();
    const contactUsPage = new ContactUsPage();
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

        // create a test file
        cy.writeFile('cypress/fixtures/tempFile.txt', 'This is a test file');
    });

    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        homePage.navigateToHome()
    });

    it.only('Test Case 6: Contact Us Form', () => {
        navigationMenu.verifyHomeButtonHighlighted()
            .clickContactUs();
        contactUsPage.verifygetInTouchSighVisible()
            .fillContactForm(userData.userName, email)
            //file upload needs
            .attachFile('tempFile.txt')
            .clickSubmitButton()
            .okToProceedAlert()
            .verifySuccessMessageVisible()
    });
});