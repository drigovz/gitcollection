import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #f0f0f5 url(${background}) no-repeat 70% top;
    /* suavizar fontes */
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-moz-selection {
    color: #fff;
    background: #36382e;
  }

    ::selection {
      color: #fff;
      background: #36382e;
    }
`;
