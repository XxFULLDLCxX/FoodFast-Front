export interface CategoryParams {
  id: number;
  name: string;
  image: string;
}

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
