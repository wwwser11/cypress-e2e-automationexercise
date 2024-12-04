import ProductDetailPage from "./ProductDetailPage"

class ProductPage {

    // Locators as Getter Functions
    getAllProductsTitile = () => cy.get('.features_items h2.title')
    getAllProductsDiv = () => cy.get('.features_items')
    getAllProductsList = () => cy.get('.features_items .col-sm-4')
    getFirstProductViewLink = () => cy.get('[href="/product_details/1"]')
    

    verifyAllProductsTitileVisible () {
        this.getAllProductsTitile().should('be.visible');
        return this;
    }

    verifyAllProductsListVisible () {
        this.getAllProductsList().should('be.visible');
        return this;
    }

    clickFirstProductViewLink () {
        this.getFirstProductViewLink().click();
        return new ProductDetailPage;
    }



}

export default ProductPage;