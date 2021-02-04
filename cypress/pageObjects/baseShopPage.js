import { should } from "chai";
import BasePage from "./basePage";

export default class BaseShopPage extends BasePage {
  constructor() {
    super();
  }

  productNameLbl = ".product-name";
  addToCartBtn = ".ajax_add_to_cart_button > span";
  productDiv = ".right-block";
  successMessage = ".layer_cart_product > h2";
  successIcon = ".icon-ok";
  proceedToCheckoutBtn = ".button-container > .button-medium > span";

  checkProductName(product, expectation) {
    cy.find(this.productDiv);
    if (cy.get(this.productNameLbl).should("contain", expectation)) {
      return true;
    } else {
      cy.debug();
    }
  }

  addRandomProduct() {
    cy.get(this.addToCartBtn)
      .eq(Math.floor(Math.random() * (0 - 6)))
      .click({ force: true });
  }

  addToCart() {
    cy.get(this.addToCartBtn);
  }

  assertPurchase() {
    return new Cypress.Promise((resolve, reject) => {
      if (cy.get(this.successIcon).should("be.visible")) {
        resolve();
      } else {
        reject();
      }
    });
  }

  proceedToCheckout() {
    return new Cypress.Promise((resolve, reject) => {
      if (cy.get(this.proceedToCheckoutBtn).should("be.visible").click()) {
        resolve();
      } else {
        reject();
      }
    });
  }
}
