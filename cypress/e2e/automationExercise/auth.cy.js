/// <reference types="cypress" />

describe('Automation Exersize Test Cases', () => {

    const userName = 'Iana';
    const email = `email${Date.now()}@g.com`;
    const pass = 'password';
    const incorrectEmail = `incorrectemail${Date.now()}@g.com`
    const incorrectPass = 'incorrectpassword';

    describe('Test Case 1', () => {
        it('Register User', () => {
            cy.visit('http://automationexercise.com/')
            cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
            cy.get('.nav a[href="/login"]').click();
            cy.get('.signup-form h2').should('be.visible').should('have.text', 'New User Signup!');
            cy.get('.signup-form input[name="name"]').type(`${userName}`);
            cy.get('.signup-form input[name="email"]').type(email);
            cy.get('.signup-form button').click();
            cy.get('.login-form h2:first-child').should('be.visible').should('have.text', 'Enter Account Information');
            cy.get('#id_gender2').click();
            cy.get('#password').type('password');
            cy.get('#days').select('1');
            cy.get('#months').select('1');
            cy.get('#years').select('2000');
            cy.get('#optin').check();
            cy.get('#newsletter').check();
            cy.get('#first_name').type('Iana2');
            cy.get('#last_name').type('Li');
            cy.get('#company').type('PM');
            cy.get('#address1').type('MSK');
            cy.get('#address2').type('LA');
            cy.get('#country').select('United States');
            cy.get('#state').type('CA');
            cy.get('#city').type('Los Angeles');
            cy.get('#zipcode').type('90015');
            cy.get('#mobile_number').type('8722941111');
            cy.get('button[data-qa="create-account"]').click();
            cy.get('h2[data-qa="account-created"').should('be.visible').should('have.text', "Account Created!");
            cy.get('a[data-qa="continue-button"').click();
            cy.get('.navbar-nav li:last-child a').should('be.visible').and('contain', `Logged in as ${userName}`);
            cy.get('.navbar-nav li:last-child a b').should('have.css', 'font-weight', '700')
            cy.get('.navbar-nav a[href="/delete_account"]').click();
            cy.get('h2.title').should('have.text', 'Account Deleted!');
            cy.get('a[data-qa="continue-button"').click();
            cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')

        })

    })
    describe('Test Case 2 and 3', () => {

        beforeEach(() => {
            cy.visit('http://automationexercise.com/')
            cy.get('.nav a[href="/login"]').click();
            cy.get('.signup-form input[name="name"]').type(`${userName}`);
            cy.get('.signup-form input[name="email"]').type(email);
            cy.get('.signup-form button').click();
            cy.get('#id_gender2').click();
            cy.get('#password').type(pass);
            cy.get('#days').select('1');
            cy.get('#months').select('1');
            cy.get('#years').select('2000');
            cy.get('#optin').check();
            cy.get('#newsletter').check();
            cy.get('#first_name').type('Iana2');
            cy.get('#last_name').type('Li');
            cy.get('#company').type('PM');
            cy.get('#address1').type('MSK');
            cy.get('#address2').type('LA');
            cy.get('#country').select('United States');
            cy.get('#state').type('CA');
            cy.get('#city').type('Los Angeles');
            cy.get('#zipcode').type('90015');
            cy.get('#mobile_number').type('8722941111');
            cy.get('button[data-qa="create-account"]').click();
            cy.get('a[data-qa="continue-button"').click();
            cy.get('.nav a[href="/logout"').click();
        })

        it('Test Case 2: Login User with correct email and password', () => {
            cy.visit('http://automationexercise.com/');
            cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
            cy.get('.nav a[href="/login"]').click();
            cy.get('.login-form h2').should('be.visible').should('have.text', "Login to your account");
            cy.get('.login-form input[name="email"]').type(email);
            cy.get('.login-form input[name="password"]').type(pass);
            cy.get('[data-qa="login-button"]').click();
            cy.get('.navbar-nav li:last-child a').should('be.visible').and('contain', `Logged in as ${userName}`);
            cy.get('.navbar-nav li:last-child a b').should('have.css', 'font-weight', '700');
            cy.get('.navbar-nav a[href="/delete_account"]').click();
            cy.get('h2.title').should('have.text', 'Account Deleted!');
        })
        
        it('Test Case 3: Login User with incorrect email and password', () => {
            cy.visit('http://automationexercise.com/');
            cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
            cy.get('.nav a[href="/login"]').click();
            cy.get('.login-form h2').should('be.visible').should('have.text', "Login to your account");
            cy.get('.login-form input[name="email"]').type(incorrectEmail);
            cy.get('.login-form input[name="password"]').type(incorrectPass);
            cy.get('[data-qa="login-button"]').click();
            cy.get('[action="/login"] p').should('be.visible').should('have.text', "Your email or password is incorrect!")
        })
    })

})