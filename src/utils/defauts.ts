import combo from '../assets/images/categories/combo.png';
import drink from '../assets/images/categories/drink.png';
import sideDish from '../assets/images/categories/side_dish.png';
import dessert from '../assets/images/categories/dessert.png';

export const defaultCategories: { [key: string]: string } = {
  combos: combo,
  acompanhamentos: sideDish,
  bebidas: drink,
  sobremesas: dessert,
};

export const defaultOrder = {
  additionals: [],
  note: '',
  price: 0,
  name: '',
  quantity: 1,
  code: 0
};
