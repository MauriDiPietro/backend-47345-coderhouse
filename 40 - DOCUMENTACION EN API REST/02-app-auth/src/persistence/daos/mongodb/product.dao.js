import MongoDao from "./mongo.dao.js";
import { ProductModel } from "./models/products.model.js";

export default class ProductDaoMongo extends MongoDao {
  constructor() {
    super(ProductModel);  
  }
}

