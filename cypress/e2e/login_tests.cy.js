/// <reference types="cypress" />
import LoginPage from '../pages/login_page.js'
import LanguagesList from '../pages/laguages_list_page.js'
import LandingPage from '../pages/landing_page.js';

var loginPage = new LoginPage();
var languagesListPage = new LanguagesList();
var landingpage = new LandingPage();

describe('GuildHawk Login Tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('test valid login', () => {
    loginPage.login(Cypress.env('username'), Cypress.env('password'));
    languagesListPage
      .getHeaderText()
      .should('be.visible')
      .should("have.text", "LanguagesList");
    cy.logout();
  })

  it('test invalid login - wrong username', () => {
    loginPage.login('test@wrongusername.com', Cypress.env('password'));
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Failed to login`);
    })
  })
  it('test invalid login - wrong password', () => {
    loginPage.login(Cypress.env('username'), 'wrongpassword');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Failed to login`);
    })
  })
  it('test invalid login - wrong username and wrong password', () => {
    loginPage.login('wrongusernam@jim.com', 'wrongpassword');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Failed to login`);
    })
  })
  it('test invalid login - blank username - login button should be disabled', () => {
    loginPage.enterUsernamePassword(' ', 'password');
    loginPage.getLoginBtn().should('be.disabled');
  })
  it('test invalid login - blank password - login button should be disabled', () => {
    loginPage.enterUsernamePassword('a@a.com', ' ');
    loginPage.getLoginBtn().should('be.disabled');
  })
  it('test invalid login - password < 6 chars - login button should be disabled', () => {
    loginPage.enterUsernamePassword('username@gmail.com', 'hfdkh');
    loginPage.getLoginBtn().should('be.disabled');
  })
  it('test invalid login - username without @ symbol - login button should be disabled', () => {
    loginPage.enterUsernamePassword('usemail.com', 'password');
    loginPage.getLoginBtn().should('be.disabled');
  })
  it('test login - input box labels', () => {
    loginPage.enterUsernamePassword('username', 'password');
    loginPage.verfiyLabelsOnLoginPage();
  })
  it('test from close button - should take user to landing screen', () => {
    loginPage.enterUsernamePassword('username', 'password');
    loginPage.getCloseBtn().click();
    landingpage.getLoginBtn().should('be.visible');
  })

})
