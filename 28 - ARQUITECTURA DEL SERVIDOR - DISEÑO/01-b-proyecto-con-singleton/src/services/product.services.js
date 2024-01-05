import Services from "./class.services.js";
import persistence from "../persistence/persistence.js";
const { prodDao } = persistence;
// const prodDao = new ProductFSDao('./src/persistence/daos/filesystem/products.json');

export default class ProductService extends Services {
  constructor() {
    super(prodDao);
  }
}
