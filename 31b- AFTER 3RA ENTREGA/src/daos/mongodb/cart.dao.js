import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB {
  async create() {
    try {
      return await CartModel.create({
        products: [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      return await CartModel.find({});
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      return await CartModel.findById(id).populate("products.product");
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      return await CartModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }

  async addProdToCart(cart, prodId) {
    try {
      // const cart = await CartModel.findById(cartId);
      // //   console.log(cart);
      // if (!cart) return false;
      cart.products.push({ product: prodId });
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }

  async removeProdToCart(cart, prod) {
    try {
      cart.products = cart.products.filter(
        (p) => p.product._id.toString() !== prod.product._id.toString()
      );
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, obj) {
    try {
      const response = await CartModel.findByIdAndUpdate(id, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProdQuantityToCart(cart, prod, quantity) {
    try {
      prod.quantity = quantity;
      cart.save();
      return prod;
    } catch (error) {
      console.log(error);
    }
  }

  async clearCart(cart) {
    try {
      cart.products = [];
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
}
