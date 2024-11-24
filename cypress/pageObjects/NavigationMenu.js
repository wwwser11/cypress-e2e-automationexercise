
class NavigationMenu {
    // Base URL
    baseUrl = 'https://automationexercise.com';

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

    // Methods to click on navigation elements, updated to use Getter Functions
    clickIcon() {
        this.getIconNavBtn().click();
    }

    clickHome() {
        this.getHomeNavBtn().click();
    }

    clickProducts() {
        this.getProductsNavBtn().click();
    }

    clickCart() {
        this.getCartNavBtn().click();
    }

    clickTestCases() {
        this.getTestCasesNavBtn().click();
    }

    clickApiTesting() {
        this.getApiTestingNavBtn().click();
    }

    clickVideoTutorials() {
        this.getVideoTutNavBtn().click();
    }

    clickContactUs() {
        this.getContactUsNavBtn().click();
    }

    clickSignupLogin() {
        this.getSignupLoginNavBtn().click();
    }

    clickLogout() {
        this.getLogoutNavBtn().click();
    }

    clickDeleteAccount() {
        this.getDeleteAccountNavBtn().click();
    }
}

export default new NavigationMenu();
