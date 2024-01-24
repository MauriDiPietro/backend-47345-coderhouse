import fs from 'fs';

export default class ProductDaoFS{
    constructor(path){
        this.path = path;
    }

    async #getMaxId(){
        let maxId = 0;
        const products = await this.getAll();
        products.map((prod) => { 
          if (prod.id > maxId) maxId = prod.id;                                       
        });
        return maxId;
    }

    async getAll(){
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

    async getById(id){
        try {
            const products = await this.getAll();
            const product = products.find((prod) => prod.id === id);
            if(product) {
                return product
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            const product = {
                id: await this.#getMaxId() + 1,
                ...obj
            };
            const productsFile = await this.getAll();
            productsFile.push(product);
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile));
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async update(obj, id){
        try {
            const productsFile = await this.getAll();
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

    async deleteById(id){
        try {
            const productsFile = await this.getAll();
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


}

