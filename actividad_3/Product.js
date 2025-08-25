const { readFile } = require("fs");
const fs = require("fs/promises");
const path = "./data/product.json";

class Product {
    products = [];

    constructor(products=[]){
        this.products = products;
    }

    saveJSONP () {
        const data = JSON.stringify(this.products);
        try {
            fs.writeFile(path, data).then(() => {
                console.log("datos");
            })
        } catch(err) {
            console.error("err");
        }
    }

    async saveJSON () {
        try {
            const data = JSON.stringify(this.products, null, 2);
            await fs.writeFile(path, data);
        } catch(err) {
            console.error("err");
        }
    }
    async readJSON () {
        try {
            const data = await fs.readFile(path);
            return JSON.parse(data);

        } catch(err) {
            console.error("err");
        }
    }
    
    addProduct( product ){
        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock
        })
        this.saveJSON();
    }
    
    async getProducts(){
        const products = await this.readJSON();
        console.log(products, "products");
        return products;
    }

    async getProductById(id){
        const products = await this.readJSON();
        const product = products.find(item => item.id === id);
        
        return product;
    }

    async deleteProductById(id) {
        this.products = await this.readJSON();
        const index = this.products.findIndex(item => item.id === id);

        if (index < 0) {
            return {
                success: false, 
                error: "El producto no encontró"
            }
        }
        this.products.splice(index, 1);
        await this.saveJSON();
        return {
                success: true, 
                data: this.products
            }
    }

    async updateProductById(id, product) {
        this.products = await this.readJSON();
        const index = this.products.findIndex(item => item.id === id);
        if (index < 0) {
            return {
                success: false, 
                error: "El producto no encontró",
                data: {}
            }
        }
        this.products.splice(index, 1, {id, ...product});
        this.saveJSON()
        return {
                success: true, 
                data: this.products
            }
    }
}

module.exports = Product;