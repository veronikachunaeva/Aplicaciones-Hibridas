const crypto = require("crypto");
class Product {
  products = [];

  constructor(products = []) {
    this.products = products;
  }

  addProduct(product) {
    const id = crypto.randomUUID();
    this.products.push({
      id,
      ...product
    });
    console.log(this.products);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter(product => product.id.includes(id));
  }
}

module.exports = Product;