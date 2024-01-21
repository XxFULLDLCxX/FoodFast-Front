import combo from '../assets/images/categories/combo.png';
import drink from '../assets/images/categories/drink.png';
import sideDish from '../assets/images/categories/side_dish.png';
import dessert from '../assets/images/categories/dessert.png';

export const defaultCategories: { [key: string]: string } = {
  acompanhamentos: sideDish,
  sobremesas: dessert,
  bebidas: drink,
  combos: combo,
};

export const defaultOrder = {
  additionals: [],
  quantity: 1,
  note: '',
  price: 0,
  name: '',
  code: 0
};
