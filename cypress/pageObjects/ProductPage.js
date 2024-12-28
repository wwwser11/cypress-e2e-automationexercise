
class ProductPage {

    // Locators as Getter Functions
    getAllProductsTitile = () => cy.get('.features_items h2.title')
    getAllProductsDiv = () => cy.get('.features_items')
    getAllProductsList = () => cy.get('.features_items .col-sm-4')
    getProductSearchField = () => cy.get('#search_product')
    getSubmitSearchButton = () => cy.get('#submit_search')
    getProductList = () => cy.get('.features_items .col-sm-4')
    getModalContinueShoppingButton = () => cy.get('button[data-dismiss="modal"]')
    getModalViewCartButton = () => cy.get('.modal-body [href="/view_cart"]')
    getProduct = (index) => cy.get('.col-sm-4 .productinfo').eq(index) 
    getProductName = (index) => cy.get('.col-sm-4 .productinfo p').eq(index).invoke('text');
    getProductAddToCartButton = (index) => cy.get('.col-sm-4 .productinfo').eq(index).find('.add-to-cart')

    getViewProductlink = (index) => cy.get('.choose .nav').eq(index)



    verifyAllProductsTitileVisible () {
        this.getAllProductsTitile().should('be.visible');
        return this;
    }

    verifyAllProductsListVisible () {
        this.getAllProductsList().should('be.visible');
        return this;
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

    clickModalContinueShoppingButton (){
        this.getModalContinueShoppingButton().click();
        return this;
    }

    clickModalViewCartButton () {
        this.getModalViewCartButton().click();
        return this;
    }

    addProductToCart (index) {
        this.getProduct(index).realHover();
        this.getProductAddToCartButton(index).click();
        return this;
    }

    clickViewProduct (index) {
        this.getViewProductlink(index).click()
        return this;
    }

}

export default ProductPage;