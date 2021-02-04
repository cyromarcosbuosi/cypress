const users = require("../fixtures/users.js");
export default class CheckoutPage {
  proceedToCheckoutFlowBtn = ".cart_navigation > .button > span";
  termsCheckBox = '[id="cgv"]';
  userName = "#address_delivery > .address_firstname";
  userAddress = "#address_delivery > .address_address1";
  userCity = "#address_delivery > .address_city";
  userCountry = "#address_delivery > .address_country_name";
  userPhoneNumber = "#address_delivery > .address_phone";
  paymentMethod = ".bankwire";
  successOrderLbl = ".cheque-indent";

  proceedToCheckoutFlow() {
    return new Cypress.Promise((resolve, reject) => {
      if (cy.get(this.proceedToCheckoutFlowBtn).should("be.visible").click()) {
        resolve();
      } else {
        reject();
      }
    });
  }

  agreeWithTerms() {
    return new Cypress.Promise((resolve, reject) => {
      if (cy.get(this.termsCheckBox).click()) {
        resolve();
      } else {
        reject();
      }
    });
  }

  checkoutVerifyData() {
    cy.get(this.userName).should("contain.text", users.TEST_USER.name);
    cy.get(this.userAddress).should("contain.text", users.TEST_USER.address);
    cy.get(this.userCity).should("contain.text", users.TEST_USER.city);
    cy.get(this.userCountry).should("contain.text", users.TEST_USER.country);
    cy.get(this.userPhoneNumber).should("contain.text", users.TEST_USER.phone);
  }

  pickPaymentMethod() {
    return new Cypress.Promise((resolve, reject) => {
      if (cy.get(this.paymentMethod).click()) {
        resolve();
      } else {
        reject();
      }
    });
  }

  checkOrderConfirmation() {
    cy.get(this.successOrderLbl).should(
      "contain.text",
      "Your order on My Store is complete."
      //Aqui sinceramente eu preferia ter pegou outro seletor além da mensagem de sucesso.
      //Se o texto mudar meu teste falha.
    );
  }
}
