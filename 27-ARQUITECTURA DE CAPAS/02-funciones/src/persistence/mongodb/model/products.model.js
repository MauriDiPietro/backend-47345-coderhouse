import mongoose from 'mongoose';

export const productsCollectionName = 'product';

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductsModel = mongoose.model(
  productsCollectionName,
  productsSchema
);


