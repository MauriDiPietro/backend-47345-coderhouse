import Services from "./class.services.js";

import factory from "../daos/factory.js";
const { prodDao } = factory;
import ProductRepository from "../repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor() {
    super(prodDao);
  }

  async getProdById(id) {
    try {
      const prod = await prodRepository.getProdById(id);
      if (!prod) return false;
      else return prod;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createProd(obj) {
    try {
      const newItem = await prodRepository.createProd(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      console.log(error);
    }
  }
}
