import { product } from "./prducts";

export interface cart {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface Product {
  count: number;
  _id: string;
  product: string;
  price: number;
}
export interface showcart {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: carts;
}

export interface carts {
  _id: string;
  cartOwner: string;
  products: Products[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface Products {
  count: number;
  _id: string;
  product: product;
  price: number;
}
export interface rmoveitem {
  statusMsg: string;
  message: string;
}