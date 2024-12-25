import ProductDetailPage from "./ProductDetailPage"

class ProductPage {

    // Locators as Getter Functions
    getAllProductsTitile = () => cy.get('.features_items h2.title')
    getAllProductsDiv = () => cy.get('.features_items')
    getAllProductsList = () => cy.get('.features_items .col-sm-4')
    getFirstProductViewLink = () => cy.get('[href="/product_details/1"]')
    getProductSearchField = () => cy.get('#search_product')
    getSubmitSearchButton = () => cy.get('#submit_search')
    getProductList = () => cy.get('.features_items .col-sm-4')
    

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

    clickSubmitSearchButton () {
        this.getSubmitSearchButton().click();
        return this;
    }

    fillProductSearchField (product) {
        this.getProductSearchField().clear().type(product);
        return this;
    }

    searchProduct(product){
        this.fillProductSearchField(product)
        this.clickSubmitSearchButton()
        return this;
    }

    verifyAllProductsTitleContainsText (category, subcategory) {
        this.getAllProductsTitile().should('have.text', `${category} - ${subcategory} Products`);
        return this;
    }

}

export default ProductPage;