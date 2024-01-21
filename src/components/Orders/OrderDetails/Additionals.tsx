import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProductAdditionals } from '../../../services/ordersApi';
import { AdditionalsParams } from '../../../utils/protocols';
import { useOrdersContext } from '../../../utils/context';

type AdditionalsProps = {
  productId: number;
};

type AdditionalProps = {
  data: AdditionalsParams;
};

export function Additionals({ productId }: AdditionalsProps) {
  const [additionals, setAdditionals] = useState<AdditionalsParams[]>([]);
  useEffect(() => {
    getProductAdditionals(productId).then(setAdditionals);
  }, []);
  return (
    <Container>
      <h2>Adicionais</h2>
      <p>Selecione os ingredientes que você quer adicionar a mais no seu lanche.</p>
      {additionals.map((data) => (
        <Additional key={data.id} data={data} />
      ))}
    </Container>
  );
}

export function Additional({ data: { id, price, name, ...data } }: AdditionalProps) {
  const formatedPrice = (price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const { order, setOrder } = useOrdersContext();
  const [checked, isChecked] = useState(false);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(e.target.checked);
    if (e.target.checked) {
      setOrder((prev) => ({ ...prev, additionals: [...prev.additionals, { id, price, name }] }));
    } else {
      setOrder((prev) => ({ ...prev, additionals: prev.additionals.filter((a) => a.id !== id) }));
    }
  };
  return (
    <AdditionalContainer htmlFor={`additional${id}`} $checked={checked}>
      <img src={data.image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{data.info}</p>
      </div>
      <h3>R${formatedPrice}</h3>
      <input type="checkbox" id={`additional${id}`} onChange={handleClick} />
    </AdditionalContainer>
  );
}

const Container = styled.div`
  > h2 {
    margin-top: 70px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
`;

const AdditionalContainer = styled.label<{ $checked: boolean }>`
  cursor: pointer;
  user-select: none;
  margin-top: 33px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  img {
    width: 94px;
    height: 86px;
    border-radius: 15px;
  }
  h3 {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: ${({ $checked }) => ($checked ? '#000000' : '#9f9f9f')};
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
  > div {
    width: 100%;
    text-align: left;
    h2 {
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 0.02em;
    }
    p {
      margin-top: 10px;
      font-weight: 300;
      font-size: 12px;
      letter-spacing: 0.04em;
    }
  }
`;
