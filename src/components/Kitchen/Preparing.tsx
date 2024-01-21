import styled from 'styled-components';
import { Order } from './Order';

export function Preparing() {
  return (
    <Container>
      <h2>Preparando:</h2>
      <ul>
        <Order />
        <Order />
        <Order />
        <Order notes />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 12px;
  background-color: #ffffff;
  flex: 1 1 50%;
  width: 100%;
  height: 567px;
  max-height: 567px;
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    margin-bottom: 29px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`;
