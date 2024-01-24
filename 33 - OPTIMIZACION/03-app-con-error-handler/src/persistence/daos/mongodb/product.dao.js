import MongoDao from "./mongo.dao.js";
import { ProductModel } from "./models/products.model.js";
import ProductDTO from "../../dtos/product.db.dto.js";

export default class ProductDaoMongo extends MongoDao {
  constructor() {
    super(ProductModel);  
  }

  async createProd(obj) {
    try {
      const prodDTO = new ProductDTO(obj);
      const response = await this.model.create(prodDTO);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

