import Content from '../components/Content';
import Products from '../components/orders/Products';
import Categories from '../components/orders/Categories';
import Search from '../components/orders/Search';
import { useState } from 'react';

export default function Orders() {
  return (
    <Content>
      <Search />
      <Categories />
      <Products />
    </Content>
  );
}
