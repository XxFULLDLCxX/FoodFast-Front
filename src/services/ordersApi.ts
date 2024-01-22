import { AdditionalsParams, CategoryParams, OrdersParams, PaymentsParams, ProductParams } from '../utils/protocols';
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

export async function postOrders(params: OrdersParams) {
  return (await instance.post(`/orders`, params))
}

export async function postPayments(params: PaymentsParams) {
  return (await instance.post(`/orders`, params))
}