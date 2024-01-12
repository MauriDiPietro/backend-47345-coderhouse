import { Schema, model } from 'mongoose';

export const productsSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  disponibilidad: { type: Number, required: true },
});

export const ProductModel = model(
  'products',
  productsSchema
);
