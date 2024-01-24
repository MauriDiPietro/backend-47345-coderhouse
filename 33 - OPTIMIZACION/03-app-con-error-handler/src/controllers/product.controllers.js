import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
const productService = new ProductService()
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();

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

  //! ruta
}


