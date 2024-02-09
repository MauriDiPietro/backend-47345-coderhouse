import factory from "../../daos/factory.js";
const { productDao } = factory;
import ProductReqDTO from "../../dtos/product/product.req.dto.js";
import ProductResDTO from "../../dtos/product/product.res.dto.js";

export default class ProductRepository {
  constructor() {
    this.dao = productDao;
  }

  async createProd(prod) {
    try {
      const prodDTO = new ProductReqDTO(prod);
      return await this.dao.create(prodDTO);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProdById(id) {
    try {
      const response = await this.dao.getById(id)
      if(!response) return false;
      return new ProductResDTO(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
