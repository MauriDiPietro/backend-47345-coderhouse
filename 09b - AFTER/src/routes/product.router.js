import { Router } from "express";
const router = Router();

import { ProductManager } from "../managers/product.manager.js";
import { productValidator } from "../middlewares/productValidator.js";
const productManager = new ProductManager("./src/data/products.json");

router.get("/", async (req, res) => {
  try {
    const { limit } = req.query;
    const products = await productManager.getProducts();
    if (!limit) res.status(200).json(products);
    else {
      const productsByLimit = await productManager.getProductsByLimit(limit);
      res.status(200).json(productsByLimit);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productManager.getProductById(Number(id));
    if (!product) res.status(404).json({ message: "product not found" });
    else res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/", productValidator, async (req, res) => {
  try {
    const productCreated = await productManager.createProduct(req.body);
    res.status(200).json(productCreated);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const product = { ...req.body };
    const { id } = req.params;
    const idNumber = Number(id);
    const productOk = await productManager.getProductById(idNumber);
    if (!productOk) res.status(404).json({ message: "product not found" });
    else await productManager.updateProduct(product, idNumber);
    res.status(200).json({ message: `product id: ${id} updated` });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const idNumber = Number(id);
      await productManager.deleteProduct(idNumber);
      res.json({ message: `Product id: ${idNumber} deleted` });
    } catch (error) {
      res.status(500).json(error.message);
    }
  });

export default router;
