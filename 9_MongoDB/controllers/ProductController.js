const Product = require("../models/Product");

module.exports = class ToughController {
  static async showProducts(req, res) {
    const products = await Product.getProducts();

    console.log(products);

    res.render("products/all", { products });
  }

  static createProducts(req, res) {
    res.render("products/create");
  }

  static createProductsPost(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;

    const product = new Product(name, price, description, image);

    product.save();

    res.redirect("/products");
  }

  static async getProduct(req, res) {
    const id = req.params.id;

    const product = await Product.getProductById(id);
    console.log(product);

    res.render("products/product", { product });
  }
};
