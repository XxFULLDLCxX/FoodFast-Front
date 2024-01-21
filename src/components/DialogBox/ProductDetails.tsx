import React, { useState } from 'react';
import { FaXmark, FaPlus, FaMinus } from 'react-icons/fa6';
import { createGlobalStyle, styled } from 'styled-components';
import { AdditionalsParams, ProductParams } from '../../utils/protocols';
import { ProductBanner, ProductBannerProps, type } from '../Orders/product/Banner';
import { Additionals } from './Additionals';
import { useOrdersContext } from '../../utils/context';
import { defaultOrder } from '../../utils/defauts';
import { formatedPrice } from '../../utils/utils';
import { postOrders, postPayments } from '../../services/ordersApi';
import { useNavigate } from 'react-router-dom';
// import burgerDefault from '../../assets/images/burger.png';

type ProductDetailsProps = {
  data: ProductParams;
  bg: string;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProductDetails({ data, bg, setIsSelected }: ProductDetailsProps) {
  const quantityLimit = 8;
  const navigate = useNavigate();
  const { order, setOrder, setOrders } = useOrdersContext();
  const press = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(false);
    console.log('test', e);
    setOrder(defaultOrder);
  };
  const totalPrice = data.price + order.additionals.reduce((n, m) => n + m.price, 0);
  const addOrder = (e: React.FormEvent) => {
    e.preventDefault();
    postOrders({ quantity: order.quantity, price: totalPrice, productId: data.id, name: data.name }).then((data) => {
      console.log(data, 'test orders.');
    });
    navigate('/orders/payment');
  };

  return (
    <Container onSubmit={addOrder}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Exit onClick={press} />
          <h1>Revise seu pedido!</h1>
        </div>
        <Product>
          <Banner $banner={data.banner} $bg={bg}>
            <div></div>
            <img src={data.image} alt="" />
          </Banner>
          <Details>
            <h2>{data.name}</h2>
            <p>{data.details}</p>
            <h3>R${formatedPrice(data.price)}</h3>
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
        </Product>
        <Additionals productId={data.id} />
        <Notes>
          <h2>Observações</h2>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Adicione uma observação ao pedido"
            onChange={(e) => setOrder((prev) => ({ ...prev, note: e.target.value }))}
          ></textarea>
        </Notes>
        <Order>
          <ul>
            <li>
              {order.quantity}x {data.name} <span>R${formatedPrice(data.price)}</span>
            </li>
            {order.additionals.map((additional, i) => (
              <React.Fragment key={additional.id}>
                <li>
                  {additional.name}
                  <span>{formatedPrice(additional.price)}</span>
                </li>
              </React.Fragment>
            ))}
          </ul>

          <h2>Total do Pedido: </h2>
          <h3>R${formatedPrice(totalPrice)}</h3>
        </Order>
        <Section>
          <button>Continuar adicionando</button>
          <button type="submit">Adicionar ao pedido</button>
        </Section>
      </Wrapper>
    </Container>
  );
}

const Section = styled.section`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  max-width: 614px;
  width: 100%;
  margin-left: auto;
  button {
    border-radius: 22px;
    text-align: center;
    width: 284px;
    height: 51px;
    border: 1px solid #125c13;
    color: #125c13;
    &:last-child {
      background-color: #125c13;
      color: #ffffff;
    }
  }
`;

const Order = styled.div`
  margin-top: 45px;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  min-height: 240px;
  padding: 45px 43px;
  position: relative;
  > ul {
    display: flex;
    flex-direction: column;
    > li {
      display: flex;
      width: 100%;
      font-weight: 300;
      font-size: 14px;
      &:not(:first-child) {
        margin-left: 18px;
        span {
          margin-right: 18px;
        }
      }
      > span {
        font-size: 16px;
        margin-left: auto;
      }
    }
    padding-bottom: 32px;
    margin-bottom: 21px;
    border-bottom: 1px dashed #c3c3c3;
  }
  > h2 {
    font-weight: 400;
  }
  > h3 {
    margin-top: 14px;
    font-weight: 700;
    font-size: 32px;
  }
`;

const Notes = styled.div`
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
    color: #a2a2a2;
    width: 100%;
    height: 113px;
  }
`;

const Product = styled.div`
  margin-top: 53px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 34px;
`;

const Banner = styled(ProductBanner)<ProductBannerProps>`
  flex: 0 0 100%;
  width: 200px;
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
    align-self: flex-start;
    width: max-content;
    font-weight: 700;
    font-size: 16px;
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

const Exit = styled(FaXmark)`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: -30px 33px 0 auto;
  color: #9f9f9f;
  font-size: 28px;
`;

const Wrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 63px 83px;
  border-radius: 15px;
  width: 65%;
  position: relative;
  min-width: 600px;
  height: max-content;
  background-color: #ffffff;
  h1 {
    font-size: 32px;
    font-weight: 700;
  }
`;

const Container = styled.form`
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
