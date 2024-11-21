# automationexerciseCom
## AutomationExercise Testing Project

This repository contains automated test scripts for AutomationExercise, a practice website for QA engineers to enhance their skills in automation and API testing.

---

## Project Overview

The goal of this project is to develop automated tests for the key functionalities of the AutomationExercise website. Test cases are structured within the repository and automated using the Cypress testing framework.

---

## Key Components

- **Test Cases**: Detailed test cases for various features of the AutomationExercise website.
- **Automated Tests**: Cypress-based scripts that automate the execution of test cases, covering UI interactions and validations.
- **Page Object Model (POM)**: Organized classes representing individual pages of the website to enhance test structure and maintainability.

---

## Tools and Frameworks

- **Cypress**: Primary testing framework for automating UI and API tests.
- **JavaScript**: The main scripting language for Cypress tests.
- **Page Object Classes**: Encapsulated page-related logic and locators.

---

## Test Structure

The test cases for AutomationExercise are organized into logical groups for clarity and maintainability. Each group contains specific test cases focused on a particular functionality of the website.

### 1. Authentication Tests (`auth.cy.js`)
- **Test Case 1**: Register User
- **Test Case 2**: Login User with correct email and password
- **Test Case 3**: Login User with incorrect email and password
- **Test Case 4**: Logout User
- **Test Case 5**: Register User with existing email

### 2. Contact and Subscription Tests (`contact_subscription.cy.js`)
- **Test Case 6**: Contact Us Form
- **Test Case 10**: Verify Subscription on home page
- **Test Case 11**: Verify Subscription on Cart page

### 3. Product Tests (`product.cy.js`)
- **Test Case 8**: Verify All Products and product detail page
- **Test Case 9**: Search Product
- **Test Case 18**: View Category Products
- **Test Case 19**: View & Cart Brand Products
- **Test Case 21**: Add review on product

### 4. Cart and Checkout Tests (`cart_checkout.cy.js`)
- **Test Case 7**: Verify Test Cases Page
- **Test Case 12**: Add Products in Cart
- **Test Case 13**: Verify Product quantity in Cart
- **Test Case 14**: Place Order: Register while Checkout
- **Test Case 15**: Place Order: Register before Checkout
- **Test Case 16**: Place Order: Login before Checkout
- **Test Case 17**: Remove Products from Cart
- **Test Case 20**: Search Products and Verify Cart After Login
- **Test Case 22**: Add to cart from Recommended items
- **Test Case 23**: Verify address details on checkout page
- **Test Case 24**: Download Invoice after purchase order

### 5. UI Tests (`ui.cy.js`)
- **Test Case 25**: Verify Scroll Up using 'Arrow' button and Scroll Down functionality
- **Test Case 26**: Verify Scroll Up without 'Arrow' button and Scroll Down functionality

---

## Page Object Classes

To maintain scalability and improve test readability, the project uses the Page Object Model (POM). Each page of the AutomationExercise website is represented as a class encapsulating its locators and actions.

### Available Page Object Classes

The Page Object classes are stored in the [`pageObjects`](./cypress/pageObjects) folder:

- **`AuthPage.js`**: Handles authentication functionalities, such as login, signup, and logout.
- **`ProductPage.js`**: Manages interactions with the product listing and detail pages.
- **`CheckoutPage.js`**: Covers checkout flows, including placing orders and payment processes.
- **`ContactUsPage.js`**: Focuses on the "Contact Us" form and related actions.
- **`UiPage.js`**: Manages general UI elements and actions, such as scroll or navigation interactions.

Each class contains:
- **Locators**: Defined as properties for easy access and maintainability.
- **Methods**: Encapsulated actions for interacting with the page elements.

---

## Getting Started

Follow these instructions to set up and run Cypress tests for AutomationExercise.

### Prerequisites

- [Node.js](https://nodejs.org/) installed (recommended version 12 or higher).
- [Git](https://git-scm.com/) installed.
- [Cypress](https://www.cypress.io/) will be installed automatically with the project setup.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>

2. **Navigate into the project directory:**
   ```bash
    cd <repository-local>
3. **Install project dependencies (only if not previously installed):**
    ```bash
    npm ci

### Running Tests

After installation, you can run the tests using Cypress.

1. **Run tests in the Cypress GUI: This opens the Cypress Test Runner interface, where you can see and run individual tests.**
   ```bash
    npx cypress open
2. **Run tests in headless mode: This will execute all tests in the command line without opening the GUI.**
   ```bash
   npx cypress run
### Project Structure
The test cases are organized into the following files:

- auth.cy.js: Authentication Tests
- contact_subscription.cy.js: Contact and Subscription Tests
- product.cy.js: Product Tests
- cart_checkout.cy.js: Cart and Checkout Tests
- ui.cy.js: UI Tests
- Each file contains specific test cases grouped by functionality for easier maintenance and scalability.

### Notes
This project is designed for educational purposes and practice with Cypress. The tests cover essential functionalities of the AutomationExercise website.

Enjoy testing!