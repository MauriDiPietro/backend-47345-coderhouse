import Services from "../class.services.js";
import factory from '../../persistence/daos/factory.js';
const { productDao } = factory;
import ProductRepository from "../../persistence/repository/product.repository.js";
const prodRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor(){
    super(productDao)
  }
  createProd = async (obj) => {
    try {
      const newItem = await prodRepository.createProd(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getProdById = async (id) => {
    try {
      const item = await prodRepository.getProdById(id);
      if (!item) return false;
      else return item;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}


