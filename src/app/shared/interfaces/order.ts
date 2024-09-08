import { product } from "./prducts";

export interface cashOrder {
  shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}
export interface showorder {
  shippingAddress?: ShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
  paidAt?: string;
}

export interface CartItem {
  count: number;
  product: product;
  price: number;
  _id: string;
}


interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

