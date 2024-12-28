/// <reference types="cypress" />

import CartPage from '../../pageObjects/CartPage';
import HomePage from '../../pageObjects/HomePage';
import NavigationMenu from '../../pageObjects/NavigationMenu';
import ProductPage from '../../pageObjects/ProductPage';

describe('Automation Exercise Test Cases', () => {
    const homePage = new HomePage();
    const navigationMenu = new NavigationMenu();
    const productPage = new ProductPage();
    const cartPage = new CartPage();

    beforeEach(() => { 
        cy.clearCookies();
        cy.clearLocalStorage();
        homePage.navigateToHome();
        cy.log('define two products for tests')
        productPage.getProductList().then(($products) => {
            const firstProductIndex = Cypress._.random(0, $products.length - 1);
            let secondProductIndex = Cypress._.random(0, $products.length - 1);

            while (secondProductIndex === firstProductIndex) {
                secondProductIndex = Cypress._.random(0, $products.length - 1);
            }

            cy.wrap(firstProductIndex).as('firstProductIndex');
            cy.wrap(secondProductIndex).as('secondProductIndex');
        });
        
        cy.get('@firstProductIndex').then((firstIndex) => {
            cy.get('@secondProductIndex').then((secondIndex) => {
                cy.log(`Defined two products for tests: ${firstIndex}, ${secondIndex}`);
            });
        });
    });

    it('Test Case 12: Add Products in Cart2', function () {
        cy.get('@firstProductIndex').then((firstIndex) => {
            cy.get('@secondProductIndex').then((secondIndex) => {
                navigationMenu.verifyHomeButtonHighlighted()
                    .clickProducts();

                cy.log('acting with the 1st prod: add to the cart + save the name + back to shopping')
                productPage.verifyAllProductsListVisible();
                productPage.getProductName(firstIndex).then((name) => {
                    cy.wrap(name).as('firstProductName');
                });
                productPage.addProductToCart(firstIndex)
                    .clickModalContinueShoppingButton();

                cy.log('acting with the 2nd prod: add to the cart + save the name + move to the cart')
                productPage.verifyAllProductsListVisible();
                productPage.getProductName(secondIndex).then((name) => {
                    cy.wrap(name).as('secondProductName');
                });
                productPage.addProductToCart(secondIndex);
                productPage.clickModalViewCartButton();

                cy.log('cart products validation')
                cy.get('@firstProductName').then((firstName) => {
                    cy.get('@secondProductName').then((secondName) => {
                        console.log(cartPage.getShoppingList())
                        cartPage.getShoppingList().then(($products) => {
                            const productsArr = $products.toArray().map(el => el.innerText.trim());
                            cy.log(productsArr)
                            cy.log(firstName, secondName)


                            expect(productsArr).to.have.all.members([firstName, secondName]);
                        });
                    });
                });
            });
        });
    });

});
