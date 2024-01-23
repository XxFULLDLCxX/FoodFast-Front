export type CategoryParams = {
  id: number;
  name: string;
  image: string;
};

export type ProductParams = {
  id: number;
  name: string;
  image: string;
  banner?: string;
  price: number;
  teaser: string;
  details: string;
  categoryId: number;
};

export type AdditionalsParams = {
  id: number;
  name: string;
  image: string;
  price: number;
  info: string;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderParams = {
  additionals: Pick<AdditionalsParams, 'id' | 'price' | 'name'>[];
  name: string;
  note: string;
  code: number;
  price: number;
  quantity: number;
  productId: number;
};

export type OrdersParams = {
  note: string;
  code: number;
  quantity: number;
  productId: number;
  paymentId: number;
};

export type PaymentParams = {
  paymentId: number;
  code: number;
  total?: number;
  status?: 'PAID' | 'PEDDING';
  change?: number;
  userId?: number;
};

export type UserParams = {
  name: string;
};
