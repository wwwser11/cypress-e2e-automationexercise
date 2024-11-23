class NavigationMenu {
    // Base URL
baseUrl = 'https://automationexercise.com';

// Navigation Locators
homeNavBtn = '.nav a[href="/"]'; 
productsNavBtn =  '.nav a[href="products"]'
cartNavBtn =  '.nav a[href="/view_cart"]'
testCasesNavBtn =  '.nav a[href="/test_cases"]'
apiTestingNavBtn =  '.nav a[href="/api_list"]'
videoTutNavBtn =  '.nav a[href="https://www.youtube.com/c/AutomationExercise"]'
contactUsNavBtn =  '.nav a[href="/contact_us"]'
signupLoginNavBtn = '.nav a[href="/login"]'; 
logoutNavBtn = '.nav a[href="/logout"]'; 
deleteAccountNavBtn = '.navbar-nav a[href="/delete_account"]';
iconNavBtn = 'a [src="/static/images/home/logo.png"]' // navigation menu icon

// Methods to click on navigation elements
clickIcon() {
    cy.get(this.iconNavBtn).click();
}

clickHome() {
    cy.get(this.homeNavBtn).click();
}

clickProducts() {
    cy.get(this.productsNavBtn).click();
}

clickCart() {
    cy.get(this.cartNavBtn).click();
}

clickTestCases() {
    cy.get(this.testCasesNavBtn).click();
}

clickApiTesting() {
    cy.get(this.apiTestingNavBtn).click();
}

clickVideoTutorials() {
    cy.get(this.videoTutNavBtn).click();
}

clickContactUs() {
    cy.get(this.contactUsNavBtn).click();
}

clickSignupLogin() {
    cy.get(this.signupLoginNavBtn).click();
}

clickLogout() {
    cy.get(this.logoutNavBtn).click();
}

clickDeleteAccount() {
    cy.get(this.deleteAccountNavBtn).click();
}
}

export default new NavigationMenu();
//общий компонент, используемый на всех страницах. 
//Нет смысла создавать его заново для каждой страницы, поэтому экспортируется готовый экземпляр.