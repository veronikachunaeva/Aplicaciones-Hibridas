const Product = require('./Product.js');

const model = new Product();

model.addProduct({
  name: "mouse",
  price:5000,
  description: "mouse",
  stock: 15
})
model.addProduct({
  name: "camara",
  price:25000,
  description: "camara",
  stock: 30
})

const list = model.getProducts();
console.table(list);

const prod = model.getProductById("4");
console.log(prod, 'product');
