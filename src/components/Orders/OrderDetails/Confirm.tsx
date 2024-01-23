import styled from 'styled-components';
import { postOrderAdditionals, postOrders, postPayments } from '../../../services/ordersApi';
import { useOrdersContext } from '../../../utils/context';
import { useEffect, useState } from 'react';
import { OrdersParams } from '../../../utils/protocols';

// type ConfirmProps = {};
type OrderResponse = OrdersParams & { id: number };

export function Confirm() {
  const [confirmOrder, setConfirmOrder] = useState<OrderResponse | undefined>(undefined);
  const { payment, order, setPayment } = useOrdersContext();

  const addPayment = () => {
    console.log(payment);

    postPayments({ code: payment.code })
      .then(({ code, id }) => {
        if (code !== payment.code) {
          localStorage.setItem('payment', JSON.stringify({ code, paymentId: id }));
          setPayment((prev) => ({ ...prev, code, paymentId: id }));
        }
        console.log(payment, 'after');
        addOrder(code, id);
      })
      .catch((err) => console.log(err));
  };
  const addOrder = (code: number = payment.code, paymentId: number = payment.paymentId) => {
    const { note, quantity, productId } = order;
    postOrders({ code, note, quantity, productId, paymentId })
      .then((data) => {
        setConfirmOrder(data);
        addOrderAddtionals(data.id);
        console.log('addOrder OK', data);
      })
      .catch((err) => console.log(err));
  };
  const addOrderAddtionals = (id: number | undefined = confirmOrder?.id) => {
    if (id !== undefined) {
      order.additionals.map((additional) => {
        postOrderAdditionals({ additionalId: additional.id, orderId: id })
          .then((data) => {
            console.log('funcionou');
            console.log('addAdditional OK', data);
          })
          .catch((err) => console.log(err));
      });
    }
  };
  const press = async () => {
    if (payment.code === 0 || payment.paymentId === null) {
      addPayment();
    } else {
      addOrder();
    }
  };
  return (
    <Container>
      <button onClick={press}>Continuar adicionando</button>
      <button onClick={press}>Adicionar ao pedido</button>
    </Container>
  );
}

const Container = styled.section`
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
