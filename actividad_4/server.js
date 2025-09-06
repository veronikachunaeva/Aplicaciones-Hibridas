const http = require("http");
const Product = require("./Product.js");
const modelProduct = new Product();
const port = 3000;

const server = http.createServer((request, response) => {

    const url = request.url;
    const method = request.method;
    const urlParts = request.url.split('/');

    if (url === "/") {
        response.writeHead(200, {"Content-type" : "text/plain"});
        response.end("Hola, soy node Server")
    } else if (url === "/products" && method =="GET") {
        modelProduct.getProducts().then(res => {
            if (Array.isArray(res) && res.length) {
                response.writeHead(200, {"Content-type" : "application/json"});
                const products = JSON.stringify(res, null, 2);
                response.end(products);
            } else {
                response.writeHead(200, {"Content-type" : "text/plain"});
                response.end("No hay productos");
            }
        });
    } else if (urlParts[1] === "products" && urlParts[2]) {
        const id = urlParts[2];
        modelProduct.getProductById(id).then(res => {
            if (res && Object.keys(res).length) {
                response.writeHead(200, {"Content-type": "Application/json"});
                const product = JSON.stringify(res, null, 2);
                response.end(product);
            } else {
                response.writeHead(200, {"Content-type": "text/plain"});
                response.end(res);
            }
        });
    } else {
        response.writeHead(401, {"Content-type" : "text/html"});
        response.end("<h2>404</h2>");
    }
});

    server.listen(port, () => {
    console.log(`Server en el ${port}` );
});