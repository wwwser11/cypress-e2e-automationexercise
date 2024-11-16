
/// <reference types="cypress" />

describe('Automation Exersize Test Cases', () => {

    const userName = 'Iana';
    const email = `email${Date.now()}@g.com`;
    const pass = 'password';
    const incorrectEmail = `incorrectemail${Date.now()}@g.com`
    const incorrectPass = 'incorrectpassword';

    it('Test Case 6: Contact Us Form', () => {
        const fileName = "HTTP_Status.pdf";
        cy.visit("https://www.automationexercise.com/");
        cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
        cy.get('a[href="/contact_us"]').should("be.visible").click();
        cy.get("div h2").contains("Get In Touch").should("be.visible");
        cy.get('input[data-qa="name"]').type("Patrick");
        cy.get('input[data-qa="email"]').type("a@gmail.com");
        cy.get('input[data-qa="subject"]').type("About");
        cy.get("#message.form-control").type("Everything looks good!");
        // cy.get('input.form-control[type="file"]').attachFile('fileName');
        cy.get('input[data-qa="submit-button"]').click();
        cy.on("window:alert", (text) => {
            expect(text).to.equal("Press OK to proceed").click("OK");
            cy.get(" div.status.alert.alert-success")
                .should("be.visible")
                .should(
                    "have.text",
                    "Success! Your details have been submitted successfully."
                );
            cy.get("#form-section .fa fa-angle-double-left").text(" Home").click();
            cy.get('.nav a[href="/"]').should(
                "have.css",
                "color",
                "rgb(255, 165, 0)"
            );
        });
    });
});