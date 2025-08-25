const http = require("http");
const Product = require("./Product.js");
const modelProduct = new Product();
const port = 3000;

const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;

    if (url === "/") {
        response.writeHead(200, {"Content-type" : "text/plain"});
        response.end("Hola, soy node Server")
    } else if (url === "/products") {
        response.writeHead(200, {"Content-type" : "application/json"});
        response.end("Lista de productos");
    } else {
        response.writeHead(401, {"Content-type" : "text/html"});
        response.end("<h2>404</h2>");
    }
});

    server.listen(port, () => {
    console.log(`Server en el ${port}` );
})



modelProduct.deleteProductById("f7ecd9cf-7c02-4573-9d0d-609c99b4451d0").then(res => {
    if (!res.success) {
        console.error(res.error);
        return;
    }
    console.table(res.data);
});

modelProduct.updateProductById(
    "f7ecd9cf-7c02-4573-9d0d-609c99b4451d", 
    {
        name: "Mate1",
        price:  5000,
        stock: 30
    }
).then(res =>  {
    if (!res.success) {
        console.error(res.error);
        console.table(res.data);
        return;
    }
    console.table(res.data);
})