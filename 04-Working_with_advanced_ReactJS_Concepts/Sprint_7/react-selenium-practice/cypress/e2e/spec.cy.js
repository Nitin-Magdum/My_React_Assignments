describe("Shopping Cart Test Quantity Update", function () {
  it("Verify the total amount after the quantity updated", function () {
    cy.visit("https://demo.nopcommerce.com/");

    cy.get("#small-searchterms").type("HP Spectre XT Pro UltraBook");

    cy.get(".search-box-button[type=submit]").click();

    cy.get(".product-box-add-to-cart-button[value='Add to cart']").click();

    cy.get("#topcartlink > a > span.cart-label").click();

    cy.get(".product-unit-price").should("contain", "$1,350.00");

    cy.get(".qty-input").clear().type("2");

    cy.get(".update-cart-button[name=updatecart]").click();

    cy.get(".value-summary > strong").should(($total) => {
      expect($total).to.contain("$2,700.00");
    });
  });
});
