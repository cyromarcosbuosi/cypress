export default class NavigationBar {
  shirtsBtn = ".sf-menu > :nth-child(3) > a";
  dressesBtn = ".sf-menu > :nth-child(2) > .sf-with-ul";
  womenBtn =
    ".sf-menu > :nth-child(1) > [href='http://automationpractice.com/index.php?id_category=3&controller=category']";

  clickOnShirts() {
    cy.get(shirtsBtn).click();
  }

  clickOnDresses() {
    cy.get(this.dressesBtn).click();
  }

  clickOnWomen() {
    cy.get(this.womenBtn).click();
  }
}
