import Content from '../components/Content';
import { FaMoneyBill1 } from 'react-icons/fa6';
import { FaMoneyCheck } from 'react-icons/fa6';
import { IoIosCard } from 'react-icons/io';
import styled from 'styled-components';
import { useOrdersContext } from '../utils/context';
import { formatedPrice } from '../utils/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentDialog } from '../components/Orders/Payment/PaymentDialog';

export default function Payments() {
  const { order } = useOrdersContext();
  const totalPrice = order.price + order.additionals.reduce((n, m) => n + m.price, 0);
  const handleClick = () => {};
  const navigate = useNavigate();
  const [select, setSelect] = useState(false);
  const press = () => {
    setSelect((prev) => !prev);
    navigate('/kitchen');
  };
  return (
    <>
      {select && <PaymentDialog />}
      <Content>
        <Header>
          <h1>
            <FaMoneyCheck clasName="icon" />
            Pagamentos
          </h1>
        </Header>
        <Main>
          <section>
            <h2>Resumo da compra</h2>
            <div className="order">
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

              <div>
                <p>Total do Pedido: </p>
                <h3>R${formatedPrice(totalPrice)} </h3>
              </div>
            </div>
            <div className="nv-2c user">
              <div>
                <label htmlFor="username">Nome do cliente</label>
                <input type="text" name="" id="username" placeholder="Primeiro nome" />
              </div>
              <div>
                <label htmlFor="code">Código</label>
                <input type="number" name="" id="code" placeholder="200" />
              </div>
            </div>
          </section>
          <section>
            <h2>Selecione a forma de pagamento</h2>
            <ul className="payment">
              <li>
                <label htmlFor="debit">
                  <IoIosCard className="icon" />
                  Débito
                  <input type="checkbox" id="debit" onChange={handleClick} />
                </label>
              </li>
              <li>
                <label htmlFor="credit">
                  <IoIosCard className="icon" />
                  Crédito
                  <input type="checkbox" id="credit" onChange={handleClick} />
                </label>
              </li>
              <li>
                <label htmlFor="money">
                  <FaMoneyBill1 className="icon" />
                  Dinheiro
                  <input type="checkbox" id="money" onChange={handleClick} />
                </label>
              </li>
            </ul>
            <div className="nv-2c">
              <div>
                <label htmlFor="paid">Valor entregue</label>
                <input type="text" name="" id="paid" placeholder="R$ 0,00" />
              </div>
              <div>
                <label htmlFor="code">Troco</label>
                <input type="number" name="" id="code" placeholder="R$ 0,00" />
              </div>
            </div>
          </section>
        </Main>
        <Footer>
          <button>Cancelar</button>
          <button onClick={press}>Finalizar pedido</button>
        </Footer>
      </Content>
    </>
  );
}

const Main = styled.div`
  height: 100%;
  .nv-2c {
    margin-top: 14px;
    display: flex;
    gap: 25px;
    > div {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.08em;
    }
    input {
      margin-top: 8px;
      padding: 15px;
      background-color: #f4f4f4;
      font-weight: 300;
      font-size: 14px;
      height: 41px;
    }
  }
  .icon {
    color: #125c13;
    font-size: 18px;
  }
  display: flex;
  justify-content: space-between;
  .order {
    margin-bottom: 18px;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    min-width: 482px;
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

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-weight: 700;
        font-size: 32px;
      }
      h2 {
        font-weight: 400;
      }
    }
  }
  section {
    > h2 {
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 12px;
    }
  }
  .payment {
    label {
      margin-bottom: 19px;
      padding: 0px 31px;
      display: flex;
      gap: 19px;
      align-items: center;
      width: 480px;
      height: 74px;
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.08em;
      input {
        margin-left: auto;
      }
    }
    input {
      flex-shrink: 0;
      margin: 0px;
      padding: 0px;
      /* border: 5px solid #125c13; */
      border-radius: 50%;
      width: 18px;
      height: 18px;
      outline: 2px solid #125c13;
      &:checked {
        background-color: #125c13;
        border: 2px solid #ffffff;
      }
    }
  }
`;

const Header = styled.header`
  svg {
    color: #125c13;
    font-size: 18px;
    margin-right: 21px;
  }
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 26px;
  }
  margin-bottom: 39px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 59px;
  right: 109px;
  display: flex;
  justify-content: space-between;
  max-width: 614px;
  width: 100%;
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
