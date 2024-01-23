import Content from '../components/Content';
import Products from '../components/Orders/Products/Products';
import Categories from '../components/Orders/Categories/Categories';
import Search from '../components/Orders/Search';

export default function Orders() {
  return (
    <Content>
      <Search />
      <Categories />
      <Products />
    </Content>
  );
}
