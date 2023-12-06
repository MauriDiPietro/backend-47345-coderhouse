import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";
const prodDao = new ProductDaoMongoDB();

import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
const cartDao = new CartDaoMongoDB();

export const getAll = async () => {
    try {
      return await cartDao.getAll();
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getById = async (id) => {
    try {
      const cart = await cartDao.getById(id);
      if (!cart) return false;
      else return cart;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const create = async () => {
    try {
      const newcart = await cartDao.create();
      if (!newcart) return false;
      else return newcart;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const update = async (id, obj) => {
    try {
      const cartUpd = await cartDao.update(id, obj);
      if (!cartUpd) return false;
      else return cartUpd;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const remove = async (id) => {
    try {
      const cartDel = await cartDao.delete(id);
      if (!cartDel) return false;
      else return cartDel;
    } catch (error) {
      console.log(error);
    }
  };
  

export const addProdToCart = async (cartId, prodId) => {
  try {
    const existCart = await getById(cartId);
    console.log("existCart-->", existCart);
    if (!existCart) return false;

    const existProd = await prodDao.getById(prodId);
    console.log("existProd-->", existProd);
    if (!existProd) return false;

    return await cartDao.addProdToCart(cartId, prodId);
  } catch (error) {
    console.log(error);
  }
};

export const removeProdToCart = async (cartId, prodId) => {
    try {
      const existCart = await getById(cartId);
      console.log("existCart-->", existCart);
      if (!existCart) return false;
  
      const existProd = existCart.products.find((p)=>p.product._id.toString() === prodId.toString());
      console.log("existProd-->", existProd);
      if (!existProd) return false;
  
      return await cartDao.removeProdToCart(existCart, existProd);
    } catch (error) {
      console.log(error);
    }
  };

  export const updateProdQuantityToCart = async (cartId, prodId, quantity) => {
    try {
      const existCart = await getById(cartId);
      console.log("existCart-->", existCart);
      if (!existCart) return false;
  
      const existProd = existCart.products.find((p)=>p.product._id.toString() === prodId.toString());
      console.log("existProd-->", existProd);
      if (!existProd) return false;
  
      return await cartDao.updateProdQuantityToCart(existCart, existProd, quantity);
    } catch (error) {
      console.log(error);
    }
  };

  export const clearCart = async (cartId) => {
    try {
      const existCart = await getById(cartId);
      console.log("existCart-->", existCart);
      if (!existCart) return false;
  
      return await cartDao.clearCart(existCart);
    } catch (error) {
      console.log(error);
    }
  };
