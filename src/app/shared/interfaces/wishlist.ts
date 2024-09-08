import { product } from "./prducts";

export interface wishlist {
  status: string;
  count: number;
  data: product[];
}
