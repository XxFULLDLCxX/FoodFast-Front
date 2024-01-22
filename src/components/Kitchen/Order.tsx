import { FaXmark, FaCheck } from 'react-icons/fa6';
import styled, { css } from 'styled-components';

type OrderProps = {
  ready?: boolean;
  notes?: boolean;
};

export function Order({ notes, ready }: OrderProps) {
  return (
    <Li $ready={ready}>
      <div>
        <div className="image">
          <img src="https://fakeimg.pl/60x55/" alt="" />
        </div>
        <div className="details">
          <p>200 - UserName</p>
          <p>1x Product Name</p>
        </div>
        <div>
          <FaXmark class="icon-Xmark" />
          <FaCheck class="icon-Check" />
        </div>
      </div>
      {notes && (
        <fieldset className="notes">
          <legend>Observações:</legend>
          <p>Retira a cebola</p>
        </fieldset>
      )}
    </Li>
  );
}

const Li = styled.li<{ $ready: OrderProps['ready'] }>`
  box-shadow: 1px 3px 15px 0px rgba(0, 0, 0, 0.1);
  max-width: 380px;
  background-color: #ffffff;
  ${({ $ready }) =>
    $ready &&
    css`
      border: 1px solid #479d49;
    `}
  border-radius: 20px;
  > div {
    padding: 11px 18px 11px 28px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .image {
      box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.09);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      width: 60px;
      height: 55px;
      img {
        width: 39px;
        height: 39px;
        border-radius: 15px;
      }
    }
    .details {
      margin-left: 23px;
      margin-right: auto;
      p {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        text-align: center;
        letter-spacing: 0.04em;
        &:last-of-type {
          font-size: 10px;
          margin-top: 9px;
          font-weight: 300;
        }
      }
    }
    svg {
      padding: 10px;
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
    .icon-Xmark {
      color: #cf0303;
      background-color: #fae5e5;
      margin-right: 4px;
    }
    .icon-Check {
      margin-left: 7px;
      color: #15a81b;
      background-color: #e5f5e6;
    }
  }
  .notes {
    position: relative;
    margin: auto;
    margin-top: 37px;
    margin-bottom: 19px;
    padding: 15px 12px;
    legend {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.02em;
      position: absolute;
      top: -25px;
      left: 0px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 0.02em;
    }
    max-width: 336px;
    height: 69px;
    border: 1px solid #b5b5b5;
    border-radius: 4px;
    h3 {
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.02em;
    }
  }
`;
