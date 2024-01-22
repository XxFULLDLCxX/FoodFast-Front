import styled from 'styled-components';

// type ConfirmProps = {};

export function Confirm() {
  const addOrder = () => {
    
  };
  return (
    <Container>
      <button onClick={addOrder}>Continuar adicionando</button>
      <button onClick={addOrder}>Adicionar ao pedido</button>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  max-width: 614px;
  width: 100%;
  margin-left: auto;
  button {
    border-radius: 22px;
    text-align: center;
    width: 284px;
    height: 51px;
    border: 1px solid #125c13;
    color: #125c13;
    &:last-child {
      background-color: #125c13;
      color: #ffffff;
    }
  }
`;
