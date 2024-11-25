class NavigationMenu {

    // Navigation Locators as Getter Functions
    getHomeNavBtn = () => cy.get('.nav a[href="/"]');
    getProductsNavBtn = () => cy.get('.nav a[href="products"]');
    getCartNavBtn = () => cy.get('.nav a[href="/view_cart"]');
    getTestCasesNavBtn = () => cy.get('.nav a[href="/test_cases"]');
    getApiTestingNavBtn = () => cy.get('.nav a[href="/api_list"]');
    getVideoTutNavBtn = () => cy.get('.nav a[href="https://www.youtube.com/c/AutomationExercise"]');
    getContactUsNavBtn = () => cy.get('.nav a[href="/contact_us"]');
    getSignupLoginNavBtn = () => cy.get('.nav a[href="/login"]');
    getLogoutNavBtn = () => cy.get('.nav a[href="/logout"]');
    getDeleteAccountNavBtn = () => cy.get('.navbar-nav a[href="/delete_account"]');
    getIconNavBtn = () => cy.get('a [src="/static/images/home/logo.png"]');

    // Methods to click on navigation elements, updated to support chaining
    clickIcon() {
        this.getIconNavBtn().click();
        return this; // Enable chaining
    }

    clickHome() {
        this.getHomeNavBtn().click();
        return this; // Enable chaining
    }

    clickProducts() {
        this.getProductsNavBtn().click();
        return this; // Enable chaining
    }

    clickCart() {
        this.getCartNavBtn().click();
        return this; // Enable chaining
    }

    clickTestCases() {
        this.getTestCasesNavBtn().click();
        return this; // Enable chaining
    }

    clickApiTesting() {
        this.getApiTestingNavBtn().click();
        return this; // Enable chaining
    }

    clickVideoTutorials() {
        this.getVideoTutNavBtn().click();
        return this; // Enable chaining
    }

    clickContactUs() {
        this.getContactUsNavBtn().click();
        return this; // Enable chaining
    }

    clickSignupLogin() {
        this.getSignupLoginNavBtn().click();
        return this; // Enable chaining
    }

    clickLogout() {
        this.getLogoutNavBtn().click();
        return this; // Enable chaining
    }

    clickDeleteAccount() {
        this.getDeleteAccountNavBtn().click();
        return this; // Enable chaining
    }
}

export default NavigationMenu;
