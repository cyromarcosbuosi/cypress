import BasePage from "./basePage.js";
var faker = require("faker");
const users = require("../fixtures/users.js");

export default class RegistrationPage extends BasePage {
  constructor() {
    super();
  }

  submitEmailBtn = "#SubmitCreate > span";
  emailCreateField = "#email_create";
  emailField = "#email";
  passwordField = "#passwd";
  submitLoginbtn = "#SubmitLogin > span";

  inputRegisterEmailField() {
    cy.get(this.emailCreateField).type(faker.internet.email());
  }

  inputEmailCredentials() {
    cy.get(this.emailField).type(users.TEST_USER.email);
    cy.get(this.passwordField).type(users.TEST_USER.pswd);
  }

  submitLogin() {
    cy.get(this.submitLoginbtn).click({ force: true });
  }
}
