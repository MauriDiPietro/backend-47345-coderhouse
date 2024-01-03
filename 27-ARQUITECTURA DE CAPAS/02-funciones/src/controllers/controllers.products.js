import {saveProduct, getAllProducts} from '../services/services.products.js'

export const save = async (req, res) => {
  const { body } = req;
  try {
    console.log(body);
    const product = await saveProduct(body)
    res.json(product);
  } catch (error) {
    console.log(error);
  }
}

export const getAll = async (req, res) => {
  try {
    const products = await getAllProducts()
    res.json(products)
  } catch (error) {
    console.log(error);
  }
}

