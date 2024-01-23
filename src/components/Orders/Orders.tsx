import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { getOrderAdditionals, getOrdersByCode } from '../../services/ordersApi';
import { useOrdersContext } from '../../utils/context';
import { OrderAdditionalsResponse, OrdersResponse } from '../../utils/protocols';
import { formatedPrice } from '../../utils/utils';

type AdditionalResponse = OrderAdditionalsResponse['additional'];

export function Orders() {
  const [orders, setOrders] = useState<OrdersResponse[]>([]);
  const [orderAdditionals, setOrderAdditionals] = useState<{
    [key: OrderAdditionalsResponse['orderId']]: AdditionalResponse[];
  }>({});
  const { payment } = useOrdersContext();

  useEffect(() => {
    if (payment.code !== 0) {
      getOrdersByCode(payment.code)
        .then((data) => {
          console.log(data);
          setOrders(data);
          data.forEach((order) => {
            getOrderAdditionals(order.id)
              .then((data) => {
                const additionals = [...data.map((a) => a.additional)];
                setOrderAdditionals((prev) => ({ ...prev, [order.id]: additionals }));
              })
              .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const totalPrice = orders.reduce((n, { products, id }) => {
    if (id in orderAdditionals) {
      return n + products.price + orderAdditionals[id].reduce((n, { price }) => n + price, 0);
    } else return n + products.price;
  }, 0);

  return (
    <Container>
      <ul>
        {orders.map(({ products, ...order }) => (
          <>
            <li className="product">
              {order.quantity} x {products.name} <span>R${formatedPrice(products.price)}</span>
            </li>
            {order.id in orderAdditionals &&
              orderAdditionals[order.id].map((additional) => (
                <React.Fragment key={additional.id}>
                  <li className="additional">
                    {additional.name}
                    <span>{formatedPrice(additional.price)}</span>
                  </li>
                </React.Fragment>
              ))}
          </>
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
    justify-content: center;
    gap: 20px;
    > li {
      display: flex;
      width: 100%;
      font-weight: 300;
      font-size: 14px;

      &:not(.product) {
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
