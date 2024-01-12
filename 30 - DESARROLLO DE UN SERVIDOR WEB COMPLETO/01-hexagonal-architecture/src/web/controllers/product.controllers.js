import Controllers from "./class.controller.js";
import ProductService from "../../core/services/product.services.js";
const productService = new ProductService()

export default class ProductController extends Controllers{
  constructor(){
    super(productService)
  }

}


