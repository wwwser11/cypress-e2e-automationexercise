/// <reference types="cypress" />

import CartPage from "../../pageObjects/CartPage";
import CheckoutPage from "../../pageObjects/CheckoutPage";
import HomePage from "../../pageObjects/HomePage";
import NavigationMenu from "../../pageObjects/NavigationMenu";
import PaymentPage from "../../pageObjects/PaymentPage";
import ProductPage from "../../pageObjects/ProductPage";
import SignUpLoginPage from "../../pageObjects/SignUpLoginPage";
import { generateUniqueEmail } from '../../support/utils';

describe('Automation Exercise Test Cases', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const navigationMenu = new NavigationMenu;
    const cartPage = new CartPage;
    const signUpLoginPage = new SignUpLoginPage;
    const checkoutPage = new CheckoutPage;
    const paymentPage = new PaymentPage;
    let userData;
    let address;
    let email;

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
        });
    });

    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        homePage.navigateToHome()
    })

    it('Test Case 14: Place Order: Register while Checkout', function () {
        productPage.addFirstProductToCart()
            .clickModalViewCartButton();
        cartPage.verifyCartInfoTableVisible()
            .clickProceedToCheckoutButton();
        checkoutPage.clickModalRegisterLoginButton();
        signUpLoginPage.registerNewUser(userData, address, email);
        homePage.verifyLoggedIn(userData.userName);
        navigationMenu.clickCart();
        cartPage.clickProceedToCheckoutButton();
        checkoutPage.getDeliveryNameField().should('have.text', `. ${address.firstName} ${address.lastName}`) 
        checkoutPage.getDeliveryAddressField().invoke('text')
            .then((text) => {
                const cleanedText = text.trim().replace(/\s+/g, ' '); 
                expect(cleanedText).to.equal(`${address.city} ${address.state} ${address.zipcode}`);
        });
        checkoutPage.fillCommentAria(userData.review)
            .clickPlaceOrderButton();
        paymentPage.fillCardInfo(`${address.firstName} ${address.lastName}`, address.cardNum, address.cvc, address.expMonth, address.expYear);
        paymentPage.clickPayButton();


        paymentPage.getOrderPlacedSign().should('be.visible');
    })

})