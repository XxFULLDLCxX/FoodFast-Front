import styled from 'styled-components';
import Content from '../components/Content';

export default function Pickup() {
  return (
    <Content>
      <Main>
        <div>
          <h2>Preparando:</h2>
          <ul>
            <li>Ricardo</li>
            <li>Luiza</li>
            <li>Fernanda</li>
            <li>Bruna</li>
          </ul>
        </div>
        <div>
          <h2>Pronto:</h2>
          <ul>
            <li>Camila</li>
          </ul>
        </div>
      </Main>
    </Content>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 26px;
    letter-spacing: 0.02em;
    margin-bottom: 29px;
  }
  div {
    li {
      font-family: 'Poppins', sans-serif;
      font-size: 64px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    flex: 1 1 50%;
    text-align: left;
    height: 569px;
    &:last-of-type {
      border-left: 4px solid #121212;
      padding-left: 92px;
      ul {
        color: #125c13;
      }
    }
    ul {
      color: #9f9f9f;
    }
  }
`;
