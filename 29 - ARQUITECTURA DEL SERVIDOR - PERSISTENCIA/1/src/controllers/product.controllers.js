import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
const productService = new ProductService();
import { createResponse } from "../utils.js";

export default class ProductController extends Controllers {
  constructor() {
    super(productService);
  }

  getProdById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const prod = await this.service.getProdById(id);
      if (!prod)
        createResponse(res, 404, { method: "create", error: "getById failed" });
      else createResponse(res, 200, prod);
    } catch (error) {
      next(error.message);
    }
  }
}
