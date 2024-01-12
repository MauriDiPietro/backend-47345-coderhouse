export default class ProductDTO {
    constructor(product) {
      this.nameProd = product.name
      this.description = product.description
      this.price = product.price
      this.stock = product.stock
    }
  }
