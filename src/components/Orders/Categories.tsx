import { DetailsH3, TitleH2 } from '../../assets/styles/Utils';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/ordersApi';
import { CategoryParams } from '../../utils/protocols';
import Category from './Category';

export default function Categories() {
  const [categories, setCategories] = useState<CategoryParams[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CategoriesContainer>
      <TitleH2>Categorias</TitleH2>
      <DetailsH3>Navegue por categoria</DetailsH3>
      <ul>
        {categories.map((data) => (
          <Category key={data.id} data={data} />
        ))}
      </ul>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  height: min-content;
  ul {
    padding: 5px 5px;
    width: 100%;
    gap: 40px;
    display: flex;
    justify-content: space-between;
    margin: 28px auto 0px;
    overflow-x: auto;
  }
`;
