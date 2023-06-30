/// <reference types="cypress" />
import LanguagesList from '../pages/laguages_list_page.js'
import selectors from '../support/selectors.js';
var languagesListPage = new LanguagesList();

describe('Languages List Tests', () => {
  let data;
  before('set up', () => {
    cy.fixture('lang_list_testdata').then(function (testdata) {
      data = testdata;
    })
    cy.visit('/');
    cy.login();
  })
  after('tear down', () => {
    cy.logout();
  })

  it('test search feature - with input portugal', () => {
    languagesListPage.typeInSearchbox("portugal");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.portugal.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.portugal.countries);
  })
  it('test search feature - with input canada', () => {
    languagesListPage.typeInSearchbox("canada");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.canada.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.canada.countries);
  })
  it('test search feature - with input chile', () => {
    languagesListPage.typeInSearchbox("chile");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.chile.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.chile.countries);
  })
  it('test search feature - with input united kingdom', () => {
    languagesListPage.typeInSearchbox("united kingdom");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.united_kingdom.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.united_kingdom.countries);
  })
  it('test search feature - with input australia', () => {
    languagesListPage.typeInSearchbox("australia");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.australia.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.australia.countries);
  })
  it('test search feature - with input united states', () => {
    languagesListPage.typeInSearchbox("united states");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.united_states.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.united_states.countries);
  })
  it('test search feature - with input ireland', () => {
    languagesListPage.typeInSearchbox("ireland");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.ireland.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.ireland.countries);
  })
  it('test search feature - with input peru', () => {
    languagesListPage.typeInSearchbox("peru");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.peru.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.peru.countries);
  })
  it('test search feature - with input iraq', () => {
    languagesListPage.typeInSearchbox("iraq");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.iraq.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.iraq.countries);
  })
  it('test search feature - with input sudan', () => {
    languagesListPage.typeInSearchbox("sudan");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.sudan.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.sudan.countries);
  })
  it('test search feature - with input ca', () => {
    languagesListPage.typeInSearchbox("ca");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.ca.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.ca.countries);
  })
  it('test search feature - with input can', () => {
    languagesListPage.typeInSearchbox("can");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.can.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.can.countries);
  })
  it('test search feature - with input cana', () => {
    languagesListPage.typeInSearchbox("cana");
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_languages, data.cana.languages);
    languagesListPage.verifyFilteredData(selectors.languages_list_page.regEx_filtered_countries, data.cana.countries);
  })
  it('test search feature - reset', () => {
    languagesListPage.typeInSearchbox("canada");
    languagesListPage.getResetButton().click();
    cy.get(selectors.languages_list_page.regEx_filtered_countries).contains('Spain')
  })

})
