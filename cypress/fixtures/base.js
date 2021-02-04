module.exports = {
  BASE: {
    baseUrl: "http://automationpractice.com/index.php",
    registration: "?controller=authentication&back=my-account",
    womenShop: "?id_category=3&controller=category",
    getAccount: "http://automationpractice.com/index.php?controller=my-account",
    addToCart:
      "http://automationpractice.com/index.php?controller=cart&add=1&id_product=4",
    login: "http://automationpractice.com/index.php?controller=authentication",
    map: "http://automationpractice.com/index.php?controller=stores",
    //Aqui eu poderia colocar urls de ambientes de teste, produção,
    //ou até mesmo outros tenants
  },
};
