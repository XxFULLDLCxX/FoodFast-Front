import combo from '../assets/images/categories/combo.png';
import drink from '../assets/images/categories/drink.png';
import sideDish from '../assets/images/categories/side_dish.png';
import dessert from '../assets/images/categories/dessert.png';
import { OrderParams } from './protocols';

export const defaultCategories: { [key: string]: string } = {
  acompanhamentos: sideDish,
  sobremesas: dessert,
  bebidas: drink,
  combos: combo,
};

export const defaultOrder: OrderParams = {
  additionals: [],
  quantity: 1,
  note: '',
  price: 0,
  name: '',
  code: 0,
  productId: 0,
};

export const defaultPayment = () => {
  const payment = localStorage.getItem('payment');

  if (!payment) {
    localStorage.setItem('payment', JSON.stringify({ code: 0, paymentId: null }));
    return { code: 0, paymentId: null };
  } else return JSON.parse(payment);
};
