import styled from 'styled-components';
import Header from './Header';

export default function Content({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  > main {
    max-width: 1100px;
    margin: auto;
    margin-top: 40px;
  }
  margin-bottom: 64px;
`;
