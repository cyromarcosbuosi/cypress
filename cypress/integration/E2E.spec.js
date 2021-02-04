/// <reference types= "cypress"/>
import { BASE } from "../fixtures/base.js";
import BaseShopPage from "../pageObjects/baseShopPage";
import CheckoutPage from "../pageObjects/checkoutPage.js";
import NavigationBar from "../pageObjects/navigationBar.js";
import RegistrationPage from "../pageObjects/registrationPage.js";
const catalogue = new BaseShopPage();
const login = new RegistrationPage();
const checkout = new CheckoutPage();
const navBar = new NavigationBar();

describe("Add product to basket", function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    catalogue.nagivate(BASE.baseUrl, "/");
  });

  it("Add random product to basket and finishes the order", function () {
    navBar.clickOnWomen();
    catalogue.addRandomProduct();
    catalogue.assertPurchase();
    catalogue.proceedToCheckout();
    checkout.proceedToCheckoutFlow();
    login.inputEmailCredentials();
    login.submitLogin();
    checkout.checkoutVerifyData();
    checkout.proceedToCheckoutFlow();
    checkout.agreeWithTerms();
    checkout.proceedToCheckoutFlow();
    checkout.pickPaymentMethod();
    checkout.proceedToCheckoutFlow();
    checkout.checkOrderConfirmation();
  });
});
