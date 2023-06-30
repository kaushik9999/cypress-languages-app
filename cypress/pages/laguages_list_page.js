import selectors from "../support/selectors.js";

class LanguagesListPage {

    getHeaderText() {
        return cy.get(selectors.languages_list_page.page_heading);
    }
    getResetButton() {
        return cy.get(selectors.languages_list_page.reset_button);
    }
    getLanguageInputSearch() {
        return cy.get(selectors.languages_list_page.search_field);
    }

    verifyFilteredData(locator, dataset) {
        cy.get(locator).each(($el, index) => {
            expect($el.text()).to.equal(dataset[index]);
        })
    }
    typeInSearchbox(text) {
        this.getLanguageInputSearch().clear().type(text);
    }

}
export default LanguagesListPage;