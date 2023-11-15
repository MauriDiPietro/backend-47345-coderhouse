import ProductManager from "../managers/product.manager.js";
const productManager = new ProductManager();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productManager.getAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productManager.getById(id);
    if (!product) res.json({ msg: "product not found" });
    else res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProd = await productManager.create(req.body);
    if (!newProd) res.json({ msg: "error create product" });
    else res.json(newProd);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpdt = await productManager.update(id, req.body);
    if (!prodUpdt) res.json({ msg: "product not found" });
    else res.json(prodUpdt);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodDel = await productManager.delete(id);
    if (!prodDel) res.json({ msg: "product not found" });
     else res.json(prodDel);
  } catch (error) {
    next(error);
  }
};
