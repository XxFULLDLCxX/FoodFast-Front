import styled, { css } from 'styled-components';

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input.attrs(({ type }) => ({ required: type !== 'submit' }))`
  padding: 15px;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: #f4f4f4;
  &::placeholder {
    font-family: sans-serif;
    color: #858585;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: 0.02em;
  }
`;

const utils = {
  center,
};

export const TitleH2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const DetailsH3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 300;
`;

export default utils;
