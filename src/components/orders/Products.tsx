import { useEffect } from 'react';
import styled from 'styled-components';
import { DetailsH3, TitleH2 } from '../../assets/styles/Utils';
import { getProducts } from '../../services/ordersApi';
import Product from './Product';
import { useOrdersContext } from '../../utils/context';

export default function Products() {
  const { products, setProducts } = useOrdersContext();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <ProductsContainer>
      <TitleH2>Produtos</TitleH2>
      <DetailsH3>Selecione um produto para adicionar ao seu pedido</DetailsH3>
      <ul>
        {products.map((data) => (
          <Product key={data.id} data={data} />
        ))}
      </ul>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  padding-top: 64px;
  ul {
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 70px;
  }
`;
