import styled from 'styled-components';
import { Order } from './Order';

export function Ready() {
  return (
    <Container>
      <h2>Pronto:</h2>
      <ul>
        <Order ready />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 12px;
  padding-left: 90px;
  flex: 1 1 50%;
  width: 100%;
  height: 567px;
  max-height: 567px;
  background-color: #ffffff;
  border-left: 1px solid #000000;
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
    margin-bottom: 29px;
  }
`;
