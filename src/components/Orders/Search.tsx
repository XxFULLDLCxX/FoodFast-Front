import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { getProductsBySearch } from '../../services/ordersApi';
import { useOrdersContext } from '../../utils/context';

export default function Search() {
  const [isVisible, setIsVisible] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const handleScroll = () => setIsVisible(window.scrollY > 250);    
  const [value, setValue] = useState('');
  const { setProducts } = useOrdersContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const press = (e: React.FormEvent) => {
    e.preventDefault();
    getProductsBySearch(value).then(setProducts);
  };

  return (
    <SearchContainer $isVisible={isVisible} onSubmit={press}>
      <h1 ref={h1Ref}>Seja bem vindo!</h1>
      <input
        type="text"
        placeholder="O que você procura?"
        autoFocus={true}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.form<{ $isVisible: boolean }>`
  margin-bottom: 40px;
  min-height: 80px;
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  input {
    width: 308px;
    height: 40px;
    padding: 0px 17px;
    outline: none;
    border-radius: 2px;
    background-color: #f4f4f4;
    line-height: 40px;
    &::placeholder {
      color: #757575;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.04em;
    }
    ${({ $isVisible }) => {
      if ($isVisible)
        return css`
          position: fixed;
          z-index: 5;
          top: 3px;
          left: 0px;
          right: 0px;
          margin: auto;
        `;
    }}
  }
`;
