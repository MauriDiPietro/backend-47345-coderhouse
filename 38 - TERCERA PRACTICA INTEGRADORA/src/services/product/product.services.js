import Services from "../class.services.js";
import factory from "../../persistence/daos/factory.js"
const { productDao } = factory;
import ProductRepository from "../../persistence/repository/product/product.repository.js";
const productRepository = new ProductRepository();

export default class ProductService extends Services {
  constructor() {
    super(productDao);
  }

  async createProd(prod) {
    try {
      const newProd = await productRepository.createProd(prod);
      if (!newProd) return false;
      else return newProd;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProdById(id) {
    try {
      const product = await productRepository.getProdById(id);
      if (!product) return false;
      else return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
