import { FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  const navigate = useNavigate();
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 63px 83px;
  border-radius: 15px;
  width: 65%;
  position: relative;
  min-width: 600px;
  min-height: 600px;
  height: max-content;
  background-color: #ffffff;
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;
