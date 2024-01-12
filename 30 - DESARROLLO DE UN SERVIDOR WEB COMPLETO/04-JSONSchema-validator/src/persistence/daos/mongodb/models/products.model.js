import mongoose from 'mongoose';

export const productsCollection = 'products';

export const productsSchema = new mongoose.Schema({
  nameProd: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const ProductModel = mongoose.model(
  productsCollection,
  productsSchema
);
