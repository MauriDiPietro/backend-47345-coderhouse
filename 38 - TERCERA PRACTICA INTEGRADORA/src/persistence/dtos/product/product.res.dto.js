export default class ProductResDTO {
  constructor(product) {
    this.nombre = product.product_name;
    this.precio = product.product_price;
  }
}
