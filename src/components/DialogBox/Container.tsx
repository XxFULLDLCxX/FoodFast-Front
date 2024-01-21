import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Content from './Content';

type DialogProps = {
  children: React.ReactNode;
};

export default function Dialog({ children }: DialogProps) {
  const navigate = useNavigate();
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Container>
      <GlobalStyle />
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  overflow: scroll;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000060;
  z-index: 20;
`;
const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden !important;
  }
`;
