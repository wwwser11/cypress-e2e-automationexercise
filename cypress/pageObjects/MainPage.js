import BasePage from './BasePage';

class MainPage extends BasePage {


    getLoggedInAsText = () => cy.get('.navbar-nav li:last-child a');

    // Method to verify the user is logged in
    verifyLoggedIn(username) {
        this.getLoggedInAsText().should('be.visible').and('contain', `Logged in as ${username}`);
        return this;
    }

}
export default MainPage;

