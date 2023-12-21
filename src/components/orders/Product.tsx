import styled, { css } from 'styled-components';

type ProductParams = {
  name: string;
  image: string;
  banner?: string;
  price: number;
  description: string;
};

export default function Product({ name, image, banner, description, price }: ProductParams) {
  const formatedPrice = (price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  return (
    <ProductContainer $banner={banner}>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{description.slice(-1 - description.indexOf(','))}</p>
        <h3>R${formatedPrice}</h3>
      </div>
    </ProductContainer>
  );
}

const ProductContainer = styled.li<{ $banner?: string }>`
  flex: 1 1 25%;
  position: relative;
  max-width: 200px;
  height: 245px;
  ${({ $banner }) =>
    $banner
      ? css`
          background-image: url(${$banner});
          background-position: 0px 0px;
          background-size: contain;
          background-repeat: no-repeat;
        `
      : Array.from(
          { length: 12 },
          (_, i) => `
            &:nth-child(12n + ${i + 1}) {
              background: ${['#f96666', '#125c13', '#ffeb70'][Math.floor(i / 4)]};
            }
          `
        ).join('')}
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding-top: 70px;
  div {
    background-color: #ffffff;
    border-radius: 15px;
    height: 100%;
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
  }
  img {
    position: absolute;
    object-fit: cover;
    top: 10px;
    left: 0px;
    right: 0px;
    margin: auto;
    width: 124px;
  }
`;
