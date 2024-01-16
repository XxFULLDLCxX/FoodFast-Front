import { CategoryParams, ProductParams } from '../utils/protocols';
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
