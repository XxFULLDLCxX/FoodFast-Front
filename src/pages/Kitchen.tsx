import styled from 'styled-components';
import Content from '../components/Content';
import { Preparing } from '../components/kitchen/Preparing';
import { Ready } from '../components/kitchen/Ready';

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
