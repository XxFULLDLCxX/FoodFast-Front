import styled, { css } from 'styled-components';
import { ProductParams } from '../../utils/protocols';
import { FaCheck } from 'react-icons/fa6';
import ProductDetails from '../tooltip/ProductDetails';
import { useState } from 'react';
import { ProductBanner } from './product/Banner';
import { useOrdersContext } from '../../utils/context';

type ProductProps = {
  data: ProductParams;
  isInOrder: boolean;
  line: number;
  setInOrder: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function Product({ data, line, isInOrder }: ProductProps) {
  const colors = ['#f96666', '#125c13', '#ffeb70'];
  const bg = colors[line % colors.length];
  const formatedPrice = (data.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const [isSelected, setIsSelected] = useState(data.id === 170);
  const { order, setOrder } = useOrdersContext();
  const press = () => {
    setIsSelected(true);
    setOrder((prev) => ({ ...prev, name: data.name, price: data.price }));
  };
  return (
    <>
      {isSelected && <ProductDetails data={data} bg={bg} setIsSelected={setIsSelected} />}
      <ProductBanner $banner={data.banner} $bg={bg} onClick={press}>
        {isSelected && (
          <Selected>
            <FaCheck />
          </Selected>
        )}
        <img src={data.image} alt="" />
        <Details>
          <h2>{data.name}</h2>
          <p>{data.teaser}</p>
          <h3>R${formatedPrice}</h3>
        </Details>
      </ProductBanner>
    </>
  );
}

const Selected = styled.main`
  > svg {
    position: absolute;
    font-size: 32px;
    color: #ffffff;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  z-index: 1;
  position: absolute;
  bottom: 0px;
  background-color: #008800b3;
`;

const Details = styled.div`
  padding-top: 55px;
  h2 {
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.02em;
  }
  p {
    margin-top: 10px;
    font-weight: 300;
    font-size: 10px;
    text-align: center;
    letter-spacing: 0.04em;
  }
  h3 {
    margin-top: 30px;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.02em;
  }
`;
