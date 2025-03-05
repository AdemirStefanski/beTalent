import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Outros resets ou normalizações */
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #F0F0F0;
    line-height: 1.6;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
