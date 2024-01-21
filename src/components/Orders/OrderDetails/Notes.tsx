import styled from 'styled-components';
import { useOrdersContext } from '../../../utils/context';

type NotesProps = {};

export function Notes({}: NotesProps) {
  const { order, setOrder } = useOrdersContext();

  return (
    <Container>
      <h2>Observações</h2>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Adicione uma observação ao pedido"
        onChange={(e) => setOrder((prev) => ({ ...prev, note: e.target.value }))}
      ></textarea>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 75px;
  h2 {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
  }
  textarea {
    margin-top: 14px;
    padding: 20px;
    background-color: #f4f4f4;
    &::placeholder {
      color: #a2a2a2;
    }
    width: 100%;
    height: 113px;
  }
`;
