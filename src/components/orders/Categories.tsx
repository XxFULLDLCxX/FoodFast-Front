import { GiCakeSlice, GiFrenchFries, GiHamburger, GiSodaCan } from 'react-icons/gi';
import utils, { DetailsH3, TitleH2 } from '../../assets/styles/Utils';
import styled from 'styled-components';

export default function Categories() {
  return (
    <CategoriesContainer>
      <TitleH2>Categorias</TitleH2>
      <DetailsH3>Navegue por categoria</DetailsH3>
      <ul>
        <li>
          <GiHamburger />
          Combos
        </li>
        <li>
          <GiFrenchFries />
          Acompanhamentos
        </li>
        <li>
          <GiSodaCan />
          Bebidas
        </li>
        <li>
          <GiCakeSlice />
          Sobremesas
        </li>
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
