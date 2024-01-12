import Services from "./class.services.js";
import factory from '../persistence/daos/factory.js';
const { productManager } = factory;
import ProductRepository from "../persistence/repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor(){
    super(productManager)
  }

  createProd = async (obj) => {
    try {
      const newItem = await prodRepository.createProd(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      console.log(error);
    }
  };

}


