import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DetailsH3, TitleH2 } from '../../../assets/styles/Utils';
import { getOrdersByCode, getProducts } from '../../../services/ordersApi';
import Product from './Product';
import { useOrdersContext } from '../../../utils/context';
import { ProductParams } from '../../../utils/protocols';
import { Orders } from '../Orders';

export default function Products() {
  const { products, payment, setProducts, order } = useOrdersContext();
  const [inOrder, setInOrder] = useState<number[]>([]);

  const rows: ProductParams[][] = Array.from({ length: Math.ceil(products.length / 4) }, () => []);

  products.forEach((product, i) => {
    rows[Math.floor(i / 4)].push(product);
  });

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  useEffect(() => {
    if (payment.code !== 0) {
      getOrdersByCode(payment.code).then((orders) => setInOrder(orders.map((o) => o.productId)));
    }
  }, [payment.code, order.additionals]);

  return (
    <ProductsContainer>
      <TitleH2>Produtos</TitleH2>
      <DetailsH3>Selecione um produto para adicionar ao seu pedido</DetailsH3>
      <div>
        {rows.map((row, line) => (
          <ul className="products" key={line}>
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
      <Orders />
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  padding-top: 64px;
  .products {
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
