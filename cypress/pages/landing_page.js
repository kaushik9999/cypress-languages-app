import selectors from "../support/selectors.js";
class LandingPage {
    
    getLoginBtn() {
        return cy.get(selectors.landing_page.login_btn);
    }
    clickLoginBtn() {
        
        cy.get(selectors.landing_page.login_btn).click();
    }

}
export default LandingPage;