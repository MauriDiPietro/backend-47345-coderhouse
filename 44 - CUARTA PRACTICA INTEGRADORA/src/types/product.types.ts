import { ObjectId } from "mongoose";

export interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface Product2 extends Product {
  color: string;
}

/* ------------------------------------ - ----------------------------------- */
export type ProductType = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

type ProductType2 = ProductType & {
    color: string;
}

type Product3 = Pick<Product, 'name' | 'description'>

// type Product3 = {
//     name: string;
//     description: string;
// }
const product: Product3 = {
    name: '',
    description: '',
}

type Product4 = Omit<Product, 'description'>

const product2: Product4 = {
    name: '',
    price: 0,
    stock: 0,
}

export interface ProductResponse extends Product {
    _id: ObjectId
}