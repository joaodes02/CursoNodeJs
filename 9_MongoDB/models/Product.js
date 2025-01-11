const conn = require("../db/conn");

const { ObjectId } = require("mongodb");

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  async save() {
    const product = await conn.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection("products").find().toArray();

    return products;
  }

  static async getProductById(id) {
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: ObjectId.createFromHexString(id) });

    return product;
  }
}

module.exports = Product;
