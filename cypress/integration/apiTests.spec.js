import { BASE } from "../fixtures/base.js";
import BasePage from "../pageObjects/basePage.js";

describe("Simple api testing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Hits the map api and retrieve available fields for the user", () => {
    cy.request(BASE.map).then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.include('id="addressInput"');
      expect(response.body).to.include('name="search_locations"');
    });
  });
});
