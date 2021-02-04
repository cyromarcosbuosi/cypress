/// <reference types= "cypress"/>
import { BASE } from "../fixtures/base.js";
import RegistrationPage from "../pageObjects/registrationPage";
const registration = new RegistrationPage();

describe("Login", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    registration.nagivate(BASE.baseUrl, BASE.registration);
  });

  it("Successfully login", () => {
    registration.inputEmailCredentials();
    registration.submitLogin();
  });
});
