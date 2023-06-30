/// <reference types="cypress" />
import selectors from '../support/selectors.js';
Cypress.Commands.add('login', () => {
  cy.get(selectors.landing_page.login_btn).click();
  cy.get(selectors.login_page.input_email).type(Cypress.env('username'));
  cy.get(selectors.login_page.input_password).type(Cypress.env('password'));
  cy.get(selectors.login_page.login_btn).click();
})
Cypress.Commands.add('logout', () => {
  cy.get(selectors.languages_list_page.logout).click();

})