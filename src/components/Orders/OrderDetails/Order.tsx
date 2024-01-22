import styled from 'styled-components';
import { formatedPrice } from '../../../utils/utils';
import React from 'react';
import { useOrdersContext } from '../../../utils/context';

// type OrderProps = {};

export function Order() {
  const { order } = useOrdersContext();
  const totalPrice = order.price + order.additionals.reduce((n, m) => n + m.price, 0);
  return (
    <Container>
      <ul>
        <li>
          {order.quantity}x {order.name} <span>R${formatedPrice(order.price)}</span>
        </li>
        {order.additionals.map((additional) => (
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
    </Container>
  );
}

const Container = styled.div`
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
