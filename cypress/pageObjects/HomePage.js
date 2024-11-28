
class HomePage {
    baseUrl = 'https://automationexercise.com';
    getLoggedInAsText = () => cy.get('.navbar-nav li:last-child a');

    navigateToHome() {
        cy.visit(this.baseUrl);
        return this; 
    }

    verifyLoggedIn(username) {
        this.getLoggedInAsText().should('be.visible').and('contain', `Logged in as ${username}`);
        return this;
    }


}
export default HomePage;