import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DetailsH3, TitleH2 } from '../../assets/styles/Utils';
import { getProducts } from '../../services/ordersApi';
import Product from './Product';
import { useOrdersContext } from '../../utils/context';
import ProductDetails from '../tooltip/ProductDetails';
import { ProductParams } from '../../utils/protocols';

export default function Products() {
  const { products, setProducts } = useOrdersContext();
  const [inOrder, setInOrder] = useState<number[]>([]);

  const rows: ProductParams[][] = Array.from({ length: Math.ceil(products.length / 4) }, () => []);

  products.forEach((product, i) => {
    rows[Math.floor(i / 4)].push(product);
  });

  useEffect(() => {
    getProducts().then(setProducts);
    console.log(rows);
  }, []);

  return (
    <ProductsContainer>
      <TitleH2>Produtos</TitleH2>
      <DetailsH3>Selecione um produto para adicionar ao seu pedido</DetailsH3>
      <div>
        {rows.map((row, line) => (
          <ul key={line}>
            {row.map((data) => (
              <Product
                key={data.id}
                line={line}
                data={data}
                isInOrder={inOrder.includes(data.id)}
                setInOrder={setInOrder}
              />
            ))}
          </ul>
        ))}
      </div>
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  padding-top: 64px;
  > div > ul {
    padding: 20px;
    margin-left: -20px;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 43px;
    flex-wrap: nowrap;
    width: calc(100% + 30px);
    height: 100%;
    gap: 50px;
  }
`;
