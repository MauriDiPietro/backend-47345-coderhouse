import Controllers from "./class.controller.js";
import ProductService from "../services/product/product.services.js";
const productService = new ProductService()
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();
import errors from "../utils/errors.dictionary.js";

export default class ProductController extends Controllers{
  constructor(){
    super(productService)
  }

  createProd = async (req, res, next) => {
    try {
      const newItem = await this.service.createProd(req.body);
      if (!newItem) return httpResponse.NotFound(res, "Validation error!");
      else return httpResponse.Ok(res, newItem);
    } catch (error) {
      next(error)
    }
  };

  getProdById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.getProdById(id);
      if (!item) return httpResponse.NotFound(res, errors.PROD_NOT_FOUND);
      else return httpResponse.Ok(res, item);
    } catch (error) {
      next(error)
    }
  };

}


