import LandingPage from '../pages/landing_page.js';
import selectors from "../support/selectors.js";
var landingpage = new LandingPage();

class LoginPage {

  getInputEmail() {
    return cy.get(selectors.login_page.input_email);
  }
  getInputPassword() {
    return cy.get(selectors.login_page.input_password);
  }
  getLoginBtn() {
    return cy.get(selectors.login_page.login_btn);
  }
  getCloseBtn() {
    return cy.get(selectors.login_page.close_btn);
  }
  
  login(username, password) {
    landingpage.getLoginBtn().click();
    this.getInputEmail().type(username);
    this.getInputPassword().type(password);
    this.getLoginBtn().click();
  }
  enterUsernamePassword(username, password) {
    landingpage.getLoginBtn().click();
    this.getInputEmail().type(username);
    this.getInputPassword().type(password);
  }
  verfiyLabelsOnLoginPage() {
    cy.get('form').contains('Email');
    cy.get('form').contains('Password');
  }

}
export default LoginPage;