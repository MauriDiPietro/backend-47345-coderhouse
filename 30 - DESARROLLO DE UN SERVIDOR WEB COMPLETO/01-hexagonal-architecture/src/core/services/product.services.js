import Services from "./class.services.js";
import { ProductModel } from "../models/product.model.js";

export default class ProductService extends Services {
  constructor(){
    super(ProductModel)
  }
}



