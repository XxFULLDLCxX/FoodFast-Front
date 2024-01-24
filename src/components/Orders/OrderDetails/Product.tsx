import { FaMinus, FaPlus } from 'react-icons/fa6';
import styled from 'styled-components';
import { useOrdersContext } from '../../../utils/context';
import { ProductBanner, ProductBannerProps } from '../Products/Banner';
import { ProductParams } from '../../../utils/protocols';
import { formatedPrice } from '../../../utils/utils';

type ProductProps = {
  data: ProductParams;
  bg: string;
};

export function Product({ data, bg }: ProductProps) {
  const quantityLimit = 8;
  const { order, setOrder } = useOrdersContext();

  return (
    <Container>
      <Banner $banner={data.banner} $bg={bg}>
        <div></div>
        <img src={data.image} alt="" />
      </Banner>
      <Details>
        <h2>{data.name}</h2>
        <p>{data.details}</p>
        <h3>R${formatedPrice(order.quantity * data.price)}</h3>
        <QuantityCounter>
          <FaMinus
            onClick={() => order.quantity > 1 && setOrder((prev) => ({ ...prev, quantity: prev.quantity - 1 }))}
          />
          {order.quantity}
          <FaPlus
            onClick={() =>
              order.quantity < quantityLimit && setOrder((prev) => ({ ...prev, quantity: prev.quantity + 1 }))
            }
          />
        </QuantityCounter>
      </Details>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 53px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

const Banner = styled(ProductBanner)<ProductBannerProps>`
  width: 201px;
  height: 165px;
`;

const Details = styled.div`
  flex: 1 1;
  text-align: left;
  min-width: 200px;
  position: relative;
  h2 {
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
  p {
    max-width: 211px;
    margin-top: 10px;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.04em;
  }
  h3 {
    position: absolute;
    top: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: 66px;
    align-self: flex-start;
    width: max-content;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.02em;
  }
`;

const QuantityCounter = styled.div`
  user-select: none;
  margin-top: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  color: #000000;
  svg {
    flex-shrink: 0;
    padding: 10px;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    width: 41px;
    height: 41px;
    background-color: #125c13;
    border-radius: 50%;
    z-index: 1;
  }
  &::before {
    position: absolute;
    content: '';
    left: 20px;
    width: 80px;
    height: 41px;
    border: 1px solid #125c13;
  }
`;
