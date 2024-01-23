import {
  AdditionalsParams,
  CategoryParams,
  OrderParams,
  OrdersParams,
  PaymentParams,
  ProductParams,
} from '../utils/protocols';
import instance from './api';

export async function getCategories() {
  return (await instance.get<CategoryParams[]>('/categories')).data;
}

export async function getProducts() {
  return (await instance.get<ProductParams[]>(`/products`)).data;
}

export async function getProductsBySearch(value: string) {
  return (await instance.get<ProductParams[]>(`/products/?search=${value}`)).data;
}

export async function getProductsByCategory(id: number): Promise<ProductParams[]> {
  return (await instance.get(`/categories/${id}`)).data?.products;
}

export async function getProductAdditionals(productId: number) {
  return (await instance.get<AdditionalsParams[]>(`/products/${productId}/additionals`)).data;
}

type OrdersResponse = OrdersParams & { id: number };

export async function getOrdersByCode(code: number): Promise<OrdersResponse[]> {
  return (await instance.get(`/orders/${code}`)).data;
}

export async function postOrders(params: OrdersParams): Promise<OrdersResponse> {
  return (await instance.post(`/orders`, params)).data;
}

type AdditionalParams = {
  additionalId: number;
  orderId: number;
};

export async function postOrderAdditionals(params: AdditionalParams) {
  return (await instance.post(`/orders/additionals`, params)).data;
}

export async function postPayments(params: Partial<PaymentParams>): Promise<PaymentParams & { id: number }> {
  return (await instance.post(`/payments`, params)).data;
}
