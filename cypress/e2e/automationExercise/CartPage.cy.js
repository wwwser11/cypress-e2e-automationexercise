/// <reference types="cypress" />

import CartPage from '../../pageObjects/CartPage';
import HomePage from '../../pageObjects/HomePage';
import NavigationMenu from '../../pageObjects/NavigationMenu';
import ProductDetailPage from '../../pageObjects/ProductDetailPage';
import ProductPage from '../../pageObjects/ProductPage';
import SignUpLoginPage from '../../pageObjects/SignUpLoginPage';
import { generateUniqueEmail } from '../../support/utils';

describe('Automation Exercise Test Cases', () => {
    const homePage = new HomePage();
    const navigationMenu = new NavigationMenu();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const productDetailPage = new ProductDetailPage();
    const signUpLoginPage = new SignUpLoginPage();
    let userData;
    let address;
    let email;

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
        });
    });

    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        homePage.navigateToHome();
        cy.log('define two products id for tests')
        productPage.getProductList().then(($products) => {
            const firstProductIndex = Cypress._.random(0, $products.length - 1);
            let secondProductIndex = Cypress._.random(0, $products.length - 1);

            while (secondProductIndex === firstProductIndex) {
                secondProductIndex = Cypress._.random(0, $products.length - 1);
            }

            cy.wrap(firstProductIndex).as('firstProductIndex');
            cy.wrap(secondProductIndex).as('secondProductIndex');
        });

        if (this.currentTest.title == 'Test Case 20: Search Products and Verify Cart After Login') {
            navigationMenu.clickSignupLogin();
            signUpLoginPage
                .fillSignupForm(userData.userName, email)
                .clickSignupButton()
                .fillAccountInformation(userData.password)
                .fillAddressDetails(address)
                .clickCreateAccountBtn()
                .clickRegContinueButton();
            navigationMenu.clickLogout();
            homePage.navigateToHome();
        }
    });

    it('Test Case 12: Add Products in Cart', function () {
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
                        cartPage.getShoppingListNames().then(($products) => {
                            const productsArr = $products.toArray().map(el => el.innerText.trim());


                            expect(productsArr).to.have.all.members([firstName, secondName]);
                        });
                    });
                });
            });
        });
    });

    it('Test Case 13: Verify Product quantity in Cart', function () {
        cy.get('@firstProductIndex').then((firstIndex) => {
            const randomQty = Cypress._.random(1, 10);
            cy.log(`Generated Item Quantity for Cart adding: ${randomQty}`);

            navigationMenu.verifyHomeButtonHighlighted();
            cy.log('acting with the prod: add to the cart + save the name + save qty')
            homePage.getProductName(firstIndex).then((name) => {
                cy.wrap(name).as('firstProductName');
            });
            homePage.clickViewProduct(firstIndex)
            productDetailPage.verifyReviewSignVisible()
                .setProductQty(randomQty)
                .clickAddToCartButton()
                .clickModalViewCartButton()


            cartPage.getProductQtyText().then((cartQty) => {
                expect(cartQty).to.equal(randomQty.toString());
            });
        });
    });

    it('Test Case 17: Remove Products From Cart', function () {
        cy.get('@firstProductIndex').then((firstIndex) => {
            cy.get('@secondProductIndex').then((secondIndex) => {
                navigationMenu.verifyHomeButtonHighlighted()
                    .clickProducts();

                cy.log('acting with the 1st prod: add to the cart + save the name')
                productPage.verifyAllProductsListVisible();
                productPage.getProductName(firstIndex).then((name) => {
                    cy.wrap(name).as('firstProductName');
                });
                productPage.addProductToCart(firstIndex)
                    .clickModalContinueShoppingButton();

                cy.log('acting with the 2nd prod: add to the cart + save the name')
                productPage.verifyAllProductsListVisible();
                productPage.getProductName(secondIndex).then((name) => {
                    cy.wrap(name).as('secondProductName');
                });
                productPage.addProductToCart(secondIndex);
                productPage.clickModalViewCartButton();

                //проверить что этого элемента с именем el больше нет  в корзине 
                cy.get('@firstProductName').then((prodName) => {
                    cy.log(`Removing product: ${prodName}`);
                    cartPage.deleteProductBasedOnName(prodName)


                    cartPage.getListProductNames().should('not.contain', prodName);
                });
            });
        });
    })

    it('Test Case 20: Search Products and Verify Cart After Login', function () {
        navigationMenu.verifyHomeButtonHighlighted()
            .clickProducts();
        productPage.verifyAllProductsListVisible()
        cy.fixture('productNames').then((data) => {
            const productName = Cypress._.sample(data.productsByName);
            productPage.searchProduct(productName)
                .getProductList().each(($el) => {
                    cy.wrap($el)
                        .find('p').first()
                        .invoke('text')
                        .then((text) => {
                            expect(text).to.eq(productName)
                        })
                    cy.wrap($el)
                        .find(productPage.productAddToCartButton).first().click()
                })
            productPage.clickModalViewCartButton()
            navigationMenu.clickSignupLogin()
            signUpLoginPage
                .fillLoginForm(email, userData.password)
                .clickLoginButton();
            navigationMenu.clickCart();


            cartPage.getFirstProductName().should('have.text', productName)
        })
    })

    it('Test Case 22: Add to cart from Recommended items', function () {
        homePage.verifyRecommendedItemsListVisible();
        productPage.getRecommendedActiveItemsList()
            .then(($products) => {
                const randomIndex = Cypress._.random(0, $products.length - 1);
                const ourProduct = $products.eq(randomIndex);

                cy.wrap(ourProduct)
                    .within(() => {
                        productPage.getRecItemName()
                            .invoke('text')
                            .then((title) => {
                                cy.log(`Selected the following product: ${title}`);
                                cy.wrap(title).as('productName');
                            });

                        productPage.getRecItemAddToCartButton().click()
                    });
                productPage.clickModalViewCartButton();
                

                cy.get('@productName').then((productName) => {
                    cartPage.getFirstProductName().invoke('text').then((cartProductName) => {
                        expect(cartProductName.trim()).to.equal(productName.trim());
                    });
                });

            })
    })
});
