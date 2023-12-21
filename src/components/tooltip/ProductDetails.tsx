import { styled } from 'styled-components';
import burgerDefault from '../../assets/images/burger.png';

export default function ProductDetails() {
  const defaultDetails = {
    name: 'Smash da casa',
    description: '2x hambúrger 200g, queijo, cheddar, tomate, alface, picles, cebola, molho da casa',
    value: 3050,
    image: burgerDefault,
  };
  return <Container></Container>;
}

const Container = styled.div``;
