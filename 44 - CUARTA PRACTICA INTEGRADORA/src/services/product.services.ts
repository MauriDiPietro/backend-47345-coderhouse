import { ProductModel } from "../models/product.model";
import { Product, ProductResponse } from "../types/product.types";

export const create = async (product: Product): Promise<Product | boolean> => {
  try {
    const prod = await ProductModel.create(product);
    if (!prod) return false;
    return prod;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const getAll = async (): Promise<Product[] | []> => {
  try {
    return await ProductModel.find({});
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
export const getById = async (id: string): Promise<Product | boolean> => {
  try {
    const prod = await ProductModel.findById(id);
    if (!prod) return false;
    return prod;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
export const update = async (
  id: string,
  body: Product
): Promise<Product | boolean> => {
  try {
    const prodUpd = await ProductModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!prodUpd) return false;
    return prodUpd;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
export const remove = async (id: string) => {
  try {
    const prodDel = await ProductModel.findByIdAndDelete(id);
    if (!prodDel) return false;
    return prodDel;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
