
export default class ProductDTO {
    constructor(product) {  
      this.product_name = product.name  
      this.product_description = product.description
      this.product_price = product.price
      this.product_stock = product.stock
    }
  }
