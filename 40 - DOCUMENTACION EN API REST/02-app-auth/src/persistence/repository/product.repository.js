import factory from "../daos/factory.js";
const { productDao } = factory;
import ProductDTO from "../dtos/product.db.dto.js";
import ProductRespDTO from "../dtos/product.resp.dto.js";

export default class ProductRepository {
  constructor() {
    this.dao = productDao;
  }
  async createProd(obj) {
    try {
      const prodDTO = new ProductDTO(obj);
      const response = await this.dao.create(prodDTO);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProdById(id) {
    try {
      const response = await this.dao.getById(id);
      const respDTO = new ProductRespDTO(response);
      return respDTO;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
