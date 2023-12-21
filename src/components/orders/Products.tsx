import { useEffect } from 'react';
import styled from 'styled-components';
import burgerDefault from '../../assets/images/burger.png';
import Product from './Product';
import { DetailsH3, TitleH2 } from '../../assets/styles/Utils';

export default function Products() {
  const defaultProducts = [
    {
      name: 'Smash da casa',
      description: '2x hambúrger 200g, queijo, cheddar, tomate, alface, picles, cebola, molho da casa',
      value: 3050,
      image: burgerDefault,
    },
  ];
  Array.from({ length: 27 }, (_, i) =>
    defaultProducts.push({
      name: `Smash da casa ${i}`,
      description: '2x hambúrger 200g',
      value: 3050,
      image: burgerDefault,
    })
  );
  useEffect(() => {}, []);

  const productElements = [];
  for (let i = 0; i < defaultProducts.length; i += 4) {
    const products = defaultProducts.slice(i, i + 4);
    productElements.push(
      <div key={i}>
        {products.map(p => (
          <Product key={p.name} name={p.name} description={p.description} image={p.image} price={p.value} />
        ))}
      </div>
    );
  }
  
  return (
    <ProductsContainer>
      <TitleH2>Produtos</TitleH2>
      <DetailsH3>Selecione um produto para adicionar ao seu pedido</DetailsH3>
      <ul>{productElements}</ul>
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
