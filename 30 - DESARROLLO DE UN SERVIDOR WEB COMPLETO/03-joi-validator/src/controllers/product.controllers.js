import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import { createResponse } from "../utils.js";
const productService = new ProductService()

export default class ProductController extends Controllers{
  constructor(){
    super(productService)
  }

  createProd = async (req, res, next) => {
    try {
      const newItem = await this.service.createProd(req.body);
      if (!newItem) createResponse(res, 404, {method: 'create', error: "Validation error!"});
      else createResponse(res, 200, newItem);
    } catch (error) {
      next(error.message);
    }
  };
}


