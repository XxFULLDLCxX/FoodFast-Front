import styled from 'styled-components';
import Content from '../components/Content';
import { Preparing } from '../components/Kitchen/Preparing';
import { Ready } from '../components/Kitchen/Ready';

export default function Kitchen() {
  return (
    <Content>
      <Main>
        <Preparing />
        <Ready />
      </Main>
    </Content>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
