import fs from 'fs';

export default class UserManagerFS{
    constructor(path){
        this.path = path;
    }

    async #getMaxId(){
        let maxId = 0;
        const products = await this.getAllProducts();
        products.map((prod) => { 
          if (prod.id > maxId) maxId = prod.id;                                       
        });
        return maxId;
    }

    async getAllProducts(){
        try {
            if(fs.existsSync(this.path)){
                const products = await fs.promises.readFile(this.path, 'utf-8');
                const productsJSON = JSON.parse(products);
                return productsJSON; 
            } else {
                return []
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById(id){
        try {
            const products = await this.getAllProducts();
            const product = products.find((prod) => prod.id === id);
            if(product) {
                return product
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    async createProduct(obj){
        try {
            const product = {
                id: await this.#getMaxId() + 1,
                ...obj
            };
            const productsFile = await this.getAllProducts();
            productsFile.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(obj, id){
        try {
            const productsFile = await this.getAllProducts();
            const index = productsFile.findIndex(prod => prod.id === id);
            console.log('index:::', index);
            if(index === -1){
                throw new Error(`Id ${id} not found`)
            } else {
                productsFile[index] = { ...obj, id }
            }
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProductById(id){
        try {
            const productsFile = await this.getAllProducts();
            if(productsFile.length > 0){
                const newArray = productsFile.filter(prod => prod.id !== id);
                await fs.promises.writeFile(this.path, JSON.stringify(newArray));
            } else {
                throw new Error(`Product id: ${id} not found`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAllProducts(){
        try {
            if(fs.existsSync(this.path)){
                await fs.promises.unlink(this.path)
            }
        } catch (error) {
            console.log(error);
        }
    }

}

