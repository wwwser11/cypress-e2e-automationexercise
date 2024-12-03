import HomePage from './HomePage'
import ContactUsPage from './ContactUsPage'
import SignUpLoginPage from './SignUpLoginPage'
import CartPage from './CartPage';

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

    //
    buttonHighlightedColor = "rgb(255, 165, 0)";

    // Methods to click on navigation elements, updated to support chaining
    clickIcon() {
        this.getIconNavBtn().click();
        return new HomePage;
    }

    clickHome() {
        this.getHomeNavBtn().click();
        return new HomePage;
    }

    verifyHomeButtonHighlighted() {
        this.getHomeNavBtn().should("have.css", "color", this.buttonHighlightedColor);
        return this;
    }

    clickProducts() {
        this.getProductsNavBtn().click();
        //need a return page
    }

    clickCart() {
        this.getCartNavBtn().click();
        return new CartPage;
    }

    verifyCartButtonHighlighted() {
        this.getCartNavBtn().should("have.css", "color", this.buttonHighlightedColor);
        return this;
    }


    clickTestCases() {
        this.getTestCasesNavBtn().click();
        //need a return page
    }

    clickApiTesting() {
        this.getApiTestingNavBtn().click();
        //need a return page
    }

    clickVideoTutorials() {
        this.getVideoTutNavBtn().click();
        //need a return page
    }

    clickContactUs() {
        this.getContactUsNavBtn().click();
        return new ContactUsPage;
    }

    clickSignupLogin() {
        this.getSignupLoginNavBtn().click();
        return new SignUpLoginPage;
    }

    clickLogout() {
        this.getLogoutNavBtn().click();
        return new SignUpLoginPage;
    }

    clickDeleteAccount() {
        this.getDeleteAccountNavBtn().click();
        return new HomePage;
    }
}

export default NavigationMenu;
