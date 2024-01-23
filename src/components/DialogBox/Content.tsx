import styled from 'styled-components';

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 133px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  padding: 63px 83px;
  border-radius: 15px;
  width: 65%;
  position: relative;
  min-width: 800px;
  background-color: #ffffff;
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;
