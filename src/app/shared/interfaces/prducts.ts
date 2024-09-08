
import { cat } from "./cat";
export interface productdetails{
  data:product
}
export interface productlist {
  results: number;
  metadata: Metadata;
  data: product[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface product {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: cat;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  priceAfterDiscount?: number;
  availableColors?: any[];
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}
export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
