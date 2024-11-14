# automationexerciseCom
AutomationExercise Testing Project

This repository contains automated test scripts for AutomationExercise, a practice website for QA engineers to enhance their skills in automation and API testing.

Project Overview

The goal of this project is to develop automated tests for the key functionalities of the AutomationExercise website. Test cases will first be added to the repository in a structured format, then automated using the Cypress testing framework.

Key Components

Test Cases: Detailed test cases for various features of the AutomationExercise website.
Automated Tests: Cypress-based scripts that automate the execution of the test cases, covering both UI interactions and validations.
Tools and Frameworks

Cypress: Used as the primary testing framework for automating UI and API tests.
JavaScript/TypeScript: Main scripting languages for Cypress tests.
Getting Started

Clone this repository to your local machine.
Install the required dependencies.
Run the Cypress tests directly from the Cypress Test Runner.
This project serves as a learning resource for Cypress automation and is ideal for those practicing automation in e-commerce and API testing environments.

## Test Structure

The test cases for AutomationExercise are organized into logical groups for clarity and maintainability. Each group contains specific test cases focused on a particular functionality of the website.

### 1. Authentication Tests ([`auth.cy.js`](./cypress/e2e/automationExercise/auth.cy.js))

- **Test Case 1**: Register User
- **Test Case 2**: Login User with correct email and password
- **Test Case 3**: Login User with incorrect email and password
- **Test Case 4**: Logout User
- **Test Case 5**: Register User with existing email

### 2. Contact and Subscription Tests ([`contact_subscription.cy.js`](./cypress/e2e/automationExercise/contact_subscription.cy.js))

- **Test Case 6**: Contact Us Form
- **Test Case 10**: Verify Subscription on home page
- **Test Case 11**: Verify Subscription on Cart page

### 3. Product Tests ([`product.cy.js`](./cypress/e2e/automationExercise/product.cy.js))


- **Test Case 8**: Verify All Products and product detail page
- **Test Case 9**: Search Product
- **Test Case 18**: View Category Products
- **Test Case 19**: View & Cart Brand Products
- **Test Case 21**: Add review on product

### 4. Cart and Checkout Tests ([`cart_checkout.cy.js`](./cypress/e2e/automationExercise/cart_checkout.cy.js))


- **Test Case 7**: Verify Test Cases Page
- **Test Case 12**: Add Products in Cart
- **Test Case 13**: Verify Product quantity in Cart
- **Test Case 14**: Place Order: Register while Checkout
- **Test Case 15**: Place Order: Register before Checkout
- **Test Case 16**: Place Order: Login before Checkout
- **Test Case 17**: Remove Products from Cart
- **Test Case 20**: Search Products and Verify Cart After Login
- **Test Case 22**: Add to cart from Recommended items
- **Test Case 23**: Verify address details in checkout page
- **Test Case 24**: Download Invoice after purchase order

### 5. UI Tests ([`ui.cy.js`](./cypress/e2e/automationExercise/ui.cy.js))


- **Test Case 25**: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
- **Test Case 26**: Verify Scroll Up without 'Arrow' button and Scroll Down functionality
