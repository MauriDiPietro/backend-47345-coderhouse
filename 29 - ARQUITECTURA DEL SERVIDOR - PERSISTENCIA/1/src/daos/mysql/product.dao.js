import MySqlDao from "./mysql.dao.js";
import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMySql extends MySqlDao {
  constructor() {
    super(ProductModel);
  }
}
