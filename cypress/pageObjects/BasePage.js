import NavigationMenu from './NavigationMenu';

class BasePage {
    baseUrl = 'https://automationexercise.com';

    constructor() {
        this.navigationMenu = new NavigationMenu(); // Attach NavigationMenu for easy access 
    }

    // Navigate to the base URL
    navigateToHome() {
        cy.visit(this.baseUrl);
        return this; // Return the class instance for chaining
    }

    // Navigate to the home page via navigation menu
    goToHomeUsingNavMenu() {
        this.navigationMenu.clickHome(); // Нажимаем "Home" в меню
        return this; // Возвращаем текущий объект для цепочки
    }

    // Navigate to the products page via navigation menu
    goToProductsPageUsingNavMenu() {
        this.navigationMenu.clickProducts(); // Нажимаем "Products" в меню
        return this;
    }

    // Navigate to the cart page via navigation menu
    goToCartPageUsingNavMenu() {
        this.navigationMenu.clickCart(); // Нажимаем "Cart" в меню
        return this;
    }

    // Navigate to the test cases page via navigation menu
    goToTestCasesPageUsingNavMenu() {
        this.navigationMenu.clickTestCases(); // Нажимаем "Test Cases" в меню
        return this;
    }

    // Navigate to the API testing page via navigation menu
    goToApiTestingPageUsingNavMenu() {
        this.navigationMenu.clickApiTesting(); // Нажимаем "API Testing" в меню
        return this;
    }

    // Navigate to the video tutorials page via navigation menu
    goToVideoTutorialsPageUsingNavMenu() {
        this.navigationMenu.clickVideoTutorials(); // Нажимаем "Video Tutorials" в меню
        return this;
    }

    // Navigate to the contact us page via navigation menu
    goToContactUsPageUsingNavMenu() {
        this.navigationMenu.clickContactUs(); // Нажимаем "Contact Us" в меню
        return this;
    }

    // Navigate to the signup/login page via navigation menu
    goToSignupLoginPageUsingNavMenu() {
        this.navigationMenu.clickSignupLogin(); // Нажимаем "Signup/Login" в меню
        return this;
    }

    // Log out the user via navigation menu
    logoutUsingNavMenu() {
        this.navigationMenu.clickLogout(); // Нажимаем "Logout" в меню
        return this;
    }

    // Delete the account via navigation menu
    deleteAccountUsingNavMenu() {
        this.navigationMenu.clickDeleteAccount(); // Нажимаем "Delete Account" в меню
        return this;
    }

}

export default BasePage;
