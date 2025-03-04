/// <reference types="cypress" />
import NavigationMenu from '../../pageObjects/NavigationMenu';
import ContactUsPage from '../../pageObjects/ContactUsPage';
import HomePage from '../../pageObjects/HomePage';
import FooterPage from '../../pageObjects/FooterPage';
import { generateUniqueEmail } from '../../support/utils';


describe('Automation Exercise Test Cases', () => {
    const navigationMenu = new NavigationMenu();
    const homePage = new HomePage();
    const contactUsPage = new ContactUsPage();
    const footerPage = new FooterPage();
    let email;
    let incorrectEmail;
    let userData;
    let address;

    // Generate unique email addresses before the test suite runs
    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data;
        });

        cy.fixture('userAddress').then((data) => {
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

    after(() => {
        cy.task('deleteFile', 'cypress/fixtures/tempFile.txt');
    });

    it('Test Case 6: Contact Us Form', () => {
        navigationMenu.verifyHomeButtonHighlighted()
            .clickContactUs();
        contactUsPage.verifygetInTouchSighVisible()
            .fillContactForm(userData.userName, email)
            .attachFile('tempFile.txt')
            .clickSubmitButton()
            .okToProceedAlert()
            .verifySuccessMessageVisible()
    });

    it('Test Case 10: Verify Subscription in home page', () =>{
        navigationMenu.verifyHomeButtonHighlighted()
        footerPage.verifyFooterText()
            .fillSubscribeEmail(email)
            .clickSubmitSubscribeButton()
            .verifySuccessMessageVisible()
    })
    
    it('Test Case 11: Verify Subscription in Cart page', () =>{
        navigationMenu.verifyHomeButtonHighlighted()
            .clickCart()
        navigationMenu.verifyCartButtonHighlighted()
        footerPage.verifyFooterText()
            .fillSubscribeEmail(email)
            .clickSubmitSubscribeButton()
            .verifySuccessMessageVisible()
    })
});