import { Schema, model } from 'mongoose';

export const productsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const ProductModel = model(
  'products',
  productsSchema
);
