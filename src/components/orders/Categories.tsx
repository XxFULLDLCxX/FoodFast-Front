import utils, { DetailsH3, TitleH2 } from '../../assets/styles/Utils';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import getCategories from '../../services/ordersApi';
import Category, { CategoryProps } from './Category';

export default function Categories() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  });
  const defaultCategories = [
    {
      id: 1,
      name: 'combos',
      image: '',
      createdAt: '2023-12-18T23:11:01.079Z',
      updatedAt: '2023-12-18T23:11:01.079Z',
    },
    {
      id: 2,
      name: 'acompanhamentos',
      image: '',
      createdAt: '2023-12-18T23:11:01.079Z',
      updatedAt: '2023-12-18T23:11:01.079Z',
    },
    {
      id: 3,
      name: 'bebidas',
      image: '',
      createdAt: '2023-12-18T23:11:01.079Z',
      updatedAt: '2023-12-18T23:11:01.079Z',
    },
    {
      id: 4,
      name: 'sobremesas',
      image: '',
      createdAt: '2023-12-18T23:11:01.079Z',
      updatedAt: '2023-12-18T23:11:01.079Z',
    },
  ];
  return (
    <CategoriesContainer>
      <TitleH2>Categorias</TitleH2>
      <DetailsH3>Navegue por categoria</DetailsH3>
      <ul>
        {categories.map((c) => (
          <Category key={c.id} id={c.id} name={c.name} image={c.image} />
        ))}
      </ul>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  ul {
    width: max-content;
    gap: 40px;
    display: flex;
    justify-content: space-between;
    margin: 28px auto 0px;
  }
  li {
    ${utils.center}
    flex-direction: column;
    gap: 7px;
    width: 223px;
    height: 148px;
    border-radius: 5px;
    box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.09);
    font-size: 14px;
    font-weight: 700;
    svg {
      height: 55px;
      width: 85px;
    }
  }
`;
