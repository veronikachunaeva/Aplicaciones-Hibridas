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
        return products;
    }

    async getProductById(id){
        const products = await this.readJSON();
        const product = products.find(item => item.id === id);
        
        return product ? product : "El producto no encontró";
    }

    async deleteProductById(id) {
        cthis.products = await this.readJSON();
        const index = this.products.findIndex(item => item.id === id);
        const productsFiltered = products.filter(item => item.id !== id);
        if (index < 0) {
            return "El producto no encontró"
        }
        this.products.splice(index, 1);
        await this.writeJSON();
        return this.products; 
    }

    async updateProductById(product) {
        const products = await this.readJSON();
        const productsUpdated = products.map(item => {
            if (item.id === product.id) {
                return product;
            }
            return item;
        })
        console.log(productsUpdated, "productsUpdated")
        const newFile = JSON.stringify(productsUpdated, null, 2);
        await fs.writeFile(path, newFile); 
        const newProducts = await this.readJSON();
        return  newProducts;

    }

}

module.exports = Product;