import fs from "fs";

export class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async getProducts() {
    try {
      if (fs.existsSync(this.path)) {
        const productsJSON = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(productsJSON);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  async getProductsByLimit(limit){
    try {
        const products = await this.getProducts();
        if(!limit || limit >= products.length) return products;
        else return products.slice(0, limit);
    } catch (error) {
        console.log(error);
    }
  }

  async #getMaxId() {
    let maxId = 0;
    const products = await this.getProducts();
    products.map((prod) => {
      if (prod.id > maxId) maxId = prod.id;
    });
    return maxId;
  }

  async createProduct(obj) {
    try {
      const product = {
        id: (await this.#getMaxId()) + 1,
        status: true,
        ...obj,
      };
      const products = await this.getProducts();
      products.push(product);
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return product;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductById(id) {
    try {
        const products = await this.getProducts();
        const prod = products.find(p => p.id === id);
        if(!prod) return false;
        return prod;
    } catch (error) {
        console.log(error);
    }
  }

  async updateProduct(obj, id){
    try {
        const products = await this.getProducts();    // [{},{}]
        const index = products.findIndex(prod => prod.id === id);  // posición ó -1
        if(index === -1) return false;
        else{
            const prodUpdt = { ...obj, id };
            products[index] = prodUpdt;
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
  }

  async deleteProduct(id){
    try {
        const products = await this.getProducts();
        if(products.length < 0) return false;
        const newArray = products.filter(p => p.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
    } catch (error) {
        console.log(error);
    }
  }
}
