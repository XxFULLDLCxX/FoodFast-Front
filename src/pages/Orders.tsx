import Content from '../components/Content';
import Products from '../components/Orders/Products';
import Categories from '../components/Orders/Categories';
import Search from '../components/Orders/Search';
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
