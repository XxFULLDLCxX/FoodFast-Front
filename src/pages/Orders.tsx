import styled from 'styled-components';
import Content from '../components/Content';
import Products from '../components/orders/Products';
import Categories from '../components/orders/Categories';

export default function Orders() {
  return (
    <Content>
      <Search>
        <h1>Seja bem vindo!</h1>
        <input type="text" placeholder="O que você procura?" autoFocus={true} />
      </Search>
      <Categories />
      <Products />
    </Content>
  );
}

const Search = styled.div`
  margin-bottom: 40px;
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input {
    width: 308px;
    height: 40px;
    padding: 0px 17px;
    outline: none;
    border-radius: 2px;
    background-color: #f4f4f4;
    line-height: 40px;
    &::placeholder {
      color: #757575;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.04em;
    }
  }
`;
