import factory from '../daos/factory.js';
const { productDao } = factory;
import ProductDTO from "../dtos/product.db.dto.js";

export default class ProductRepository {
    constructor(){   
        this.dao = productDao;    
    }

    async createProd(obj) {
        try {
          const prodDTO = new ProductDTO(obj);
          const response = await this.dao.create(prodDTO);
          console.log('REPOSITORY');
          return response;
        } catch (error) {
          throw new Error(error.message);
        }
      }
}