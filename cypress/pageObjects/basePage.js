export default class BasePage {
  nagivate(baseUrl, path) {
    cy.visit(baseUrl + path);
  }
}
