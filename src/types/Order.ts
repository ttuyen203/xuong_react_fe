export interface FormOrder {
  name: string;
  address: string;
  phone: string;
}

interface OrderProductItem {
  product: string;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  user: string;
  address: string;
  phone: string;
  name: string;
  payment: string;
  products: OrderProductItem[];
}

export interface ApiResOrder {
  message: string;
  data: Order[];
}
