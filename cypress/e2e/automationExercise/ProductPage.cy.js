/// <reference types="cypress" />
import NavigationMenu from '../../pageObjects/NavigationMenu';
import HomePage from '../../pageObjects/HomePage';
import ProductPage from '../../pageObjects/ProductPage';
import ProductDetailPage from '../../pageObjects/ProductDetailPage';


describe('Automation Exercise Test Cases', () => {
    const navigationMenu = new NavigationMenu();
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const productDetailPage = new ProductDetailPage

    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        homePage.navigateToHome()
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        navigationMenu.verifyHomeButtonHighlighted()
            .clickProducts();
        productPage.verifyAllProductsListVisible()
            .clickFirstProductViewLink()

        productDetailPage.verifyMainProductDetailPageElementsVisible();
    });

    it.only('Test Case 9: Search Product', () => {
        navigationMenu.verifyHomeButtonHighlighted()
            .clickProducts();
        productPage.verifyAllProductsListVisible()
        cy.fixture('productNames').then((data) => {
            const productName = data.productsByName
            productName.forEach((name) => {
            productPage.searchProduct(name)
                .getProductList().each(($el, i) => {
                        cy.wrap($el)
                        .find('p')
                        .invoke('text')
                        .then((text) => {
                            expect(text).to.eq.name
                        })
                })
            })
        })
    });

    it.only('Test Case 18: View Category Products', () =>{
        
    })
});
