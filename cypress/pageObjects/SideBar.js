
class SideBar {

    // Locators as Getter Functions
    getSideBar = () => cy.get('.category-products#accordian')
    getCatregory = (sex) => cy.get(`.category-products#accordian [href="#${sex}"]`)
    getSubCategory = (num) => cy.get(`[href="/category_products/${num}"]`)

    verifySideBarIsVisible (){
        this.getSideBar().should('be.visible');
        return this;
    }

    clickCategory (sex) {
        this.getCatregory(sex).click()
        return this;
    }
    
    clickSubCategory(categorySex, subCategoryName) {
        return cy.fixture('productNames').then((data) => {
            let subCategoryNum = data.categories[categorySex]?.[subCategoryName]?.[0];

            cy.log(`Category ID: ${subCategoryName, subCategoryNum}`);

            if (subCategoryNum) {
                return this.getSubCategory(subCategoryNum).click();
            } else {
                throw new Error(`Subcategory "${subCategoryName}" not found for "${categorySex}".`);
            }
        });
    }
}

export default SideBar;