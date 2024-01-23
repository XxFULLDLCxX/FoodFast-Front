/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    min-height: 100svh;
    min-height: 100dvh;
    background-color: #ffffff;
  }
  ::-webkit-scrollbar {
    width: 0;
  } 
  :not(path) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }

  input, button {
    outline: none;
    border: none;
    background-color: inherit;
  }
  img {
    object-fit: cover;
    
  }

`;

export default GlobalStyle;
